import { useData } from "./DataContext.jsx";
import { useState } from "react";
import Header from './Header.jsx'
import PaintingFilter from "./PaintingFilter.jsx";
import PaintingList from "./PaintingList.jsx";

const PaintingView = ({toggleDialog}) => {

    const { galleries, paintings, artists } = useData();
    const [filteredPaintings, setFilteredPaintings] = useState(paintings);

    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;

    const headerFocus = "Painting"


    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header headerFocus={headerFocus}/>
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <PaintingFilter artistList={artists} galleryList={galleries} paintingList={paintings} onFilter={setFilteredPaintings}/>
                </div>
                <div className="text-white w-4/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                    <PaintingList toggleDialog={toggleDialog} paintings={filteredPaintings}/>
                </div>
            </div>
        </article>
    )
}

export default PaintingView