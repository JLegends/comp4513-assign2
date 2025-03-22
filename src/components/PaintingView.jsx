import { useData } from "./DataContext.jsx";
import { useState, useEffect } from "react";
import Header from './Header.jsx'

const PaintingView = (props) => {
    const { galleries, paintings, artists } = useData();

    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;

    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header />
            <div className="flex h-[91.96%] p-2 bg-[#000000]">
                <div className="items-center justify-center bg-[#000000] pr-2 w-1/5 h-[98%]">
                    <form></form>


                </div>
                    
                

                <div className="text-white w-4/5 h-[98%] rounded-xl m-2 bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        
              
                </div>
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </div>
        </article>
    )
}

export default PaintingView