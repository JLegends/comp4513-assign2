import ArtistCard from './ArtistCard.jsx'
import ArtistMap from './ArtistMap.jsx'


const ArtistInfo = ({artist}) => {
  if (!artist) {
    return <p className="flex w-full h-full justify-center align-center items-center text-white font-bold">Select An Artist</p>
  }

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <ArtistCard artist={artist}/>

      <ArtistMap nationality={artist.nationality} id={artist.artistId}/>

      <img className="absolute top-[3.5%] right-7 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" src="./images/heart-icon-outline.svg"/>
    </div>
  );
};

export default ArtistInfo;