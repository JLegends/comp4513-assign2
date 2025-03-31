import { useData } from "./DataContext.jsx";
import { useState, useEffect, useRef } from "react";
import Header from './Header.jsx'
import PaintingFilter from "./PaintingFilter.jsx";
import PaintingList from "./PaintingList.jsx";
import PaintingPopup from "./PaintingPopup.jsx"

const PaintingView = (props) => {

    const dialogRef = useRef(null);
    const [selectedPainting, setSelectedPainting] = useState(null);

    function toggleDialog(painting) {
        if (!dialogRef.current) {
            return
        }
        if (dialogRef.current.hasAttribute("open")) {
            dialogRef.current.close()
            setSelectedPainting(null);
        }
        else {
            dialogRef.current.showModal();
            setSelectedPainting(painting);
        }
    }

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
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </div>
            <PaintingPopup toggleDialog={toggleDialog} ref={dialogRef} painting={selectedPainting}/>
        </article>
    )
}

export default PaintingView