

const GalleryItem = (props) => {

    return (
        <div className="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <img src={props.image} alt={props.name} className="w-full h-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{props.name}</h3>
            </div>
        </div>
    );
}

export default GalleryItem;
