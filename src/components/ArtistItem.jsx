const imagePath = '/images/artist-id-'
import { useState } from "react";
import { useFavorites } from "./FavoritesContext";

const ArtistItem = (props) => {
    console.log(props)

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

    const isFavorited = favorites.artists.some(
        (fav) => fav.artistId === props.id
    );

    const handleFavoriteToggle = (e) => {
        e.stopPropagation(); 
        if (isFavorited) {
          removeFromFavorites("artists", props.id);
        } else {
          addToFavorites("artists", props.id);
        }
    };

    const imageUrl = `./images/art-images/artists/square/${props.id}.jpg`;

    console.log(imageUrl);

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



    return (
        <div className="flex flex-grow relative h-18 w-full px-2 py-2 hover:bg-gray-900" onClick={()=>props.artistHandler(props.id)}>
            {isLoading && (
                <div className="flex justify-center items-center w-[80px] h-[80px]">
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
                    className={`transition-opacity duration-500 rounded-full w-14 h-14 transform translate-x-1/8 bg-black-500 object-cover object-center  ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                />
            ) : (
                <div className=" text-gray-500 text-sm"><img src="./images/image-standin.svg"/></div>
            )}
            <div className="flex flex-col pl-4 justify-center">
                <h3 className="text-white text-sm font-bold">{name}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.birth}-${props.death}`}</p>
            </div>
            <img 
                className="absolute right-0 transform translate-y-3/5 w-6 cursor-pointer text-button-focus" 
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

export default ArtistItem;
