import { createContext, useContext, useState} from "react";


const storedFavorites = JSON.parse(localStorage.getItem("favorited"));
const initialFavorites = storedFavorites || {artists: [{
    "artistId": 1,
    "firstName": "Pablo",
    "lastName": "Picasso",
    "nationality": "Spain",
    "gender": "M",
    "yearOfBirth": 1881,
    "yearOfDeath": 1973,
    "details": "Pablo Ruiz Picasso was a Spanish painter, draughtsman, and sculptor who lived most of his life in France. He is widely known for co-founding the Cubist movement and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907) and Guernica (1937), a portrayal of the German bombing of Guernica during the Spanish Civil War.",
    "artistLink": "http://en.wikipedia.org/wiki/Picasso"
}, {
    "artistId": 2,
    "firstName": "Henri",
    "lastName": "Matisse",
    "nationality": "France",
    "gender": "M",
    "yearOfBirth": 1869,
    "yearOfDeath": 1954,
    "details": "Henri Matisse was a French artist, known for his use of colour and his fluid and original draughtsmanship. He was a draughtsman, printmaker, and sculptor, but is known primarily as a painter. Matisse is commonly regarded, along with Picasso and Marcel Duchamp, as one of the three artists who helped to define the revolutionary developments in the plastic arts in the opening decades of the 20th century, responsible for significant developments in painting and sculpture. Although he was initially labelled a Fauve (wild beast), by the 1920s he was increasingly hailed as an upholder of the classical tradition in French painting. His mastery of the expressive language of colour and drawing, displayed in a body of work spanning over a half-century, won him recognition as a leading figure in modern art",
    "artistLink": "http://en.wikipedia.org/wiki/Matisse"
}], galleries: [
    {
        "galleryId": 2,
        "galleryName": "Prado Museum",
        "galleryNativeName": "Museo del Prado",
        "galleryCity": "Madrid",
        "galleryAddress": "Paseo del Prado, s/n, 28014",
        "galleryCountry": "Spain",
        "latitude": 40.413393,
        "longitude": -3.691953,
        "galleryWebSite": "http://www.museodelprado.es/",
        "flickrPlaceId": "XrSazRhTUrh4j1shyQ",
        "yahooWoeId": 20219885,
        "googlePlaceId": "ChIJ7aLYZp0oQg0RWoitk33wlBA"
    },
    {
        "galleryId": 3,
        "galleryName": "State Museum",
        "galleryNativeName": "Staatliche Museen",
        "galleryCity": "Berlin",
        "galleryAddress": "Genthiner Str. 38 D",
        "galleryCountry": "Germany",
        "latitude": 52.50861,
        "longitude": 13.36472,
        "galleryWebSite": "http://www.smb.museum/",
        "flickrPlaceId": "VULyzjBXVb89VXc",
        "yahooWoeId": 675695,
        "googlePlaceId": "ChIJ6c-eGLRRqEcR_S0RGNMMbWw"
    }

], paintings: [
    {
        "paintingId": 568,
        "imageFileName": 137010,
        "title": "Abbey among Oak Trees",
        "shapeId": 2,
        "museumLink": "http://www.smb-digital.de/eMuseumPlus?service=ExternalInterface&module=collection&objectId=968249&viewType=detailView",
        "accessionNumber": "8/85",
        "copyrightText": "Public domain",
        "description": "Abbey among Oak Trees is the companion piece to Monk by the Sea. Friedrich showed both paintings in the Berlin Academy Exhibition of 1810. In their perplexing remoteness and formal radicalism they were to become key works in German Romanticism.",
        "excerpt": "Abbey among Oak Trees is the companion piece to Monk by the Sea. Friedrich showed both paintings in the Berlin Academy Exhibition of 1810.",
        "yearOfWork": 1810,
        "width": 171,
        "height": 110,
        "medium": "Oil on canvas",
        "cost": 700,
        "MSRP": 900,
        "googleLink": "https://www.google.com/culturalinstitute/beta/asset/abbey-among-oak-trees/UAEmmuxqtNUt-g",
        "googleDescription": "",
        "wikiLink": "",
        "jsonAnnotations": "{\"safeSearchAnnotation\":{\"violence\":1,\"racy\":1},\"dominantColors\":[{\"color\":{\"red\":169,\"green\":156,\"blue\":128},\"web\":\"#A99C80\",\"name\":\"Napa\"},{\"color\":{\"red\":137,\"green\":122,\"blue\":100},\"web\":\"#897A64\",\"name\":\"Sand Dune\"},{\"color\":{\"red\":194,\"green\":181,\"blue\":141},\"web\":\"#C2B58D\",\"name\":\"Coriander\"},{\"color\":{\"red\":98,\"green\":83,\"blue\":63},\"web\":\"#62533F\",\"name\":\"Judge Grey\"},{\"color\":{\"red\":98,\"green\":87,\"blue\":79},\"web\":\"#62574F\",\"name\":\"Domino\"},{\"color\":{\"red\":67,\"green\":51,\"blue\":32},\"web\":\"#433320\",\"name\":\"Clinker\"}]}",
        "artists": {
            "gender": "M",
            "details": "Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. He is best known for his mid-period allegorical landscapes which typically feature contemplative figures silhouetted against night skies, morning mists, barren trees or Gothic ruins.",
            "artistId": 137,
            "lastName": "Friedrich",
            "firstName": "Caspar David",
            "artistLink": "https://en.wikipedia.org/wiki/Caspar_David_Friedrich",
            "nationality": "Germany",
            "yearOfBirth": 1774,
            "yearOfDeath": 1840
        },
        "galleries": {
            "latitude": 52.50861,
            "galleryId": 3,
            "longitude": 13.36472,
            "yahooWoeId": 675695,
            "galleryCity": "Berlin",
            "galleryName": "State Museum",
            "flickrPlaceId": "VULyzjBXVb89VXc",
            "googlePlaceId": "ChIJ6c-eGLRRqEcR_S0RGNMMbWw",
            "galleryAddress": "Genthiner Str. 38 D",
            "galleryCountry": "Germany",
            "galleryWebSite": "http://www.smb.museum/",
            "galleryNativeName": "Staatliche Museen"
        }
    }

]}; //Check if any favorites stored otherwise default to empty

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