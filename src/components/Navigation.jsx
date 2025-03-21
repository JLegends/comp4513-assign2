const Navigation = (props) => {
    return (
        <nav>
            <div className="flex space-x-4 text-sm">
                <div className="flex space-x-4">
                    <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Artists  </button>
                    <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Galleries </button>
                    <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Genres </button>
                    <button className="bg-button hover:bg-primary focus:bg-button-focus focus:text-white rounded-2xl p-3"> Paintings </button>
                </div>
                <div className="flex justify-end space-x-4">
                    <button className=" hover:underline focus:bg-button-focus focus:text-white rounded-2xl"> About </button>
                    <button className=" hover:underline focus:bg-button-focus focus:text-white rounded-2xl"> Favorites </button>
                </div>
            </div>
        </nav>
    );
}
export default Navigation