import { useData } from "./DataContext.jsx";
import { useState, useEffect } from "react";
import Header from './Header.jsx'
import GenreList from './GenreList.jsx'
import GenreInfo from './GenreInfo.jsx'
import GenrePaintingList from './GenrePaintingList.jsx'


const GenreView = ({toggleDialog}) => {
    const {genres, genrePaintings, fetchAndStoreGenrePaintings} = useData();
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        if (genres && genres.length > 0) {
            const initialGenre = genres[0];
            setGenre(initialGenre)
        }   
    }, [genres]);

    if (!genres) return <p>{/*Loading behaviour here*/}</p>;

    const genreHandler = (genreIdSelected) => {
        if (!genre || genre.genreId !== genreIdSelected) {
            const newGenre = genres.find(g => g.genreId === genreIdSelected)
            setGenre(newGenre);
            if (!genrePaintings[genreIdSelected]) {
                fetchAndStoreGenrePaintings(newGenre.genreId);  
            }
        }
    }

    const headerFocus = "Genre"

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header headerFocus={headerFocus}/>
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <GenreList list={genres} genreHandler={genreHandler}/>
                </div>
                    
                <div className='flex justify-between bg-[#000000] w-full'>
                    <div className="flex w-3/5 rounded-xl m-2 bg-linear-to-t from-[#121212] to-button-focus">
                        <GenreInfo genre={genre}/>
                    </div>
                    <div className="text-white w-3/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        <GenrePaintingList 
                            paintings={genre && genrePaintings[genre.genreId] ? genrePaintings[genre.genreId] : []} 
                            toggleDialog={toggleDialog}/>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default GenreView