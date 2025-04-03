import GalleryItem from "./GalleryItem";
import { useFavorites } from "./FavoritesContext";
//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const FavGalleryList = (props) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();


    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex-shrink-0">
                <table className="w-full border-collapse">
                    <thead className="w-full ">
                        <tr className="text-left">
                            <th className="px-2 text-sm font-normal pl-[15px]">Galleries</th>
                        </tr>
                        <tr>
                            <td colSpan={5} className="py-2">
                                <hr className= "bg-gray-600 h-[2px] border-none"/>
                            </td>
                        </tr>
                    </thead>
                </table>         
            </div>   
            <div className=" flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom">
            {props.list.map((g) => (
                    <div key={g.galleryId} className="w-full flex flex-col">
                        <div className="flex flex-row items-center relative">
                            <GalleryItem image={g.image} name={g.galleryName} id={g.galleryId} city={g.galleryCity} country={g.galleryCountry} galleryHandler={props.galleryHandler} />
                            <img className="absolute right-1 rounded-full p-2 bg-[#212121] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("galleries", g)}/>
                        </div>
                        <hr className="bg-gray-600 h-[1px] border-none" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavGalleryList;
