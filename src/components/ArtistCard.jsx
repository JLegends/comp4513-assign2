const imagePath = '/images/artist-id-'
import { useState } from "react";

const ArtistCard = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    let gender = "Male";
    if (props.artist.gender != "M") gender = "Female";

    const imageUrl = `./images/art-images/artists/full/${props.artist.artistId}.jpg`;

    let name = "";
    if (props.artist.firstName && props.artist.lastName) {
        name = `${props.artist.firstName} ${props.artist.lastName}`
    }
    else if (props.artist.firstName && !props.artist.lastName) {
        name = props.artist.firstName
    }
    else if (!props.artist.firstName && props.artist.lastName) {
        name = props.lastName
    }
    else name = "unknown"

    return (
        <div className="flex bg-[#1F1F1F] h-1/2 w-full rounded-xl shadow-lg px-3 py-3">
            <div className="flex flex-col pl-4 w-[44%] pt-3 relative">
            <h3 className="text-white text-xl w-[120%] font-bold"> {name}</h3>
            <p className="flex space-between w-full font-normal text-gray-500 text-normal"> {props.artist.nationality} <span className="ml-10"> </span> {gender}  <span className="ml-10"> </span>  {props.artist.yearOfBirth}-{props.artist.yearOfDeath}</p>
            <p className="font-normal  overflow-y-auto overflow-x-hidden h-3/4 scrollbar-hide w-full pt-2 text-white text-normal"> {props.artist.details} </p>
            <a href={props.artist.artistLink} className="absolute -bottom-4 -left-4 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Learn More</a>
            </div>
            {isLoading && (
                <div className="flex justify-center items-center w-[80px] h-[80px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                </div>
            )}
            {!hasError ? (
                <img
                    src={imageUrl}
                    alt={name}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setHasError(true);
                        setIsLoading(false);
                    }}
                    className={`flex rounded-xl h-full w-1/2 translate-x-1/8 bg-button-focus transition-opacity duration-500 object-cover object-center ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                />
            ) : (
                <div className=" flex rounded-xl h-full w-1/2 translate-x-1/8 bg-black transition-opacity"><img src="./images/image-standin.svg"/></div>
            )}        </div>
    )
}

export default ArtistCard;