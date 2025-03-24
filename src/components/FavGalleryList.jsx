import GalleryItem from "./GalleryItem";
import { useFavorites } from "./FavoritesContext";
//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const FavGalleryList = (props) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();


    return (
        <div className="flex flex-col items-center h-full w-full relative">
            {/* Scrollable Gallery List */}
            <div className="flex flex-col align-center overflow-y-auto overflow-x-hidden scrollbar-hide rounded-xl h-full">
                {props.list.map((g) => (
                    <div key={g.galleryId} className="w-full flex flex-col flex-grow">

                        <div className="flex flex-row items-center">
                            <GalleryItem image={g.image} name={g.galleryName} id={g.galleryId} city={g.galleryCity} country={g.galleryCountry} galleryHandler={props.galleryHandler} />
                            <img className="rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("galleries", g)}/>
                        </div>
                        <hr className="bg-gray-600 h-[2px] ml-4" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FavGalleryList;
