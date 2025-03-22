const imagePath = '/images/'

const ArtistItem = (props) => {

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
        <div className="flex flex-grow h-18 w-full px-2 py-2 hover:bg-gray-900" onClick={()=>props.artistHandler(props.id)}>
            <img src={imagePath + "favicon" + '.png'} alt={props.name} className="rounded-full w-14 h-14 transform translate-x-1/8 bg-button-focus"/>

            <div className="flex flex-col pl-4 justify-center">
                <h3 className="text-white text-sm font-bold">{name}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.birth}-${props.death}`}</p>
            </div>
        </div>
    );
}

export default ArtistItem;
