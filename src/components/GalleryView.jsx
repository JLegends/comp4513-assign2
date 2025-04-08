import { useData } from "./DataContext.jsx";
import { useState, useEffect } from "react";
import Header from './Header.jsx'
import GalleryList from './GalleryList.jsx'
import GalleryInfo from './GalleryInfo.jsx'
import GalleryPaintingList from './GalleryPaintingList.jsx'
import Footer from "./Footer.jsx";

const GalleryView = ({toggleDialog}) => {
    const { galleries, paintings, artists } = useData();
    const [gallery, setGallery] = useState(null);
    const [galleryPaintings, setGalleryPaintings] = useState([]);

    useEffect(() => {
        if (galleries && galleries.length > 0) {
            setGallery(galleries[0])
            setGalleryPaintings(paintings.filter(p => galleries[0].galleryId == p.galleries.galleryId))
        }

    }, [galleries]);

    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;

    const galleryHandler = (galIdSelected) => {

        if (!gallery || gallery.galleryId != galIdSelected) {
            const newGallery = galleries.find(g => g.galleryId === galIdSelected)
            setGallery(newGallery);
            setGalleryPaintings(paintings.filter(p => newGallery.galleryId == p.galleries.galleryId))
        }
    }

    const headerFocus = "Gallery"

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header headerFocus={"Gallery"}/>
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <GalleryList list={galleries} galleryHandler={galleryHandler}/>
                </div>
                    
                <div className='flex justify-between bg-[#000000] w-full'>
                    <div className="flex w-3/5 rounded-xl m-2 bg-linear-to-t from-[#121212] to-button-focus">
                        <GalleryInfo gallery={gallery}/>
                    </div>
                    <div className="text-white w-3/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        <GalleryPaintingList paintings={galleryPaintings} toggleDialog={toggleDialog}/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </article>
    )
}

export default GalleryView