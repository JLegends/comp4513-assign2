import { forwardRef } from 'react'
import FavGalleryList from './FavGalleryList.jsx'
import FavArtistList from './FavArtistList.jsx';
import FavPaintingList from './FavPaintingList.jsx';


import { useFavorites } from './FavoritesContext.jsx';

const imagePath = import.meta.env.BASE_URL + 'images/';
console.log(imagePath + "trash-icon.svg");
console.log(imagePath + "x-icon.svg");
const FavoritesPopup = forwardRef(({toggleDialog}, ref) => {
    const {favorites, removeAllFavorites} = useFavorites();

    return (
        <dialog 
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[75%] h-140 bg-transparent"
            onClick={(e) => {if (e.currentTarget === e.target) 
                toggleDialog(); 
            }}
            > 
            <div className="w-full h-120 relative rounded-xl">
                <h1 className="w-full flex justify-center text-white bg-black rounded-t-xl pt-2">Favorites</h1>
                <div className="flex flex-shrink h-full px-2 pb-2 bg-[#000000] rounded-b-xl">
                    <div className="flex w-1/3 text-white m-2 rounded-xl bg-gradient-to-t from-[#121212] to-[#212121] px-4 py-2">
                         <FavArtistList list={favorites.artists}/>
                    </div> 
                    <div className="flex w-1/3 text-white m-2 rounded-xl bg-gradient-to-t from-[#121212] to-[#212121] px-4 py-2">
                        <FavGalleryList list={favorites.galleries}/>
                    </div>
                    <div className="flex w-1/3 text-white m-2 rounded-xl bg-gradient-to-t from-[#121212] to-[#212121] px-4 py-2">
                        <FavPaintingList paintings={favorites.paintings}/>
                    </div>
                </div>
                <button 
                    onClick={removeAllFavorites} 
                    className="absolute -bottom-[50px] -right-[14px] p-2 bg-black hover:bg-red-500 rounded-full">
                    <img className="w-7 h-7" src={imagePath + "trash-icon.svg"} alt="Close"></img>
                    
                </button>  
                <button 
                    onClick={toggleDialog} 
                    className="absolute -top-[14px] -right-[14px] p-2 bg-black hover:bg-red-500 rounded-full">
                    <img className="white-tint w-7 h-7" src={imagePath + "x-icon.svg"} alt="Close"></img>
                </button>  
            </div>
        </dialog>
    );
});

export default FavoritesPopup