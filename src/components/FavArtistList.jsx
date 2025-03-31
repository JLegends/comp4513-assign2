
import ArtistItem from "./ArtistItem";
import { useFavorites } from "./FavoritesContext";

const FavArtistList = (props) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
  
  return (
    
    <div className="flex flex-col items-center h-full w-full relative">
        {props.list.map((a) => (
          <div key={a.artistId} className="w-full flex flex-col">
            <div className="flex flex-row items-center">
              <ArtistItem firstName={a.firstName} lastName={a.lastName} birth={a.yearOfBirth} death={a.yearOfDeath} id={a.artistId}/>
              <img className="rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("artists", a)}/>
            </div>
            <hr className="bg-gray-600 h-[2px]"/>
          </div>
        ))}
      </div>
  );
};

export default FavArtistList;
