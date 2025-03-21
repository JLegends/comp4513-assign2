import Header from './Header.jsx'
import GalleryList from './GalleryList.jsx'
import { useData } from "./DataContext.jsx";

const GalleryView = (props) => {
    const { galleries, paintings, artists } = useData();    
    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;
    console.log("GALLERIES: ", galleries);
    
    return (
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
            <Header />
            <div className="flex flex-grow">
                <div className="flex items-center justify-center bg-[#E1E2E0] w-1/5 -mt-24 pb-auto">
                    <GalleryList list={galleries}/>
                </div>
                    
                <div className='flex justify-between bg-red-500 w-4/5 p-2'>
                    <div className="flex bg-white items-center justify-center w-3/5 rounded-xl m-2">
                        <h2 className=""> Gallery Info </h2>
                    </div>
                    <div className="flex bg-white items-center justify-center w-3/5 rounded-xl m-2">
                        <h2 className=""> Gallery Painting </h2>
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

export default GalleryView