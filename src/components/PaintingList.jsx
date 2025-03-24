import PaintingItem from "./PaintingItem";
import getArtistName from "./GetArtistName";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const PaintingList = (props) => {
    if (!props.paintings || props.paintings.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
            </div>
        );
    }

    return (
        <div className="w-full h-[100%] overflow-x-auto scrollbar-hide text-sm">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left">
                        <th className="px-2 w-1/12 font-normal">#</th>
                        <th className="px-2 translate-x-2 w-1/12 font-normal">Title</th>
                        <th className="font-normal"></th>
                        <th className="px-2 w-3/12 font-normal">Artist</th>
                        <th className="px-2 w-2/12 font-normal">Year</th>
                        <th className="px-2 w-2/12 font-normal">Gallery</th>
                    </tr>
                    <tr>
                        <td colSpan={6} className="py-2">
                            <hr className= "bg-gray-600 h-[2px] border-none"></hr>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    
                    
                    {props.paintings.map((p, index) => 
                        <PaintingItem key={p.paintingId} index={index+1} title={p.title} name={getArtistName(p.artists)} year={p.yearOfWork} fileName={p.imageFileName} gallery={p.galleries.galleryName}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaintingList;
