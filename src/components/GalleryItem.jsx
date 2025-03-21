const imagePath = '/images/'

import { useState } from 'react'

const GalleryItem = (props) => {
    const [currentGallery, setCurrentGallery] = useState(props[0])
    const galleryHandler = (gallery) => {
        // propogate the clicked gallery up the chain (going by id?)
        setCurrentGallery(gallery);
        console.log(gallery);
    }

    return (
        <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110" onClick={()=>galleryHandler(props)}>
            {/* Background Image */}
            <img src={imagePath + props.id + '.jpg'} alt={props.name} className="w-full h-full object-cover "  />
            {console.log(imagePath + props.id + '.jpg')}
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 hover:scale-110" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <h3 className="text-white text-lg font-bold">{props.name}</h3>
            </div>
        </div>
    );
}

export default GalleryItem;

