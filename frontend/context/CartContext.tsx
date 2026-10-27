"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: string;
  image?: string;
}

interface CartContextType {
  cartCount: number;
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;
  isCommissionOpen: boolean;
  setIsCommissionOpen: (open: boolean) => void;
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "init-1",
      name: "Veridian Ikebana No. IV",
      price: "$290",
      image: "/images/product-ikebana-willow.jpg",
    },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => [...prev, newItem]);
    setToastMessage(`"${newItem.name}" added to your curated bag.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const clearToast = () => setToastMessage(null);

  return (
    <CartContext.Provider
      value={{
        cartCount: items.length,
        items,
        addToCart,
        isBagOpen,
        setIsBagOpen,
        isCommissionOpen,
        setIsCommissionOpen,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
