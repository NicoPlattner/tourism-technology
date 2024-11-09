import { motion } from "framer-motion";
import type { Area } from "../AreaCard";

export const CollapsedView = ({ area }: { area: Area }) => (
  <>
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
      <motion.p layoutId={`region-${area.slug}`} className="text-neutral-500">
        {area.region}
      </motion.p>
    </div>
  </>
);