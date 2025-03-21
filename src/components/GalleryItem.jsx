
import { useState } from 'react'

const GalleryItem = (props) => {
    const [currentGallery, setCurrentGallery] = useState(props[0])
    const galleryHandler = (gallery) => {
        // propogate the clicked gallery up the chain (going by id?)
        setCurrentGallery(gallery);
        console.log(gallery);
    }

    return (
        <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg" onClick={()=>galleryHandler(props)}>
            {/* Background Image */}
            <img src={props.image} alt={props.name} className="w-full h-full object-cover"/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{props.name}</h3>
            </div>
        </div>
    );
}

export default GalleryItem;
