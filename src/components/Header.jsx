import Navigation from './Navigation.jsx'

const Header = (props) => {
    return (
        <header className="font-bold flex justify-between items-center text-xl bg-[#F5F5F3] p-4 shadow-lg">
            <img src="./images/favicon.png" className="h-8 w-8" alt="logo"/>
            <h1 className="font-bold w-1/2 translate-x-36"> Art Dashboard Project View </h1>
            <Navigation/>
        </header>
    );
} // This is to be used within the Header component (needs to be dynamic)
export default Header