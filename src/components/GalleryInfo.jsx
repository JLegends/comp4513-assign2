import GalleryMap from './GalleryMap.jsx'
import GalleryCard from './GalleryCard.jsx'
import { useFavorites } from "./FavoritesContext";


const GalleryInfo = ({gallery}) => {
  if (!gallery) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-lg">
        <div className="flex justify-center items-center w-40 h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
        </div>
      </div>
    )
  }

  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

  const isFavorited = gallery 
    ? favorites.galleries.some((fav) => fav.galleryId === gallery.galleryId)
    : false;

  const handleFavoriteToggle = (e) => {
      e.stopPropagation(); 
      if (isFavorited) {
        removeFromFavorites("galleries", gallery);
      } else {
        addToFavorites("galleries", gallery);
      }
  };

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <GalleryCard gallery={gallery}/>

      <GalleryMap gallery={gallery}/>

      <img 
        className="absolute top-7.5 right-7 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" 
        src={
          isFavorited
            ? "./images/heart-icon-filled.svg"
            : "./images/heart-icon-outline.svg"
        }
        onClick={handleFavoriteToggle}
      />    
    </div>
  );
};

export default GalleryInfo;