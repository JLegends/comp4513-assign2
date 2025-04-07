import { createContext, useContext, useState} from "react";


const storedFavorites = JSON.parse(localStorage.getItem("favorited"));
const initialFavorites = storedFavorites || {artists: [], galleries: [], paintings: []};

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(initialFavorites);

    const addToFavorites = (category, item) => {
        const existingItems = favorites[category] || [];

        // Determine unique ID key based on category
        const idKey = category === "artists" ? "artistId" 
                    : category === "galleries" ? "galleryId" 
                    : "paintingId"; 

        const isAlreadyFavorited = existingItems.some((favItem) => favItem[idKey] === item[idKey]);

        if (isAlreadyFavorited) {
            return; // Don't proceed if the item is already in favorites
        }

        setFavorites((prev) => {
            const updatedFavorites = {
                ...prev,
                [category]: [...prev[category], item]
            };

            // Save immediately after state update
            localStorage.setItem("favorited", JSON.stringify(updatedFavorites));

            return updatedFavorites;
        });
    };

    const removeFromFavorites = (category, item) => {
        const existingItems = favorites[category] || [];

        const idKey = category === "artists" ? "artistId" 
        : category === "galleries" ? "galleryId" 
        : "paintingId"; 

        const isAlreadyFavorited = existingItems.some((favItem) => favItem[idKey] === item[idKey]);

        if (isAlreadyFavorited) {
            setFavorites((prev) => {
                const updatedFavorites = {
                    ...prev,
                    [category]: prev[category].filter(favItem => favItem[idKey] !== item[idKey])
                };

                // Save immediately after state update
                localStorage.setItem("favorited", JSON.stringify(updatedFavorites));
                
                return updatedFavorites;
            });
        }
    };


    const removeAllFavorites = () => {
        setFavorites({
            artists: [],
            galleries: [],
            paintings: []
        });
        localStorage.setItem("favorited", JSON.stringify({
            artists: [],
            galleries: [],
            paintings: []
        }));
    }


    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, removeAllFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    return useContext(FavoritesContext);
};