import { Link } from 'react-router'

const Navigation = (props) => {
    return (
        <nav>
            <div className="flex space-x-4 text-sm">
                <div className="flex space-x-4">
                    <Link to="/artists">
                        <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Artists  </button>
                    </Link>
                    <Link to="/galleries">
                        <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Galleries </button>
                    </Link>
                    <Link to="/genres">
                        <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Genres </button>
                    </Link>
                    <Link to="/paintings">
                        <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Paintings </button>
                    </Link>
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="hover:underline focus:underline"> About </button>
                    <button className="hover:underline focus:underline"> Favorites </button>
                </div>
            </div>
        </nav>
    );
}
export default Navigation