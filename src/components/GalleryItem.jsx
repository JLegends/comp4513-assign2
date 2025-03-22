const imagePath = '/images/'
import { useState } from "react";


const GalleryItem = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const imageUrl = imagePath + props.id + '.jpg';
    //console.log(imagePath + props.id + '.jpg');

    return (
        <div className="flex flex-grow h-18 w-full px-2 py-2 hover:bg-gray-900" onClick={() => props.galleryHandler(props.id)}>
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
                    className={`transition-opacity duration-500 rounded-full w-14 h-14 transform translate-x-1/8 bg-green-500  ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                />
            ) : (
                <div className="text-gray-500 text-sm">Image not available</div>
            )}

            <div className="flex flex-col pl-4 justify-center">
                <h3 className="text-white text-sm font-bold">{props.name}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.city}, ${props.country}`}</p>
            </div>
        </div>
    );
}

export default GalleryItem;
