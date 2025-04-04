import PaintingItem from "./PaintingItem";
import getArtistName from "./GetArtistName";
import useSort from "./useSort";

const PaintingList = ({toggleDialog, paintings}) => {
    const { sortConfig, handleSort, sortedData } = useSort(paintings);

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
                        <th className="px-2 w-5 font-normal">
                            #
                        </th>
                        <th className="px-2 w-16"></th>
                        <th className="px-2 w-0 -translate-x-[10px] font-normal" onClick={() => handleSort("title")}>
                            Title {sortConfig.key === "title" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th className="font-normal w-1/2"></th>
                        <th className="px-2 w-25 font-normal" onClick={() => handleSort("artists")}>
                            Artist {sortConfig.key === "artists" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th className="px-2 w-10 min-w-10 font-normal" onClick={() => handleSort("yearOfWork")}>
                            Year {sortConfig.key === "yearOfWork" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th className="px-2 w-2/12 font-normal" onClick={() => handleSort("galleries")}>
                            Gallery {sortConfig.key === "galleries" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={7} className="py-2">
                            <hr className= "bg-gray-600 h-[2px] border-none"></hr>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {sortedData.map((p,index) => 
                        <PaintingItem 
                            toggleDialog={toggleDialog} 
                            key={p.paintingId} 
                            index={index+1} 
                            title={p.title} 
                            name={getArtistName(p.artists)} 
                            year={p.yearOfWork} 
                            fileName={p.imageFileName} 
                            gallery={p.galleries.galleryName} 
                            painting={p}
                        />                
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PaintingList;
