import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Icon package
import GalleryItem from "./GalleryItem";

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

  const sortedGalleries = [...props.list].sort((a, b) =>
    a.galleryName.localeCompare(b.galleryName, undefined, { sensitivity: 'base' })
  );

  return (
    <div className="flex flex-col items-center h-full w-full relative">
      {/* Up Scroll Button */}
      <button
        onClick={() => scroll("up")}
        className="absolute top-2 left-1/2 -translate-x-1/2 opacity-70 overflow-auto z-10 p-1.5 bg-gray-300 hover:bg-gray-100 rounded-full shadow-md"
      >
        <ChevronUp size={24} />
      </button>

      {/* Scrollable Gallery List */}
      <div ref={scrollRef} className="flex flex-col align-center overflow-y-auto overflow-x-hidden scrollbar-hide rounded-xl h-full">
        {sortedGalleries.map((g) => (
          <div key={g.galleryId} className="w-full flex flex-col flex-grow">
            <GalleryItem image={g.image} name={g.galleryName} id={g.galleryId} city={g.galleryCity} country={g.galleryCountry} galleryHandler={props.galleryHandler}/>
            <hr className="bg-gray-600 h-[2px] ml-4"/>
          </div>
        ))}
      </div>

      {/* Down Scroll Button */}
      <button onClick={() => scroll("down")}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 opacity-70 p-1.5 bg-gray-300 hover:bg-gray-100 rounded-full shadow-md"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default GalleryList;
