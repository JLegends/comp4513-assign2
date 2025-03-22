import { useData } from "./DataContext.jsx";
import { useState, useEffect } from "react";

const PaintingFilter = (props) => {
    const[title, setTitle] = useState("");
    const[artist, setArtist] = useState("");
    const[gallery, setGallery] = useState("");
    const[year, setYear] = useState("");
    const[minYear, setMinYear] = useState("");
    const[maxYear, setMaxYear] = useState("");
    const[filterType, setFilterType] = useState("title");

    const paintings = props.paintingList;

    const filterPaintings = () => {
        return paintings.filter(p => {
            console.log("Checking Painting:", p); // Debugging output
            console.log("VALUES: ",
                title, artist, gallery, minYear, maxYear);
            
            console.log((title === "" || p.title.toLowerCase().includes(title.toLowerCase())) &&
            (artist === "" || getArtistName(p.artists) === artist) &&
            (gallery === "" || p.galleries.galleryName === gallery) &&
            (minYear === "" || p.yearOfWork >= parseInt(minYear)) &&
            (maxYear === "" || p.yearOfWork <= parseInt(maxYear)))
            return (
                (title === "" || p.title.toLowerCase().includes(title.toLowerCase())) &&
                (artist === "" || getArtistName(p.artists) === artist) &&
                (gallery === "" || p.galleries.galleryName === gallery) &&
                (minYear === "" || p.yearOfWork >= parseInt(minYear)) &&
                (maxYear === "" || p.yearOfWork <= parseInt(maxYear))
            );
        });
    };

    const clearFilters = () => {
        console.log("In clear filters")
        setTitle("");
        setArtist("");
        setGallery("");
        setMinYear("");
        setMaxYear("");
    };

    useEffect(() => {
        if (title === "" && artist === "" && gallery === "" && minYear === "" && maxYear === "") {
            console.log("Resetting paintings after state update");
            props.onFilter(paintings);
        }
    }, [title, artist, gallery, minYear, maxYear]); // Since the states set by clear filters don't happen immediately they are asynchronous we have to wait for all of these states to change by using useEffect AASGSAHGADHSGDHsaGh
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredResults = filterPaintings();
        console.log("Filtered Paintings:", filteredResults);
        props.onFilter(filteredResults); // Notify parent component
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleArtist = (e) => {
        setArtist(e.target.value);
    }

    const handleGallery = (e) => {
        setGallery(e.target.value);
    }

    const handleYear = (e) => {
        setYear(e.target.value);
    }

    const handleMinYear = (e) => {
        setMinYear(e.target.value);
    }

    const handleMaxYear = (e) => {
        setMaxYear(e.target.value);
    }

    const handleFilterToggle = (e) => {
        setFilterType(e.target.value)
    }

    const getArtistName = (a) => {
        let name = "";
        if (a.firstName && a.lastName) {
            name = `${a.firstName} ${a.lastName}`
        }
        else if (a.firstName && !a.lastName) {
            name = a.firstName
        }
        else if (!a.firstName && a.lastName) {
            name = a.lastName
        }
        else name = "unknown"

        return(name)
    }




    return(
    <form className="justify-center p-3.5">
        <h1 className="text-white text-5xl font-semibold">Painting Filters</h1>
        <div className="bg-gray-600 w-full h-0.5 mt-4 mb-4"></div>
        
        {/*<input type='radio' className='mr-2' name="filterType" value="title" checked={filterType === "title"} onChange={handleFilterToggle}></input>*/}
        <label className="text-white text-lg mr-2 ">Title</label>
        <input className="bg-white rounded-sm w-3/4 h-8" type='text' value={title} onChange={handleTitle} placeholder="Enter painting title..."></input>

        <div className="bg-gray-600 w-full h-0.5 mt-4 mb-4"></div>
        
        {/*<input type='radio' className='mr-2' name="filterType" value="artist" checked={filterType === "artist"} onChange={handleFilterToggle}></input>*/}
        <label className="text-white text-lg mr-2 ">Artist</label>
        <select className="bg-white rounded-sm w-3/4 h-8" type='text' value={artist} onChange={handleArtist}>
            <option value="">Select an artist...</option>

            {props.artistList.map((a) => <option key={a.artistId}>{getArtistName(a)}</option>)}

        </select>

        <div className="bg-gray-600 w-full h-0.5 mt-4 mb-4"></div>

        {/*<input type='radio' className='mr-2' value="gallery" checked={filterType === "gallery"} onChange={handleFilterToggle}></input>*/}
        <label className="text-white text-lg mr-2 ">Gallery</label>
        <select className="bg-white rounded-sm w-3/4 h-8" type='text' value={gallery} onChange={handleGallery}>
            <option value="">Select a gallery...</option>

            {props.galleryList.map((g) => <option key={g.galleryId}>{g.galleryName}</option>)}

        </select>

         {/*<input type='radio' className='mr-2' value="year" checked={filterType === "year"} onChange={handleFilterToggle}></input>*/}
        <label className="text-white text-lg mr-2 w-full">Year</label>
        
        <div>
            <label className="text-white text-lg mr-2 ml-10">Greater</label>
            <input className="bg-white rounded-sm h-8 ml-10 mt-3" type='text' value={minYear} onChange={handleMinYear}></input>
            
            <label className="text-white text-lg mr-2 ml-10">Less</label>
            <input className="bg-white rounded-sm h-8 ml-15 mt-3" type='text' value={maxYear} onChange={handleMaxYear}></input>
        </div>

        <div className="flex flex-row mt-7 justify-evenly">
            <button className="bg-sky-500 hover:bg-sky-700 px-10 py-3 rounded-2xl" onClick={clearFilters}>Clear</button>
            <button className="bg-sky-500 hover:bg-sky-700 px-10 py-3 rounded-2xl" onClick={handleSubmit}>Filter</button>
        </div>

        <h1 className="mt-32 text-6xl text-white">STYLING NOT DONE</h1>

    </form>)
}


export default PaintingFilter;