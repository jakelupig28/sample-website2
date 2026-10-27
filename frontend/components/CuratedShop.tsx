"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, Check, X, Sparkles, Droplets, Compass, Maximize2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  specimens: string;
  vessel: string;
  edition: string;
  image: string;
  dimensions: string;
  lifespan: string;
  description: string;
  spatialPlacement: string;
  care: string;
}

const products: Product[] = [
  {
    id: "p-1",
    name: "Veridian Ikebana No. IV",
    category: "Ikebana Forms",
    price: "$290",
    specimens: "Wild Willow, Japanese Andromeda, Winter Hellebore",
    vessel: "Wheel-thrown Raw Basalt Stoneware",
    edition: "Studio Edition 04",
    image: "/images/product-ikebana-willow.jpg",
    dimensions: "27\" H × 17\" W × 14\" D (68cm × 43cm)",
    lifespan: "14–18 Days with fresh water conditioning",
    description:
      "An austere study in negative space and asymmetric tension. Arching wild willow branches frame dark winter hellebore and cascading Japanese andromeda, balanced with mathematical discipline under Sogetsu Ikebana philosophy.",
    spatialPlacement:
      "Curated for low-reflectance concrete consoles, cantilevered desks, or minimalist entryway plinths.",
    care: "Re-cut stems at 45° weekly under cool running water. Replenish with conditioned mineral water every 3 days.",
  },
  {
    id: "p-2",
    name: "Nocturne Orchid Study",
    category: "Rare Botanicals",
    price: "$340",
    specimens: "Black Vanda Orchid, Smoked Pine, Dried Lotus Pod",
    vessel: "Smoked Charcoal Stoneware",
    edition: "Studio Edition 12",
    image: "/images/product-nocturne-orchid-pureblack.jpg",
    dimensions: "32\" H × 14\" W × 11\" D (81cm × 36cm)",
    lifespan: "21–28 Days (Live blooms), Permanent (Vessel & Pod)",
    description:
      "A brooding monochromatic exploration featuring velvety, midnight-violet black Vanda orchids anchored with charred pine bark and an architectural dried lotus pod in textured smoked stoneware.",
    spatialPlacement:
      "Monolithic statement piece for dark slate dining tables, ambient lighting nooks, or limestone pedestals.",
    care: "Mist aerial root structures every 48 hours with distilled water. Maintain room temperature at 18–24°C.",
  },
  {
    id: "p-3",
    name: "Blush Ranunculus Structura",
    category: "Sculptural Stems",
    price: "$260",
    specimens: "Cloni Ranunculus, Quince Branches, Wild Briar",
    vessel: "Textured Cream Terracotta Urn",
    edition: "Seasonal Release",
    image: "/images/product-ranunculus-stems.jpg",
    dimensions: "22\" H × 19\" W × 16\" D (56cm × 48cm)",
    lifespan: "10–14 Days in tempered climates",
    description:
      "Voluminous layers of Italian Cloni ranunculus in soft blush juxtaposition with rigid, lichen-encrusted quince branches and wild briar tendrils, held in an ancient-patina cream terracotta urn.",
    spatialPlacement:
      "Softens brutalist interior architecture, travertine kitchen islands, and natural linen salon spaces.",
    care: "Change floral preservative water every 2 days. Avoid placement near direct sunlight or ripening fruit.",
  },
  {
    id: "p-4",
    name: "Obsidian Anthurium Form",
    category: "Rare Botanicals",
    price: "$310",
    specimens: "Black Queen Anthurium, Dried Palm Stems, Lichen",
    vessel: "Matte Iron Glaze Cylinder",
    edition: "Edition 07",
    image: "/images/product-anthurium-dark.jpg",
    dimensions: "28\" H × 15\" W × 13\" D (71cm × 38cm)",
    lifespan: "24–30 Days (exceptional durability)",
    description:
      "Deep midnight Anthurium spathes with patent-leather sheen set against scorched palm fronds and pale alpine lichen. An unapologetically sculptural and brutalist silhouette.",
    spatialPlacement:
      "Striking contrast on bleached oak credenzas, polished concrete plinths, or executive reception monoliths.",
    care: "Wipe leaves with a damp microfiber cloth once weekly; mist spathes gently every other day.",
  },
  {
    id: "p-5",
    name: "Céleste Peony Monolith",
    category: "Sculptural Stems",
    price: "$280",
    specimens: "Coral Charm Peony, Silver Thistle, Eucalyptus Pods",
    vessel: "Chiseled Travertine Basin",
    edition: "Limited Architecture",
    image: "/images/product-peony-dark.jpg",
    dimensions: "24\" H × 20\" W × 18\" D (61cm × 51cm)",
    lifespan: "8–12 Days (dynamic color evolution)",
    description:
      "Extravagant Coral Charm peonies that evolve in real time from deep sunset coral to antique ivory over 8 days, juxtaposed against silver globe thistles and Australian eucalyptus pods.",
    spatialPlacement:
      "Centerpiece for round dining tables, low marble coffee tables, and expansive loft living spaces.",
    care: "Keep in a cool room overnight to prolong flower opening cycle. Re-trim ends every 3 days.",
  },
  {
    id: "p-6",
    name: "Terre Magnolia Branches",
    category: "Ikebana Forms",
    price: "$360",
    specimens: "Saucer Magnolia, Foraged Moss Bark, Paperbush",
    vessel: "Hand-coiled Hudson River Clay",
    edition: "Curator Selection",
    image: "/images/product-magnolia-branches.jpg",
    dimensions: "36\" H × 26\" W × 20\" D (91cm × 66cm)",
    lifespan: "16–22 Days (buds bloom sequentially)",
    description:
      "Dormant winter saucer magnolia boughs erupting in porcelain blush blossoms, set into hand-coiled raw Hudson River stoneware with ancient wabi-sabi tactile character.",
    spatialPlacement:
      "Grand foyer entrance tables, soaring loft ceilings, or contemplative meditation corners.",
    care: "Branches are pre-split at the base for maximum hydration. Top off vase water daily as thirsty woody stems drink deeply.",
  },
];

const categories = ["All Studies", "Ikebana Forms", "Sculptural Stems", "Rare Botanicals"];

export default function CuratedShop() {
  const [activeCategory, setActiveCategory] = useState("All Studies");
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, setIsCommissionOpen } = useCart();

  // Handle ESC key to dismiss modal and disable body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const filtered =
    activeCategory === "All Studies"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2200);
  };

  const handleModalAdd = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2200);
  };

  return (
    <section id="assemblages" className="bg-black text-white py-12 md:py-16 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Smooth In-View Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-bold text-white">
              Curated <span className="font-serif italic font-normal text-white/70">Assemblages.</span>
            </h2>
          </div>

          <a
            href="#archive"
            className="group inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white transition-colors"
          >
            <span>View Complete Archive</span>
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Filter Navigation Tabs: Smooth Scale & Stagger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap py-5 sm:py-7"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.16em] transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 3D Perspective Grid with Clickable Container Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9 [perspective:1200px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, idx) => {
              const isAdded = !!addedIds[product.id];

              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 70, rotateX: 14, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.85,
                    delay: (idx % 3) * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col justify-between rounded-2xl p-4 bg-zinc-950 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl transform-gpu cursor-pointer"
                >
                  {/* Image Container with 4/5 Aspect Ratio and Quick Add Bar */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-black/40 border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />

                    {/* Subtle Click-to-Inspect Hint Badge */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white/90 flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3 h-3 text-white/70" />
                        <span>Inspect Study</span>
                      </div>
                    </div>

                    {/* Quick Add Button: Always accessible on mobile touch, slide-up hover on desktop */}
                    <div className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 sm:bottom-3 z-20 opacity-95 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg backdrop-blur-md border text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-xl ${
                          isAdded
                            ? "bg-emerald-900/95 text-white border-emerald-400/40"
                            : "bg-white hover:bg-stone-100 text-black border-white/20"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-300" />
                            <span>Added to Bag</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-black" />
                            <span>Quick Add +</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Editorial Product Information */}
                  <div className="pt-4 px-1 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400 mb-1.5">
                        <span>{product.category}</span>
                        <span className="text-white font-medium text-sm">{product.price}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-normal tracking-tight text-white group-hover:text-zinc-300 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {product.specimens}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>{product.edition}</span>
                      <span className="text-white/60 group-hover:text-white transition-colors flex items-center gap-1">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* BIG INFORMATIONAL CONTAINER / PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Big Modal Container (Increased Height, Strictly No Scroll on Desktop, Touch-Adaptive on Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden my-auto z-10 max-h-[92vh] md:h-[570px] flex flex-col md:flex-row no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close details"
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-white hover:text-black text-white/90 border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Adaptive Image Display for Mobile, Tablet, and Desktop */}
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full relative bg-black overflow-hidden flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                {/* Upper Left Corner: Category Tag */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20 pointer-events-none">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/90 font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                    {selectedProduct.category}
                  </span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Column: In-Depth Editorial Information (Comfortable Breathing Room, Generous Bottom Margin) */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-9 pb-8 sm:pb-9 md:pb-10 flex flex-col justify-between overflow-hidden no-scrollbar">
                <div className="space-y-4 sm:space-y-5">
                  {/* Header: Title & Price (Cleanly clear of the X close button) */}
                  <div className="pr-12 sm:pr-14">
                    <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-tight">
                      {selectedProduct.name}
                    </h2>

                    <div className="text-2xl sm:text-3xl font-serif text-white font-normal mt-2.5">
                      {selectedProduct.price} <span className="text-xs font-sans text-zinc-400 font-normal">USD</span>
                    </div>
                  </div>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>

                  {/* Clean Editorial Specifications - Pure Whitespace, No Divider Lines */}
                  <div className="pt-2 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Specimens</span>
                      <span className="text-zinc-200 text-right font-light">{selectedProduct.specimens}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Vessel</span>
                      <span className="text-zinc-200 text-right font-light">{selectedProduct.vessel}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Dimensions</span>
                      <span className="text-zinc-200 text-right font-light">{selectedProduct.dimensions}</span>
                    </div>
                  </div>
                </div>

                {/* Actions Bar (Generous Breathing Room from Bottom Edge) */}
                <div className="pt-6 mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => handleModalAdd(selectedProduct)}
                    className={`flex-1 py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                      addedIds[selectedProduct.id]
                        ? "bg-emerald-900 text-white border border-emerald-400/40"
                        : "bg-white hover:bg-zinc-200 text-black border border-white/20"
                    }`}
                  >
                    {addedIds[selectedProduct.id] ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag • {selectedProduct.price}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setIsCommissionOpen(true);
                    }}
                    className="py-3.5 px-5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 text-center whitespace-nowrap"
                  >
                    Bespoke Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
