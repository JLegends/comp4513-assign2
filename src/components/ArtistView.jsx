import { useData } from "./DataContext.jsx";
import { useState } from "react";
import Header from './Header.jsx'
import ArtistList from './ArtistList.jsx'
import ArtistInfo from './ArtistInfo.jsx'
import ArtistPaintingList from './ArtistPaintingList.jsx'
import {useEffect} from 'react'


const ArtistView = (props) => {
    const { galleries, paintings, artists } = useData();
    const [artist, setArtist] = useState(null);
    const [artistPaintings, setArtistPaintings] = useState([]);

    useEffect(() => {
        if (artists && artists.length > 0) {
          setArtist(artists[0]); // Set the initial artist
        }
        if (paintings && artist) {
          setArtistPaintings(paintings.filter(p => artist.artistId === p.artists.artistId));
        }
      }, [artists, paintings, artist]);

    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;

    const artistHandler = (artIdSelected) => {
        if (artist.artistId != artIdSelected) {
            const newArtist = artists.find(a => a.artistId === artIdSelected)
            setArtist(newArtist);
            setArtistPaintings(paintings.filter(p => artist.artistId == p.artists.artistId))
        }
    }

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header />
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <ArtistList list={artists} artistHandler={artistHandler}/>
                </div>
                    
                <div className='flex justify-between bg-[#000000] w-full'>
                    <div className="flex w-3/5 rounded-xl m-2 bg-linear-to-t from-[#121212] to-button-focus">
                        <ArtistInfo artist={artist}/>
                    </div>
                    <div className="text-white w-3/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        <ArtistPaintingList paintings={artistPaintings}/>
                    </div>
                </div>
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </div>
        </article>
    )
}

export default ArtistView