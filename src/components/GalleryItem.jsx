const imagePath = '/images/'

const GalleryItem = (props) => {

    return (
        <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <img src={imagePath + props.id + '.jpg'} alt={props.name} className="w-full h-full object-cover" />
            {console.log(imagePath + props.id + '.jpg')}
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <h3 className="text-white text-lg font-bold">{props.name}</h3>
            </div>
        </div>
    );
}

export default GalleryItem;

