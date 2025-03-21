import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Icon package
import GalleryItem from "./GalleryItem";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const GalleryList = (props) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 800; 
      scrollRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center h-full w-full relative">
      {/* Up Scroll Button */}
      <button
        onClick={() => scroll("up")}
        className="absolute top-6 left-1/2 -translate-x-1/2 overflow-auto z-10 p-2 bg-gray-400 hover:bg-gray-100 rounded-full shadow-md"
      >
        <ChevronUp size={24} />
      </button>

      {/* Scrollable Gallery List */}
      <div ref={scrollRef} className="flex flex-col align-center overflow-y-auto overflow-x-hidden scrollbar-hide rounded-xl py-2 h-[calc(100vh-5rem)]">
        {props.list.map((g) => (
          <div key={g.galleryId} className="w-full">
            <GalleryItem image={g.image} name={g.galleryName} id={g.galleryId} city={g.galleryCity} country={g.galleryCountry}/>
            <hr className="bg-gray-600 h-[2px]"/>
          </div>
        ))}
      </div>

      {/* Down Scroll Button */}
      <button onClick={() => scroll("down")}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 p-2 bg-gray-400 hover:bg-gray-100 rounded-full shadow-md"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default GalleryList;
