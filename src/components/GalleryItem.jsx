const imagePath = '/images/'

const GalleryItem = (props) => {


    return (
        <div className="flex flex-grow h-18 w-full rounded-xl shadow-lg px-2 py-2" onClick={()=>props.galleryHandler(props.id)}>
            {/* Background Image */}
            <img src={imagePath + props.id + '.jpg'} alt={props.name} className="rounded-full w-14 h-14 transform translate-x-1/8 bg-red-500"/>

            {/* Overlay */}
            <div className="flex flex-col pl-4 justify-center">
                <h3 className="text-white text-sm font-bold">{props.name}</h3>
                <p className="font-normal text-gray-500 text-xs">  {`${props.city}, ${props.country}`}</p>
            </div>
        </div>
    );
}

export default GalleryItem;
