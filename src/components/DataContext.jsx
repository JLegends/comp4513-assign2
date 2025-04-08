import { createContext, useContext, useState, useEffect } from "react";
const hostURL = 'https://w2025-assign1.onrender.com/api';

// Create a context
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [galleries, setGalleries] = useState(null);
    const [paintings, setPaintings] = useState(null);
    const [artists, setArtists] = useState(null);
    const [genres, setGenres] = useState(null);
    const [genrePaintings, setGenrePaintings] = useState({});

    // Fetch & store function
    const fetchAndStore = (key, url, setData, transform = data => data) => {
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

    const fetchAndStoreGenrePaintings = async (genreId) => {
        const key = `genrePaintings_${genreId}`;
        const storedData = localStorage.getItem(key);
        if (storedData) {
            setGenrePaintings((prev) => ({ ...prev, [genreId]: JSON.parse(storedData) }));
        }
        else {
            try {
                console.log("Fetching paintings for genre ...")
                const response = await fetch(`${hostURL}/paintings/genre/${genreId}`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const genrePaintingsData = await response.json();
                //console.log(`paintings from genrepaintings ${genreId} (before cross reference to paintings):`, genrePaintingsData);

                const enrichedPaintings = genrePaintingsData.map(genrePainting => {
                    const paintingId = genrePainting.paintings.paintingId;
                    const fullPainting = paintings.find(p => p.paintingId === paintingId);
                    if (!fullPainting) {
                        return genrePainting.paintings; // using the nested paintings object as fallback
                    }
                    return fullPainting;
                });

                localStorage.setItem(key, JSON.stringify(enrichedPaintings));
                setGenrePaintings((prev) => ({...prev, [genreId]:enrichedPaintings }));
            } catch (error) {
                console.error(`Error fetching paintings for genre ${genreId}:`, error);
                setGenrePaintings((prev) => ({...prev, [genreId]: [] })); // resets to empty array on error (so the page doesn't break)
            }
        }
    };

    // Fetch all data on mount
    useEffect(() => {
        fetchAndStore("galleries", hostURL + "/galleries", setGalleries);
        fetchAndStore("paintings", hostURL + "/paintings", setPaintings);
        fetchAndStore("artists", hostURL + "/artists", setArtists);
        fetchAndStore("genres", hostURL + "/genres", setGenres);
    }, []);

    useEffect(() => {
        if (genres && genres.length > 0 && paintings) {
            const initialGenre = genres[0];
            fetchAndStoreGenrePaintings(initialGenre.genreId)
        }   
    }, [genres, paintings]);

    return (
        <DataContext.Provider value={{ galleries, paintings, artists, genres, genrePaintings, fetchAndStoreGenrePaintings}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};

