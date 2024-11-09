"use client"; 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Area = {
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

export function AreaCard({ area, regionSlug, isActive, setActiveCard }: AreaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Close card on "Escape" key press
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
      {area.image && (
        <motion.img
          src={process.env.NEXT_PUBLIC_PLACEHOLDER_IMAGE_URL}
          alt={area.name}
          layoutId={`image-${area.slug}`}
          className="w-full h-40 object-cover"
          style={{ borderRadius: 20 }}
        />
      )}
      <div className="p-4">
        <motion.h3
          layoutId={`title-${area.slug}`}
          className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100"
        >
          {area.name}
        </motion.h3>
        <motion.p
          layoutId={`region-${area.slug}`}
          className="text-neutral-500"
        >
          {area.region}
        </motion.p>
        {isActive && (
          <motion.div
            layoutId={`content-${area.slug}`}
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>{area.summary}</p>
            <button
              onClick={() => setActiveCard(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}