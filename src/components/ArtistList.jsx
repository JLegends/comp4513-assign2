import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Icon package
import ArtistItem from "./ArtistItem";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const ArtistList = (props) => {
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

  const sortedArtists = [...props.list].sort((a, b) =>
    a.lastName.localeCompare(b.lastName, undefined, { sensitivity: 'base' })
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

      {/* Scrollable Artist List */}
      <div ref={scrollRef} className="flex flex-col align-center overflow-y-auto overflow-x-hidden scrollbar-hide rounded-xl min-h-0 flex-grow w-full">
        {sortedArtists.map((a) => (
          <div key={a.artistId} className="w-full flex flex-col">
            <ArtistItem firstName={a.firstName} lastName={a.lastName} birth={a.yearOfBirth} death={a.yearOfDeath} id={a.artistId} artistHandler={props.artistHandler}/>
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

export default ArtistList;
