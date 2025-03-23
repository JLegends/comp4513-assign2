import { forwardRef } from 'react'
const FavoritesPopup = forwardRef(({toggleDialog}, ref) => {

    return (
        <dialog 
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 w-3/4 bg-white rounded-xl shadow-lg" 
            onClick={(e) => {if (e.currentTarget === e.target) 
                toggleDialog(); 
            }}
            > 
            <div className="w-full h-120 bg-[#212121] rounded-xl" >
                <div className="relative bg-white">
                    <button onClick={toggleDialog} className="absolute top-4 right-4 py-2 px-4 bg-button text-button-focus hover:bg-button-focus hover:text-white rounded-full">X</button>
                </div>
            </div>
        </dialog>
    );
});

export default FavoritesPopup