

const GalleryInfo = (props) => {


    return (
        <div className="flex flex-col w-full h-full p-2 relative">
            {/* Background Image */}
            <div className="flex bg-[#1F1F1F] h-1/2 w-full rounded-xl shadow-lg px-2 py-2">
                {/* Overlay */}
                <div className="flex flex-col pl-4 w-[44%] pt-5 relative">
                    <h3 className="text-white text-sm font-bold"> {props.gallery.galleryName}</h3>
                    <p className="font-normal text-white text-xs"> {props.gallery.galleryNativeName} </p>
                    <p className="font-normal text-white text-xs"> {`${props.gallery.galleryCity}, ${props.gallery.galleryCountry}`} </p>
                    <a href = {props.gallery.galleryWebSite} className="absolute -bottom-4 -left-4 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Find More</a>
                    <p className="font-normal text-white text-xs"> {props.gallery.latitude} </p>
                    <p className="font-normal text-white text-xs"> {props.gallery.longitude} </p>
                </div>
                <img src={"./images/" + props.gallery.galleryId + '.jpg'} className="flex rounded-xl h-full w-1/2 translate-x-1/8 bg-green-500"/>

            </div>
            <div className="flex justify-center items-center h-1/2 bg-[#1F1F1F] w-full rounded-xl mt-2 text-white "> Map
            </div>
            
            <img className="absolute top-[2.5%] right-5 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" src="./images/heart-icon.svg"/>
        </div>
    );
}

export default GalleryInfo;