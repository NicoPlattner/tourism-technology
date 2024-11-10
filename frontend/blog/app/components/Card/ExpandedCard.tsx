import { motion } from "framer-motion";
import type { Area } from "../AreaCard";

function test(e: Event) {
  e.stopPropagation()
  // Get the <object> element
  const svgObject = document.querySelector("object");

  if (svgObject && svgObject.contentDocument) {
    // Access the contentDocument of the <object> which contains the SVG

    for (let i = 0; i < 160; i++) {
      const randomWidth = Math.floor(Math.random() * 8)
      const path = svgObject.contentDocument.getElementById("p"+i);
  
      if (path) {
        // Modify the strokeWidth of the path element
        path.style.strokeWidth = '' + randomWidth + 'px';
      } else {
        console.log("SVG document not loaded or not found");
      }
    }
  } 
}

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
        className="text-xl font-semibold mb-2 text-neutral-900"
      >
        {area.name}
      </motion.h3>

      <motion.p layoutId={`region-${area.slug}`} className="text-neutral-500">
        {area.region}
        <button onClick={(e) => test(e)}>Utilization</button>

      </motion.p>
      <motion.div
        layoutId={`content-${area.slug}`}
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <object data="/drawing.svg" style={{width: '100%', maxHeight: '600px'}}> </object>


      </motion.div>
    </div>
  </>
);