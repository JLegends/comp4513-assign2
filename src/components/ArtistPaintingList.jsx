
import ArtistPaintingListItem from './ArtistPaintingListItem.jsx'
import useSort from "./useSort";


const ArtistPaintingList = ({ paintings, toggleDialog}) => {
    const { sortConfig, handleSort, sortedData } = useSort(paintings);

    if (!paintings || paintings.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
                <div className="flex justify-center items-center w-40 h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-[100%] overflow-x-auto overflow-y-auto scrollbar-custom text-sm">
            <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-[#212121] z-10">
                    <tr className="text-left">
                        <th className="px-2 w-6 font-normal">#</th>
                        <th className="px-2 w-4 font-normal"> </th>
                        <th className="w-1/12 min-w-14 font-normal" onClick={() => handleSort("title")}> 
                            Title {sortConfig.key === "title" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th className="font-normal"></th>
                        <th className="w-2/12 font-normal" onClick={() => handleSort("yearOfWork")}>
                            Year {sortConfig.key === "yearOfWork" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={5} className="py-2 ">
                            <hr className= "bg-gray-600 h-[2px] border-none"/>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {sortedData.map((p, index) => 
                        <ArtistPaintingListItem 
                            toggleDialog={toggleDialog} 
                            key={p.paintingId} 
                            index={index+1} 
                            title={p.title} 
                            firstName={p.artists.firstName} 
                            lastName={p.artists.lastName} 
                            year={p.yearOfWork} 
                            fileName={p.imageFileName} 
                            painting={p}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ArtistPaintingList;
