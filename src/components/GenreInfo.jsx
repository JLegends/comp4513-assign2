import GenreCard from './GenreCard.jsx'
import GenreMap from './GenreMap.jsx'
import { useFavorites } from './FavoritesContext.jsx';


const GenreInfo = ({genre}) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

  const isFavorited = genre 
    ? favorites.genres.some((fav) => fav.genreId === genre.genreId)
    : false;

  const handleFavoriteToggle = (e) => {
      e.stopPropagation(); 
      if (isFavorited) {
        removeFromFavorites("genres", genre);
      } else {
        addToFavorites("genres", genre);
      }
  };
  

  if (!genre) {
    return <p className="flex w-full h-full justify-center align-center items-center text-white font-bold">Select An Genre</p>
  }

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <GenreCard genre={genre}/>

      <GenreMap nationality={genre.nationality} id={genre.genreId}/>

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

export default GenreInfo;