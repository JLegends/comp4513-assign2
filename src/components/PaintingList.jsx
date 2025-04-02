import PaintingItem from "./PaintingItem";
import getArtistName from "./GetArtistName";

//Might need to figure out how to remove scroll bar or maybe it should be kept for usability? The buttons are pretty slow to navigate

const PaintingList = ({toggleDialog, paintings}) => {

    if (!paintings || paintings.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
            </div>
        );
    }

    return (
        <div className="w-full h-[100%] overflow-x-auto overflow-y-auto scrollbar-custom text-sm">
            <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-[#212121] z-10">
                    <tr className="text-left">
                        <th className="px-2 w-5 font-normal">#</th>
                        <th className="px-2 w-16"></th>
                        <th className="px-2 w-[80px] h-[80px] m-[1px] font-normal">Title</th>
                        <th className="font-normal w-0"></th>
                        <th className="px-2 w-10 font-normal">Artist</th>
                        <th className="px-2 w-10 font-normal">Year</th>
                        <th className="px-2 w-2/12 font-normal">Gallery</th>
                    </tr>
                    <tr>
                        <td colSpan={7} className="py-2">
                            <hr className= "bg-gray-600 h-[2px] border-none"></hr>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {paintings.map((p, index) => 
                        <PaintingItem 
                            toggleDialog={toggleDialog} 
                            key={p.paintingId} 
                            index={index+1} 
                            title={p.title} 
                            name={getArtistName(p.artists)} 
                            year={p.yearOfWork} 
                            fileName={p.imageFileName} 
                            gallery={p.galleries.galleryName} 
                            painting={p}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaintingList;
