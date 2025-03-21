

const GalleryInfo = (props) => {


    return (
        <div className="flex flex-col w-full h-full m-2 relative ">
            {/* Background Image */}
            <div className=" bg-black h-64 w-full rounded-xl shadow-lg px-2 py-2">
                <img src={"./images" + props.gallery.galleryId + '.jpg'} className="justify-center rounded-full w-14 h-14 transform translate-x-1/8 bg-green-500"/>

                {/* Overlay */}
                <div className="flex flex-col pl-12 pt-5 justify-start relative">
                    <h3 className="text-white text-sm font-bold"> {props.gallery.galleryName}</h3>
                    <p className="font-normal text-white text-xs"> {props.gallery.galleryNativeName} </p>
                    <p className="font-normal text-white text-xs"> {`${props.gallery.galleryCity}, ${props.gallery.galleryCountry}`} </p>
                    <a href = {props.gallery.galleryWebSite} className="absolute -bottom-24 -right-4 font-normal text-white text-xs bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4">Find More</a>
                    <p className="font-normal text-white text-xs"> {props.gallery.latitude} </p>
                    <p className="font-normal text-white text-xs"> {props.gallery.longitude} </p>
                </div>
            </div>
            <div className="flex justify-center items-center h-80 bg-black w-1/2 rounded-xl mt-2 text-white"> Map
            </div>
            
            <img className="absolute top-[31.5%] right-0 rounded-full p-3 bg-black " src="./images/heart-icon.svg"/>
        </div>
    );
}

export default GalleryInfo;