
import ArtistItem from "./ArtistItem";
import { useFavorites } from "./FavoritesContext";

const FavArtistList = (props) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
  
  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead className="w-full">
            <tr className="text-left">
                <th className="px-2 text-sm font-normal  flex justify-center">Artists</th>
            </tr>
            <tr>
                <td colSpan={5} className="py-2">
                    <hr className= "bg-gray-600 h-[2px] border-none"/>
                </td>
            </tr>
          </thead>
        </table>
        {props.list.map((a) => (
          <div key={a.artistId} className=" flex flex-col">
            <div className="flex flex-row items-center relative">
              <ArtistItem firstName={a.firstName} lastName={a.lastName} birth={a.yearOfBirth} death={a.yearOfDeath} id={a.artistId}/>
              <img className="absolute right-1 rounded-full p-2 bg-[#1F1F1F] hover:bg-red-700 bg-opacity-100 w-8 h-8 cursor-pointer" src="./images/x-icon.svg" onClick={()=>removeFromFavorites("artists", a)}/>
            </div>
            <hr className="bg-gray-600 h-[1px] border-none"/>
          </div>
        ))}
    </div>
  );
};

export default FavArtistList;
