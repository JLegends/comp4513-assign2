import Header from './Header.jsx'
import GalleryList from './GalleryList.jsx'
import GalleryInfo from './GalleryInfo.jsx'
import { useData } from "./DataContext.jsx";
import { useState } from "react";


const GalleryView = (props) => {
    const { galleries, paintings, artists } = useData();    
    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;
    
    const [gallery, setGallery] = useState(galleries[0])
    const galleryHandler = (galIdSelected) => {
        if (gallery.galleryId != galIdSelected) {
            const newGallery = galleries.find(g => g.galleryId === galIdSelected)
            setGallery(newGallery);
        }
    }

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header />
            <div className="flex h-full">
                <div className="items-center justify-center bg-[#000000] w-1/5 h-full">
                    <GalleryList list={galleries} galleryHandler={galleryHandler}/>
                </div>
                    
                <div className='flex justify-between bg-[#000000] w-4/5 p-2'>
                    <div className="flex w-3/5 rounded-xl m-2 bg-linear-to-bl from-button-focus to-[#121212]">
                        <GalleryInfo gallery={gallery}/>
                    </div>
                    <div className="flex text-white items-center justify-center w-3/5 rounded-xl m-2 bg-linear-to-bl from-button-focus to-[#121212]">
                        <h2 className=""> Gallery Painting </h2>
                    </div>
                </div>
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </div>
        </article>
    )
}

export default GalleryView