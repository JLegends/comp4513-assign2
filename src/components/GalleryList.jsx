import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Icon package
import GalleryItem from "./GalleryItem";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const GalleryList = (props) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 1600; 
      scrollRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#E1E2E0] w-1/5 h-screen relative">
      {/* Up Scroll Button */}
      <button
        onClick={() => scroll("up")}
        className="absolute top-6 left-1/2 -translate-x-1/2 overflow-auto z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md"
      >
        <ChevronUp size={24} />
      </button>

      {/* Scrollable Gallery List */}
      <div ref={scrollRef} className="flex flex-col align-center justify-center max-h-full snap-y snap-mandatory space-y-3 overflow-y-scroll rounded-xl py-6">
        {props.list.map((g) => (
          <div key={g.galleryId} className="shrink-0 snap-start scroll-mt-4">
            <GalleryItem image={g.image} name={g.galleryName} />
          </div>
        ))}
      </div>

      {/* Down Scroll Button */}
      <button onClick={() => scroll("down")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default GalleryList;
