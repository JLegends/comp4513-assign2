
import FavArtistItem from "./FavArtistItem";
import { useFavorites } from "./FavoritesContext";

const basePath = import.meta.env.BASE_URL + 'images/';

const FavArtistList = (props) => {
  const {removeFromFavorites} = useFavorites();
  
  return (
    <div className="w-full h-full flex flex-col">
        <div className="w-full flex-shrink-0">      
          <table className="w-full border-collapse">
            <thead className="w-full">
                <tr className="text-left">
                    <th className="px-2 text-sm font-normal pl-[21px]">Artists</th>
                </tr>
                <tr>
                  <td colSpan={5} className="py-2">
                    <hr className= "bg-gray-600 h-[2px] border-none"/>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="w-full flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom">
          {props.list.map((a) => (
            <div key={a.artistId} className="w-full flex flex-col">
              <div className="flex flex-row items-center relative">
                <FavArtistItem firstName={a.firstName} lastName={a.lastName} birth={a.yearOfBirth} death={a.yearOfDeath} id={a.artistId}/>
                <button 
                      onClick={()=>removeFromFavorites("artists", a)}
                      className="absolute right-1 p-2 bg-[#212121] hover:bg-red-500 rounded-full">
                      <img className="white-tint w-5 h-5" src={basePath + "x-icon.svg"} alt="Close"></img>
                </button>                  
              </div>
              <hr className="bg-gray-600 h-[1px] border-none"/>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FavArtistList;
