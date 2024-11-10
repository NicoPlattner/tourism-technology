"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Area } from "../AreaCard";

type Pist = {
  color: string;
  id: number;
  name: string;
  speedScore: number;
  utilizationScore: number;
};

function showPistStat(e: any, pists: Pist[], stat: string) {
  e.stopPropagation()
  const svgObject = document.querySelector("object");

  pists.forEach(pist => {
    if (svgObject && svgObject.contentDocument) {
      // Access the contentDocument of the <object> which contains the SVG
  
      const width = pist[stat]
      const path = svgObject.contentDocument.getElementById("p"+pist.id);

      console.log(stat);
      
      console.log(width);
      
      if (path) {
        // Modify the strokeWidth of the path element
        path.style.strokeWidth = '' + width + 'px';
      } else {
        console.log("SVG document not loaded or not found");
      }
    }
  })
}

export const ExpandedView = ({ area, setActiveCard }: { area: Area; setActiveCard: (area: Area | null) => void }) => {
  const [pists, setPists] = useState<Pist[]>([]);

  useEffect(() => {
    const fetchPists = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/pists`);
        const data = await response.json();
        setPists(data);        
      } catch (error) {
        console.error("Failed to fetch pists:", error);
      }
    };

    fetchPists();
  }, []);

  return (
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
        <button onClick={(e) => showPistStat(e, pists, "speedScore")}>Utilization</button>

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
  )
};