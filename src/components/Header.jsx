import Navigation from './Navigation.jsx'
import { useRef } from 'react'
import FavoritesPopup from './FavoritesPopup.jsx'


const Header = (props) => {
    const dialogRef = useRef(null);
    
    function toggleDialog() {
        if (!dialogRef.current) {
                return
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    return (
        <header className="font-bold flex justify-between items-center text-xl bg-[#F5F5F3] p-4 shadow-lg">
            <img src="./images/favicon.png" className="h-11 w-11" alt="logo"/>
            <h1 className="absolute left-[20.8%] font-bold w-1/5"> {`Art Project ${props.headerFocus} View`} </h1>
            <Navigation toggleDialog={toggleDialog} headerFocus={props.headerFocus}/>
            <FavoritesPopup toggleDialog={toggleDialog} ref={dialogRef}/>
        </header>
    );
} // This is to be used within the Header component (needs to be dynamic)
export default Header