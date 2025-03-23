import { useData } from "./DataContext.jsx";
import { useState, useEffect } from "react";
import Header from './Header.jsx'


const GenreView = (props) => {
    /*
    const { galleries, paintings, artists } = useData();
    const [genre, setGenre] = useState(null);
    const [genrePaintings, setGenrePaintings] = useState([]);

    useEffect(() => {
        if (genre && genre.length > 0) {
            setGenre(galleries[0])
            setGenrePaintings(paintings.filter(p => genres[0].genreId == p.galleries.genreId))
        }

    }, [galleries]);

    if (!galleries || !paintings || !artists) return <p></p>;

    const genreHandler = (galIdSelected) => {

        if (!genre || genre.genreId != galIdSelected) {
            const newGenre = galleries.find(g => g.genreId === galIdSelected)
            setGenre(newGenre);
            setGenrePaintings(paintings.filter(p => newGenre.genreId == p.galleries.genreId))
        }
    }
    */

    const headerFocus = "Genre"

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header headerFocus={headerFocus}/>
            { /*
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <GenreList list={galleries} genreHandler={genreHandler}/>
                </div>
                    
                <div className='flex justify-between bg-[#000000] w-full'>
                    <div className="flex w-3/5 rounded-xl m-2 bg-linear-to-t from-[#121212] to-button-focus">
                        <GenreInfo genre={genre}/>
                    </div>
                    <div className="text-white w-3/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        <GenrePaintingList paintings={genrePaintings}/>
                    </div>
                </div>
            </div>
            */ }
        </article>
    )
}

export default GenreView