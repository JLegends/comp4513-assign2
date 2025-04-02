import { useState } from "react";
import { useFavorites } from "./FavoritesContext";

const ArtistPaintingListItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();


    let name = "";
    if (props.firstName && props.lastName) {
        name = `${props.firstName} ${props.lastName}`
    }
    else if (props.firstName && !props.lastName) {
        name = props.firstName
    }
    else if (!props.firstName && props.lastName) {
        name = props.lastName
    }
    else name = "unknown"

    const imageUrl = `./images/art-images/paintings/square/${String(props.fileName).padStart(6,"0")}.jpg`;

    return (   
        <tr onClick={() => props.toggleDialog(props.artistId)} className="text-sm hover:bg-[#302F2F] rounded-xl">
            <td className="p-2 w-1/12 text-1"> {props.index} </td>
            <td className="w-1/12 font-bold text-[1rem]"><img className="translate-x-8 w-[33%] cursor-pointer text-button-focus" src="./images/heart-icon-filled.svg" onClick={()=>addToFavorites("paintings", props.painting)} /> </td>

            <td className=" ">
                {isLoading && (
                    <div className="flex justify-center items-center w-[80px] h-[80px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                    </div>
                )}
                {!hasError ? (
                    <img
                        src={imageUrl}
                        alt={props.title}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setHasError(true);
                            setIsLoading(false);
                        }}
                        className={`transition-opacity rounded-lg py-1 duration-500 ${
                            isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    />
                ) : (
                    <div className="flex justify-center pl-1 text-gray-500 text-sm w-full h-full"><img src="./images/image-standin.svg"/></div>
                )}
            </td>            
            <td className="p-2 w-8/12 font-bold text-[1rem]"> {props.title} </td>
            <td className="w-4/12 text-gray-500"> {props.year} </td>
        </tr>
    
    );
}

export default ArtistPaintingListItem;
