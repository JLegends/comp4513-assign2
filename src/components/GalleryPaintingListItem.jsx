import { useState } from "react";

const GalleryPaintingListItem = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const imageUrl = `./images/art-images/paintings/square/${String(props.fileName).padStart(6,"0")}.jpg`;
    //console.log(imageUrl);
    return (
        <tr className="text-sm hover:bg-[#302F2F]">
            <td className="p-2 w-1/12 text-[1rem]"> {props.index} </td>
            <td className="relative w-1/12">
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
                        className={`transition-opacity rounded-lg m-1 duration-500 ${
                            isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    />
                ) : (
                    <div className="flex justify-center pl-1 rounded-lg text-gray-500 text-sm w-full h-full"><img src="./images/image-standin.svg"/></div>
                )}
            </td>
            <td className="p-2 w-6/12 font-bold text-[1rem]"> {props.title} </td>
            <td className="p-2 w-3/12"> {props.name} </td>
            <td className="p-2 w-2/12 text-gray-500"> {props.year} </td>
        </tr>
    );
};

export default GalleryPaintingListItem;
