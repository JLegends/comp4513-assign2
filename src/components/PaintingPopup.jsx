import { forwardRef } from 'react'

const PaintingPopup = forwardRef(({toggleDialog, painting}, ref) => {
    console.log(painting)
    if (!painting) {
        return (
          <dialog
            ref={ref}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 w-3/4 h-[480px] bg-transparent rounded-xl shadow-lg"
            onClick={(e) => {
              if (e.currentTarget === e.target) toggleDialog();
            }}
          >
            <div className="w-[99%] h-[99%] bg-[#212121] rounded-xl">
              <div className="relative h-full bg-white">
                <div className="flex flex-shrink h-full p-2 bg-[#000000] rounded-xl">
                  <div className="flex w-full text-white m-2 rounded-xl bg-gradient-to-t from-[#121212] to-[#212121] p-4">
                    <p>No painting selected</p>
                  </div>
                </div>
                <button
                  onClick={toggleDialog}
                  className="absolute -top-6 -right-6 py-2 px-4 bg-button text-button-focus hover:bg-button-focus hover:text-white rounded-full"
                >
                  X
                </button>
              </div>
            </div>
          </dialog>
        );
    }

    const imageUrl = `https://res.cloudinary.com/funwebdev/image/upload/w_500/art/paintings/${painting.imageFileName}`;

    return (
        <dialog     
            ref={ref} 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[75%] h-180 bg-transparent rounded-xl shadow-lg"
            onClick={(e) => {if (e.currentTarget === e.target) toggleDialog(); }}> 
            <div className="relative w-full h-full bg-[#000000] rounded-xl">
                <div className="flex flex-shrink h-full p-2 bg-[#000000] rounded-xl">
                    <div className="flex w-1/2 text-white m-2 rounded-xl bg-linear-to-t from-[#121212] to-[#212121]">
                        <figure className="w-full h-full">
                            <img src={imageUrl} alt={painting.title} className="w-full h-full object-cover rounded-xl"/>
                        </figure>
                    </div> 
                    <div className="flex flex-col w-1/2 text-white m-2 rounded-xl bg-[#212121] p-4">
                        <h2 className="text-xl font-bold"> {painting.title} </h2>
                        <p>{painting.artists.firstName + " " + painting.artists.lastName}</p>
                        <p>{painting.yearOfWork}</p>
                        <p>{painting.museumLink}</p>
                        <p>{painting.width + " x " + painting.height}</p>
                        <p>{painting.medium}</p>
                        <p>{painting.galleries.galleryName}</p>
                        <p>{painting.galleries.galleryCity + ", " + painting.galleries.galleryCountry}</p>
                        <p>{painting.googleLink}</p>
                        <p>{painting.copyrightText}</p>
                        <p>{painting.description}</p>
                    </div>
                </div>
                <button onClick={toggleDialog} className=" font-bold text-xl absolute -top-3 -right-3 py-2 px-4 bg-button text-red-500 hover:bg-red-500 hover:text-white rounded-full">X</button>
            </div>
        </dialog>
    );
});

export default PaintingPopup