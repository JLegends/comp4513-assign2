import { forwardRef } from 'react'
import GalleryList from './GalleryList.jsx'


const FavoritesPopup = forwardRef(({toggleDialog}, ref) => {

    const p = [{
        paintingId: 0, 
        index:1, 
        title:"Test", 
        name:"Pablo",
        year:1810, 
        fileName:"137010"
    }]


    return (
        <dialog 
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 w-3/4 bg-white rounded-xl shadow-lg" 
            onClick={(e) => {if (e.currentTarget === e.target) 
                toggleDialog(); 
            }}
            > 
            <div className="w-full h-120 bg-[#212121] rounded-xl" >
                <div className="relative h-full bg-white">
                    <div className="flex flex-shrink h-full p-2 bg-[#000000]">
                        <div className="flex items-center justify-center bg-[#000000] pr-2 w-1/3">
                            { /*  <ArtistList artist={}/> */ }
                        </div> 
                        <div className="flex w-1/3 rounded-xl m-2 bg-linear-to-t from-[#121212] to-button-focus">
                            { /*  <GalleryList gallery={}/> */ }
                        </div>
                        <div className="flex text-white w-1/3 rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                            { /*  <PaintingList painting={}/> */ }
                        </div>
                    </div>
                    <button onClick={toggleDialog} className="absolute top-4 right-4 py-2 px-4 bg-button text-button-focus hover:bg-button-focus hover:text-white rounded-full">X</button>
                </div>
            </div>
        </dialog>
    );
});

export default FavoritesPopup