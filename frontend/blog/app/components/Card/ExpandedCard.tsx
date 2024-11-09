import { motion } from "framer-motion";
import type { Area } from "../AreaCard";

export const ExpandedView = ({ area, setActiveCard }: { area: Area; setActiveCard: (area: Area | null) => void }) => (
  <>
    <button
      onClick={() => setActiveCard(null)}
      aria-label="Close"
      className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <div className="p-4">
      <motion.h3
        layoutId={`title-${area.slug}`}
        className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100"
      >
        {area.name}
      </motion.h3>
      <motion.p layoutId={`region-${area.slug}`} className="text-neutral-500">
        {area.region}
      </motion.p>
      <motion.div
        layoutId={`content-${area.slug}`}
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>{area.summary}</p>
      </motion.div>
    </div>
  </>
);