import { createContext, useContext, useState, useEffect } from "react";
const hostURL = 'https://comp4513-assign1.onrender.com/api';

// Create a context
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [galleries, setGalleries] = useState(null);
    const [paintings, setPaintings] = useState(null);
    const [artists, setArtists] = useState(null);
    const [genres, setGenres] = useState(null);


    // Fetch & store function
    const fetchAndStore = (key, url, setData) => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            console.log("Fetching data ...")
            fetch(url)
                .then((response) => response.json())
                .then((fetchedData) => {
                    setData(fetchedData);
                    localStorage.setItem(key, JSON.stringify(fetchedData));
                })
                .catch((error) => console.error(`Error fetching ${key}:`, error));
        }
    };

    // Fetch all data on mount
    useEffect(() => {
        fetchAndStore("galleries", hostURL + "/galleries", setGalleries);
        fetchAndStore("paintings", hostURL + "/paintings", setPaintings);
        fetchAndStore("artists", hostURL + "/artists", setArtists);
        fetchAndStore("genres", hostURL + "/genres", setGenres);
    }, []);

    return (
        <DataContext.Provider value={{ galleries, paintings, artists, genres}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};

