"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CollapsedView } from "./Card/CollapsedCard";
import { ExpandedView } from "./Card/ExpandedCard";

export type Area = {
  name: string;
  publishedAt: string;
  summary: string;
  image?: string;
  region: string;
  slug: string;
};

type AreaCardProps = {
  area: Area;
  regionSlug?: string;
  isActive: boolean;
  setActiveCard: (area: Area | null) => void;
};

export function AreaCard({ area, isActive, setActiveCard }: AreaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setActiveCard]);

  return (
    <motion.div
      layoutId={`card-${area.slug}`}
      onClick={() => setActiveCard(isActive ? null : area)}
      className={`rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 ${
        isActive ? "fixed inset-0 z-50 m-4" : ""
      }`}
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: isHovered || isActive ? 1 : 0.8,
        scale: isHovered && !isActive ? 1.05 : 1,
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius: 20 }}
    >
      {isActive ? (
        <ExpandedView area={area} setActiveCard={setActiveCard} />
      ) : (
        <CollapsedView area={area} />
      )}
    </motion.div>
  );
}