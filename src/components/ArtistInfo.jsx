import ArtistCard from './ArtistCard.jsx'


const ArtistInfo = ({artist}) => {
  if (!artist) {
    return <p>Loading Artist Info</p>
  }

  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      <ArtistCard artist={artist}/>

      <img className="absolute top-[3.5%] right-7 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" src="./images/heart-icon-outline.svg"/>
    </div>
  );
};

export default ArtistInfo;