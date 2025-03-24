import PaintingItem from "./PaintingItem";
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
        <div className="w-full h-[100%] overflow-x-auto scrollbar-hide text-sm">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left">
                        <th className="px-2 w-1/12 font-normal">#</th>
                        <th className="px-2 translate-x-2 w-1/12 font-normal">Title</th>
                        <th className="font-normal"></th>
                        <th className="px-2 w-3/12 font-normal">Artist</th>
                        <th className="px-2 w-2/12 font-normal">Year</th>
                        <th className="px-2 w-2/12 font-normal">Gallery</th>
                    </tr>
                    <tr>
                        <td colSpan={6} className="py-2">
                            <hr className= "bg-gray-600 h-[2px] border-none"></hr>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {props.paintings.map((p, index) => 
                        <div className="">
                            <PaintingItem key={p.paintingId} index={index+1} title={p.title} name={getArtistName(p.artists)} year={p.yearOfWork} fileName={p.imageFileName} gallery={p.galleries.galleryName}/>
                        
                            <img className="rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("paintings", p)}/>
                        </div>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FavPaintingList;
