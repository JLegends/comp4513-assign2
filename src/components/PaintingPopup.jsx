import { forwardRef } from 'react'
import { useFavorites } from "./FavoritesContext";

const PaintingPopup = forwardRef(({toggleDialog, painting}, ref) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    
  if (!painting) {
        return (
          <dialog
            ref={ref}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 w-3/4 h-[480px] bg-transparent rounded-xl"
            onClick={(e) => {
              if (e.currentTarget === e.target) toggleDialog();
            }}
          >
            <div className="w-[99%] h-[99%] bg-[#212121] rounded-xl">
              <div className="relative h-full bg-white">
                <div className="flex flex-shrink h-full p-2 bg-[#000000] rounded-xl">
                  <div className="flex w-full text-white m-2 rounded-xl bg-gradient-to-t from-[#121212] to-[#212121] p-4">
                    <p className="flex justify-center items-center">No painting selected</p>
                  </div>
                </div>
                <button 
                    onClick={toggleDialog} 
                    className="absolute -top-3 -right-3 p-2 bg-button hover:bg-red-500 rounded-full">
                    <img className="red-tint w-5 h-5" src="/images/x-icon.svg" alt="Close"></img>
                </button>
              </div>
            </div>
          </dialog>
        );
    }

    const isFavorited = favorites.paintings.some(
      (fav) => fav.paintingId === painting.paintingId
    );
  
    const handleFavoriteToggle = () => {
      if (isFavorited) {
        removeFromFavorites("paintings", painting);
      } else {
        addToFavorites("paintings", painting);
      }
    };

    console.log(painting.imageFileName)

    return (
        <dialog     
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[75%] h-180 bg-transparent rounded-xl"
            onClick={(e) => {if (e.currentTarget === e.target) toggleDialog(); }}> 
            <div className="relative w-full h-full bg-[#000000] rounded-xl">
                <div className="flex flex-shrink h-full p-2 bg-[#000000] rounded-xl">
                    <div className="flex w-1/2 text-white m-2 rounded-xl bg-linear-to-t from-[#121212] to-[#212121]">
                        <figure className="w-full h-full relative">
                          <img src={`./images/art-images/paintings/full/${String(painting.imageFileName).padStart(6,"0")}.jpg`} alt={painting.title} className="text-center w-full h-full object-cover rounded-xl"/>
                          <img 
                            className="absolute top-5 right-5 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" 
                            src={
                              isFavorited
                                ? "./images/heart-icon-filled.svg"
                                : "./images/heart-icon-outline.svg"
                            }
                            onClick={handleFavoriteToggle}
                            alt="Favorite"
                          />
                        </figure>
                    </div> 
                    <div className="flex flex-col relative w-1/2 text-white m-2 rounded-xl bg-[#212121] p-4">
                        <h1 className="text-2xl font-bold"> {painting.title} </h1>
                        <p className="text-gray-400">{painting.artists.firstName + " " + painting.artists.lastName}</p>
                        <p className="text-gray-400">{painting.yearOfWork}</p>
                        <hr className="bg-gray-600 w-full h-[1px] my-2 border-none"></hr>                        
                        <p><span className="text-gray-400">Dimensions: </span>{painting.width + " cm x " + painting.height + " cm"}</p>
                        <p><span className="text-gray-400">Medium: </span>{painting.medium}</p>
                        <p><span className="text-gray-400">Location: </span>{`${painting.galleries.galleryName} – ${painting.galleries.galleryCity}, ${painting.galleries.galleryCountry}`}</p>
                        <p className="pt-5">{painting.description}</p>
                        <a href={painting.museumLink} className="absolute bottom-0 left-0 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Museum</a>
                        <a href={painting.googleLink} className="absolute bottom-0 left-25 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Wikipedia</a>
                        <p className="absolute bottom-0 right-0 text-sm text-gray-400 rounded-xl m-4 font-bold">{painting.copyrightText}</p>
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

export default PaintingPopup