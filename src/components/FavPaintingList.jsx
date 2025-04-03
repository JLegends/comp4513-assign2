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
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex-shrink-0">             
                <table className="w-full border-collapse">
                    <thead className="w-full">
                        <tr className="text-left">
                            <th className="px-2 text-sm font-normal pl-[7px]">Paintings</th>
                        </tr>
                        <tr>
                            <td colSpan={5} className="py-2">
                                <hr className= "bg-gray-600 h-[2px] border-none"/>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="w-full flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom">
                {props.paintings.map((p, index) => (
                    <div key={p.paintingId} className="w-full flex flex-col">
                        <div className="flex flex-row items-center relative ">
                            <FavPaintingItem index={index+1} title={p.title} name={getArtistName(p.artists)} year={p.yearOfWork} fileName={p.imageFileName} gallery={p.galleries.galleryName}/>  
                            <img className="absolute right-1 rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("paintings", p)}/>
                        </div>
                        <hr className="bg-gray-600 h-[1px] border-none"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavPaintingList;
