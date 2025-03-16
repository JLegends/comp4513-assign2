const Header = (props) => {
    return (
        <header className="flex justify-between items-center text-xl w-full bg-white p-4 shadow-lg rounded-b-xl">
            <img src="./images/rick-logo.png" className="h-8 w-8" alt="logo"/>
            <h1 className="font-bold uppercase"> Art Dashboard Project View </h1>
            <nav>
                <div className="flex space-x-4 text-sm">
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> Artists  </button>
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> Paintings </button>
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> Galleries </button>
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> Genres </button>
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> About </button>
                    <button className="shadow-xl bg-blue-600 hover:bg-blue-50 focus:ring-2 focus:bg-white focus:border-black rounded-2xl p-3"> Favorites </button>
                </div>
            </nav>
        </header>
    );
} // This is to be used within the Header component (needs to be dynamic)
export default Header