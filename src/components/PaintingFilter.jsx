import { useState, useEffect } from "react";
import getArtistName from "./GetArtistName.jsx";

const PaintingFilter = (props) => {
    const[title, setTitle] = useState("");
    const[artist, setArtist] = useState("");
    const[gallery, setGallery] = useState("");
    const[minYear, setMinYear] = useState("");
    const[maxYear, setMaxYear] = useState("");
    const [filterType, setFilterType] = useState("");

    const paintings = props.paintingList;

    const filterPaintings = () => {
        return paintings.filter(p => {
            if (filterType === "title") return title === "" || p.title.toLowerCase().includes(title.toLowerCase());
            if (filterType === "artist") return artist === "" || getArtistName(p.artists) === artist;
            if (filterType === "gallery") return gallery === "" || p.galleries.galleryName === gallery;
            if (filterType === "year") return (minYear === "" || p.yearOfWork >= parseInt(minYear)) && (maxYear === "" || p.yearOfWork <= parseInt(maxYear));
            return true; // No filter applied if none selected
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
    const handleMinYear = (e) => {
        setMinYear(e.target.value);
    }
    const handleMaxYear = (e) => {
        setMaxYear(e.target.value);
    }
    const handleFilterToggle = (e) => {
        setFilterType(e.target.value)
    }


    return(
    <form className="justify-center py-2 px-1">
        <h1 className="flex text-white text-xl font-semibold">Painting Filters</h1>
        <hr className="bg-gray-600 w-full h-[2.5px] my-4"></hr>
        <table className=" w-full">
            <tbody>
            <tr className="w-full">
                <td className="flex w-full items-center">
                    <input 
                        type="radio" 
                        name="filterType"
                        value="title"
                        onChange={() => setFilterType("title")}
                        className="w-1/10 h-5 bg-button"></input>
                    <label className="w-1/4 pl-1 text-white text-sm">Title</label>
                    <input className="w-9/10 bg-button rounded-2xl h-8 pl-4 text-sm text-[#000000]" type='text' value={title} onChange={handleTitle} placeholder="Enter painting title"></input>
                </td>
            </tr>
            <tr><td><hr className="bg-gray-600 w-full h-[2.5px] my-4"></hr></td></tr>
            <tr className="w-full">
                <td className="flex w-full items-center">
                    <input 
                        type="radio" 
                        name="filterType"
                        value="artist"
                        onChange={() => setFilterType("artist")}
                        className="w-1/10 h-5 bg-button"></input>
                    <label className="w-1/4 pl-1 flex text-white text-sm">Artist</label>
                    <select className="w-9/10 pl-4 bg-button text-[#666666] text-sm rounded-2xl h-8" type='text' value={artist} onChange={handleArtist}>
                        <option className="" value="">Select an artist</option>

                        {props.artistList.map((a) => <option key={a.artistId}>{getArtistName(a)}</option>)}

                    </select>
                </td>
            </tr>
            <tr><td><hr className="bg-gray-600 w-full h-[2.5px] my-4"></hr></td></tr>
            <tr className="w-full">
                <td className="flex w-full items-center">
                    <input 
                        type="radio" 
                        name="filterType"
                        value="gallery"
                        onChange={() => setFilterType("gallery")}
                        className="w-1/10 h-5"></input>
                    <label className="w-1/4 pl-1 text-white text-sm">Gallery</label>
                    <select className="w-9/10 pl-4 bg-button text-[#666666] text-sm rounded-2xl h-8" type='text' value={gallery} onChange={handleGallery}>
                        <option className="" value="">Select a gallery</option>

                        {props.galleryList.map((g) => <option key={g.galleryId}>{g.galleryName}</option>)}

                    </select>
                </td>
            </tr>
            <tr><td><hr className="bg-gray-600 w-full h-[2.5px] my-4"></hr></td></tr>
            <tr className="w-full">
                <td className="flex w-full items-center">
                    <input 
                        type="radio" 
                        name="filterType"
                        value="year"
                        onChange={() => setFilterType("year")}
                        className="w-[8.5%] h-5"></input>
                    <label className="w-1/4 pl-[3px] text-white text-sm">Year</label>
                </td>
                <td className="flex w-full pt-2">
                    <div className="w-1/10 h-5"></div>
                    <div className="flex justify-end w-full">
                        <label className="w-5/10 pl-[3px] text-white text-sm flex items-center">From</label>
                        <input className="bg-button rounded-2xl text-sm h-[34px] w-full text-center mx-3" type='text' value={minYear} onChange={handleMinYear} placeholder="Year"></input>
                        <label className=" w-1/3 text-white text-sm flex items-center justify-center">To</label>
                        <input className="bg-button rounded-3xl text-sm h-[34px] w-full text-center ml-3" type='text' value={maxYear} onChange={handleMaxYear} placeholder="Year"></input>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>        
        <hr className="bg-gray-600 w-full h-[2.5px] mt-4 mb-4"></hr>

        <div className="flex flex-row justify-end space-x-4">
            
            <button className="bg-button text-sm font-bold text-button-focus hover:bg-button-focus hover:text-white px-6 py-3 rounded-2xl" onClick={clearFilters}>Clear</button>
            <button className="bg-button text-sm font-bold text-button-focus hover:bg-button-focus hover:text-white px-6 py-3 rounded-2xl" onClick={handleSubmit}>Filter</button>
        </div>
    </form>)
}


export default PaintingFilter;