const ArtistCard = (props) => {
    let name = "";
    if (props.artist.firstName && props.lastName) {
        name = `${props.artist.firstName} ${props.lastName}`
    }
    else if (props.artist.firstName && !props.lastName) {
        name = props.artist.firstName
    }
    else if (!props.artist.firstName && props.lastName) {
        name = props.lastName
    }
    else name = "unknown"

    return (
        <div className="flex bg-[#1F1F1F] h-1/2 w-full rounded-xl shadow-lg px-3 py-3">
            <div className="flex flex-col pl-4 w-[44%] pt-3 relative">
            <h3 className="text-white text-lg font-bold"> {name}</h3>
            <p className="font-normal text-white text-xs"> {props.artist.nationality} </p>
            <p className="font-normal text-white text-xs"> {props.artist.gender} </p>
            <p className="font-normal text-white text-xs"> {`${props.artist.yearOfBirth}-${props.artist.yearOfDeath}`} </p>
            <p></p>
            <p className="font-normal text-white text-xs"> {props.artist.details} </p>
            <a href={props.artist.artistLink} className="absolute -bottom-4 -left-4 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Find More</a>
            </div>
            <img src={"./images/" + props.artist.artistId + '.jpg'} className="flex rounded-xl h-full w-1/2 translate-x-1/8 bg-green-500"/>
        </div>
    )
}

export default ArtistCard;