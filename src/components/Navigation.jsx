import { Link, useLocation } from 'react-router'
import { useFavorites } from './FavoritesContext'

const Navigation = ({toggleDialog, headerFocus}) => {

    const location = useLocation();
    const { favorites } = useFavorites(); 

    const getButtonStyle = (buttonType) => {
        return headerFocus === buttonType
            ? "bg-button-focus text-white hover:bg-button-focus"
            : "bg-button text-button-focus hover:bg-button-focus hover:text-white"; 
    }
    
    const isFavoritesEmpty =
        (!favorites.artists || favorites.artists.length === 0) &&
        (!favorites.galleries || favorites.galleries.length === 0) &&
        (!favorites.paintings || favorites.paintings.length === 0);
        

    const routes = {
        Artist: '/artists',
        Gallery: '/galleries',
        Genre: '/genres',
        Painting: '/paintings'
    }
    
    const isDisabled = (buttonType) => location.pathname === routes[buttonType]

    return (
        <nav>
            <div className="flex space-x-4 text-sm">
                <div className="flex space-x-4">
                    <Link to="/artists">
                        <button 
                            disabled={isDisabled("Artist")}
                            className={`${getButtonStyle("Artist")} bg-button text-button-focus rounded-2xl py-3 px-6`}> Artists  </button>
                    </Link>
                    <Link to="/galleries">
                        <button 
                            disabled={isDisabled("Gallery")}
                            className={`${getButtonStyle("Gallery")} bg-button text-button-focus rounded-2xl py-3 px-6`}> Galleries </button>
                    </Link>
                    <Link to="/genres">
                        <button 
                            disabled={isDisabled("Genre")}
                            className={`${getButtonStyle("Genre")} bg-button text-button-focus rounded-2xl py-3 px-6`}> Genres </button>
                    </Link>
                    <Link to="/paintings">
                        <button 
                            disabled={isDisabled("Painting")}
                            className={`${getButtonStyle("Painting")} bg-button text-button-focus hover:bg-blue-400 hover:text-white rounded-2xl py-3 px-6`}> Paintings </button>
                    </Link>
                </div>
                <div className="flex justify-end space-x-2">
                    <button 
                        onClick={toggleDialog} 
                        disabled={isFavoritesEmpty}
                        className={`flex justify-center items-center hover:underline focus:underline 
                            ${isFavoritesEmpty
                                ? "text-button cursor-not-allowed"
                                : "hover:underline focus:underline"
                        }`}> 
                        Favorites 
                    </button>
                    <span className="flex justify-center items-center"> | </span>
                    <button className="hover:underline focus:underline"> About </button>
                </div>
            </div>
        </nav>
    );
}
export default Navigation