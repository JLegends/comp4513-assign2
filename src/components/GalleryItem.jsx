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
        <div className="h-18 w-full rounded-xl shadow-lg" onClick={()=>galleryHandler(props)}>
            {/* Background Image */}
            <img src={imagePath + props.id + '.jpg'} alt={props.name} className="rounded-full justify-center align-center w-16 h-16 transform translate-x-1/8 translate-y-1/15 bg-red-500"/>

            {/* Overlay */}
            <div className="pl-21 -my-13">
                <h3 className="text-white text-md font-bold">{props.name}</h3>
                <p className="font-normal text-gray-500 text-md">  {`${props.city}, ${props.country}`}</p>
            </div>
        </div>
    );
}

export default GalleryItem;
