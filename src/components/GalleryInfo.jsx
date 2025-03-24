import GalleryMap from './GalleryMap.jsx'
import GalleryCard from './GalleryCard.jsx'
import { useFavorites } from "./FavoritesContext";


const GalleryInfo = ({gallery}) => {
  if (!gallery) {
    return <p className="flex w-full h-full justify-center align-center items-center text-white font-bold">Select A Gallery</p>
  }

  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();


  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <GalleryCard gallery={gallery}/>

      <GalleryMap gallery={gallery}/>

      <img className="absolute top-[3.5%] right-7 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" src="./images/heart-icon-outline.svg" onClick={()=>addToFavorites("galleries", gallery)}/>
    </div>
  );
};

export default GalleryInfo;