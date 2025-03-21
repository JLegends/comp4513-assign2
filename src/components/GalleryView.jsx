import Header from './Header.jsx'
import GalleryList from './GalleryList.jsx'
import { useData } from "./DataContext.jsx";

const GalleryView = (props) => {
    const { galleries, paintings, artists } = useData();    
    if (!galleries || !paintings || !artists) return <p>{/*Loading behaviour here*/}</p>;
    console.log("GALLERIES: ", galleries);
    
    return (<article className="bg-secondary h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
        <Header />
        <div className="w-full p-4">
            <GalleryList list={galleries}/>
        </div>
            
        <div className='flex flex-row flex-grow p-3 space-x-3'>
            <div className="flex items-center justify-center bg-primary h-full w-2/5 rounded-xl mx-3">
                <h2 className=""> Gallery Info </h2>
            </div>
            <div className="flex items-center justify-center bg-primary h-full w-2/5 rounded-xl">
                <h2 className=""> Gallery Painting </h2>
            </div>
        </div>
        {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
            Painting Popup Testing
        </button>
        <PaintingPopup ref={dialogRef}/> */}
    </article>)
}

export default GalleryView