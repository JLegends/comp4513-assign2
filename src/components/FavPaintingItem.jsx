import { useState } from "react";

const imagePath = import.meta.env.BASE_URL + 'images/';

const FavPaintingItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const imageUrl = `./images/art-images/paintings/square/${String(props.fileName).padStart(6,"0")}.jpg`;
    //console.log(imageUrl);
    return (
        <div className="flex flex-grow h-18 w-full px-2 py-2 hover:bg-gray-900">
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
                    className={`transition-opacity rounded-xl duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                />
            ) : (
                 <div className="flex justify-center w-[56px] h-[56px] text-gray-500 text-sm"><img src={imagePath + "image-standin.svg"}/></div>
            )}
            <div className="flex flex-col pl-3 justify-center">
                <h3 className="text-white text-sm font-bold">{props.title}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.name} – ${props.year}`}</p>
            </div>
        </div>
    );
}

export default FavPaintingItem;