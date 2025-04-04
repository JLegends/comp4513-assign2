import { useFavorites } from './FavoritesContext.jsx';

const GenreInfo = ({genre}) => {


  if (!genre) {
    return <p className="flex w-full h-full justify-center align-center items-center text-white font-bold">Select An Genre</p>
  }

  //console.log(genre);

  const imageUrl = `./images/art-images/genres/${genre.genreId}.jpg`;

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <div className =" h-1/2 w-full mb-2">
        <img src={imageUrl} className="rounded-xl w-full h-full bg-[#212121]"/>
      </div>
      <div className="flex flex-col bg-[#212121] rounded-xl p-4 w-full h-1/2 pt-3 relative">
        <h3 className="text-white text-xl font-bold"> {genre.genreName}</h3>
        <p className="font-normal text-gray-400 text-normal"> {genre.eras.eraName} </p>
        <p className="font-normal text-gray-400 400-normal"> {`${genre.eras.eraYears}`} </p>
        <hr className="bg-gray-600 w-full h-[1px] my-2 border-none"></hr>                        
        <p className="font-normal text-gray-400 400-normal overflow-y-auto overflow-x-hidden h-1/2 scrollbar-custom"> {`${genre.description}`} </p>
        <a href={genre.wikiLink} className="absolute -bottom-1 -left-1 text-button-focus  text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Learn More</a>
      </div>
    </div>
  );
};

export default GenreInfo;