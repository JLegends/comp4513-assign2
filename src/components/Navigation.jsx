import { Link } from 'react-router'
import { useState } from 'react'


const Navigation = ({toggleDialog, headerFocus}) => {
    const [focus, setFocus] = useState(null)

    const getButtonStyle = (buttonType) => {
        return headerFocus === buttonType
            ? "bg-button-focus text-white" // Selected style
            : "bg-button text-button-focus hover:bg-button-focus hover:text-white"; 
    }
    

    return (
        <nav>
            <div className="flex space-x-4 text-sm">
                <div className="flex space-x-4">
                    <Link to="/artists">
                        <button className={`${getButtonStyle("Artist")} bg-button text-button-focus hover:bg-blue-400 hover:text-white rounded-2xl py-3 px-6`}> Artists  </button>
                    </Link>
                    <Link to="/galleries">
                        <button className={`${getButtonStyle("Gallery")} bg-button text-button-focus hover:bg-blue-400 hover:text-white rounded-2xl py-3 px-6`}> Galleries </button>
                    </Link>
                    <Link to="/genres">
                        <button className={`${getButtonStyle("Genre")} bg-button text-button-focus hover:bg-blue-400 hover:text-white rounded-2xl py-3 px-6`}> Genres </button>
                    </Link>
                    <Link to="/paintings">
                        <button className={`${getButtonStyle("Painting")} bg-button text-button-focus hover:bg-blue-400 hover:text-white rounded-2xl py-3 px-6`}> Paintings </button>
                    </Link>
                </div>
                <div className="flex justify-end space-x-4">
                    <button onClick={toggleDialog} className="flex justify-center items-center hover:underline focus:underline"> Favorites </button>
                    <button className="hover:underline focus:underline"> About </button>
                </div>
            </div>
        </nav>
    );
}
export default Navigation