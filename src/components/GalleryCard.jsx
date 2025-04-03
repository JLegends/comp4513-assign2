const GalleryCard = ({gallery}) => {

    return (

        <div className="flex bg-[#1F1F1F] h-1/2 w-full rounded-xl shadow-lg px-3 py-3">
            <div className="flex flex-col pl-4 w-[44%] pt-3 relative">
            <h3 className="text-white text-xl font-bold"> {gallery.galleryName}</h3>
            <p className="font-normal text-gray-400 text-normal"> {gallery.galleryNativeName} </p>
            <p className="font-normal text-gray-400 400-normal"> {`${gallery.galleryCity}, ${gallery.galleryCountry}`} </p>
            <a href={gallery.galleryWebSite} className="absolute -bottom-4 -left-4 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Learn More</a>
            </div>
            <img src={"./images/art-images/galleries/" + gallery.galleryId + '.jpg'} className="flex rounded-xl h-full w-1/2 translate-x-1/8 bg-green-500"/>
        </div>
    )
}

export default GalleryCard;