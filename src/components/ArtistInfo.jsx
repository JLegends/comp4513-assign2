const imagePath = '/images/artist-id-'
import ArtistCard from './ArtistCard.jsx'
import ArtistMap from './ArtistMap.jsx'
import { useFavorites } from './FavoritesContext.jsx';


const ArtistInfo = ({artist}) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

  const isFavorited = artist 
    ? favorites.artists.some((fav) => fav.artistId === artist.artistId)
    : false;

  const handleFavoriteToggle = (e) => {
      e.stopPropagation(); 
      if (isFavorited) {
        removeFromFavorites("artists", artist);
      } else {
        addToFavorites("artists", artist);
      }
  };
  

  if (!artist) {
    return <p className="flex w-full h-full justify-center align-center items-center text-white font-bold">Select An Artist</p>
  }

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <ArtistCard artist={artist}/>

      <ArtistMap nationality={artist.nationality} id={artist.artistId}/>

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

export default ArtistInfo;