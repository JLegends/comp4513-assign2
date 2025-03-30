import { forwardRef } from 'react'


const PaintingPopup = forwardRef(({toggleDialog}, ref) => {

    return (
        <dialog 
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[75%] h-140 bg-transparent rounded-xl shadow-lg"
            onClick={(e) => {if (e.currentTarget === e.target) 
                toggleDialog(); 
            }}
            > 
            <div className="relative w-full h-full bg-[#000000] rounded-xl">
                <div className="flex flex-shrink h-full p-2 bg-[#000000] rounded-xl">
                    <div className="flex w-1/2 text-white m-2 rounded-xl bg-linear-to-t from-[#121212] to-[#212121] p-4">
                        Artist Picture Here
                    </div> 
                    <div className="flex w-1/2 text-white m-2 rounded-xl bg-[#212121] p-4">
                        Artist Info Here
                    </div>
                </div>
                <button onClick={toggleDialog} className=" font-bold text-xl absolute -top-3 -right-3 py-2 px-4 bg-button text-red-500 hover:bg-red-500 hover:text-white rounded-full">X</button>
            </div>
        </dialog>
    );
});

export default PaintingPopup