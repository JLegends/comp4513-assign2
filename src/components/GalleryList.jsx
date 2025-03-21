import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon package
import GalleryItem from "./GalleryItem";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const GalleryList = (props) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Gallery List */}
      <div
        ref={scrollRef}
        className="flex max-w-full snap-x snap-mandatory space-x-3 overflow-x-scroll overflow-hidden scrollbar-hide rounded-xl p-2"
      >
        {props.list.map((g) => (
          <div key={g.galleryId} className="shrink-0 snap-start scroll-ml-4">
            <GalleryItem image={g.image} name={g.galleryName} />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default GalleryList;
