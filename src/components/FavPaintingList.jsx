import FavPaintingItem from "./FavPaintingItem";
import getArtistName from "./GetArtistName";
import { useFavorites } from "./FavoritesContext";
//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const FavPaintingList = (props) => {
    const { removeFromFavorites} = useFavorites();

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
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom">
                {props.paintings.map((p, index) => (
                    <div key={p.paintingId} className="w-full flex flex-col">
                        <div className="flex flex-row items-center relative ">
                            <FavPaintingItem index={index+1} title={p.title} name={getArtistName(p.artists)} year={p.yearOfWork} fileName={p.imageFileName} gallery={p.galleries.galleryName}/>  
                            <button 
                                onClick={()=>removeFromFavorites("paintings", p)}
                                className="absolute right-1 p-2 bg-[#212121] hover:bg-red-500 rounded-full">
                                <img className="white-tint w-5 h-5" src="/images/x-icon.svg" alt="Close"></img>
                            </button>                          
                        </div>
                        <hr className="bg-gray-600 h-[1px] border-none"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavPaintingList;
