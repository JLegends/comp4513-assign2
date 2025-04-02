
import ArtistPaintingListItem from './ArtistPaintingListItem.jsx'

const ArtistPaintingList = ({ paintings, toggleDialog}) => {
    if (!paintings || paintings.length === 0) {
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
                        <th className="px-2 w-6 font-normal">#</th>
                        <th className="px-2 w-4 font-normal"> </th>
                        <th className="px-4 w-1/12 font-normal"> Title</th>
                        <th className="font-normal"></th>
                        <th className="w-2/12 font-normal">Year</th>
                    </tr>
                    <tr>
                        <td colSpan={5} className="py-2 ">
                            <hr className= "bg-gray-600 h-[2px] border-none"/>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {paintings.map((p, index) => 
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
