import { useState } from "react";
import { useFavorites } from "./FavoritesContext";

const imagePath = import.meta.env.BASE_URL + 'images/art-images/galleries/';

const GalleryItem = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

    const isFavorited = favorites.galleries.some(
        (fav) => fav.galleryId === props.id
    );

    const handleFavoriteToggle = (e) => {
        e.stopPropagation(); 
        if (isFavorited) {
          removeFromFavorites("gallery", props.id);
        } else {
          addToFavorites("gallery", props.id);
        }
    };

    const imageUrl = imagePath + props.id + '.jpg';

    return (
        <div className="flex flex-grow relative h-18 w-full px-2 py-2 hover:bg-gray-900" onClick={() => props.galleryHandler(props.id)}>
            {isLoading && (
                <div className="flex justify-center items-center w-[80px] max-w-14 max-h-14  h-[80px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                </div>
            )}
            {!hasError ? (
                <img
                    src={imageUrl}
                    alt={props.name}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setHasError(true);
                        setIsLoading(false);
                    }}
                    className={`transition-opacity duration-500 rounded-full w-14 h-14 transform translate-x-1/8 bg-black  ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                />
            ) : (
                <div className="text-gray-500 text-sm">Image not available</div>
            )}

            <div className="flex flex-col pl-4 justify-center max-w-7/10">
                <h3 className="text-white text-sm font-bold">{props.name}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.city}, ${props.country}`}</p>
            </div>
            <img 
                className="absolute right-1 transform translate-y-3/5 w-6 cursor-pointer text-button-focus" 
                src={
                    isFavorited
                        ? "./images/heart-icon-filled.svg"
                        : "./images/blank.png" 
                } 
                onClick={() => handleFavoriteToggle} 
                alt="favorite"
            /> 
        </div>
    );
}

export default GalleryItem;
