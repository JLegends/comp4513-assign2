import FavPaintingItem from "./FavPaintingItem";
import getArtistName from "./GetArtistName";
import { useFavorites } from "./FavoritesContext";
//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const FavPaintingList = (props) => {
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

    if (!props.paintings || props.paintings.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center h-full w-full relative">
            {props.paintings.map((p, index) => (
                <div key={p.paintingId} className="w-full flex flex-col">
                    <div className="flex flex-row items-center">
                        <FavPaintingItem index={index+1} title={p.title} name={getArtistName(p.artists)} year={p.yearOfWork} fileName={p.imageFileName} gallery={p.galleries.galleryName}/>  
                        <img className="rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("paintings", p)}/>
                    </div>
                    <hr className="bg-gray-600 h-[2px] ml-4"/>
                </div>
            ))}
        </div>
    );
};

export default FavPaintingList;
