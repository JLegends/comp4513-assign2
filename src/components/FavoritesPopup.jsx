import { forwardRef, useState, useEffect } from 'react'
import FavGalleryList from './FavGalleryList.jsx'
import FavArtistList from './FavArtistList.jsx';
import FavPaintingList from './FavPaintingList.jsx';


import { useFavorites } from './FavoritesContext.jsx';

const FavoritesPopup = forwardRef(({toggleDialog}, ref) => {
    const {favorites, addToFavorites} = useFavorites();



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
                    onClick={toggleDialog} 
                    className="absolute -top-3 -right-3 p-2 bg-button hover:bg-red-500 rounded-full">
                    <img className="red-tint w-5 h-5" src="/images/x-icon.svg" alt="Close"></img>
                </button>
            </div>
        </dialog>
    );
});

export default FavoritesPopup