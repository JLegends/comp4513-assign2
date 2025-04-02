import { useState} from "react";
import { useFavorites } from "./FavoritesContext";


const PaintingItem = (props) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const imageUrl = `https://res.cloudinary.com/funwebdev/image/upload/w_500/art/paintings/square/${props.fileName}`;

    const isFavorited = favorites.paintings.some(
        (fav) => fav.paintingId === props.painting.paintingId
    );
    
    const handleFavoriteToggle = (e) => {
        e.stopPropagation(); 
        if (isFavorited) {
          removeFromFavorites("paintings", props.painting);
        } else {
          addToFavorites("paintings", props.painting);
        }
    };

    return (
        <tr onClick={() => props.toggleDialog(props.painting)} className="text-sm hover:bg-[#302F2F]">
            <td className="pl-2 w-3 text-[1rem]"> {props.index} </td>
            <td className="pl-[14px] w-3 text-[1rem]">
                <img 
                    className="rounded-full p-1 w-8 h-8 bg-opacity-100" 
                    src= {
                        isFavorited
                            ? "./images/heart-icon-filled.svg"
                            : "./images/blank.png" 
                    }
                    onClick={()=> handleFavoriteToggle}
                    alt="favorite"
                />
            </td>
            <td className="relative w-10 h-1/10">
                {isLoading && (
                    <div className="flex justify-center items-center w-[80px] h-[80px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                    </div>
                )}
                {!hasError ? (
                    <img
                        src={`./images/art-images/paintings/square/${String(props.fileName).padStart(6,"0")}.jpg`}
                        alt={props.title}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setHasError(true);
                            setIsLoading(false);
                        }}
                        className={`transition-opacity w-[80px] h-[80px] py-1 rounded-lg duration-500 ${
                            isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    />
                ) : (
                    <div className="flex justify-center text-gray-500 text-sm w-[80px] h-[80px]"><img src="./images/image-standin.svg"/></div>
                )}
            </td>
            <td className="p-2 w-6/12 font-bold text-[1rem]"> {props.title} </td>
            <td className="p-2 w-10"> {props.name} </td>
            <td className="p-2 w-10 text-gray-500"> {props.year} </td>
            <td className="p-2 w-2/12 text-gray-500"> {props.gallery} </td>
        </tr>
    );
};

export default PaintingItem;