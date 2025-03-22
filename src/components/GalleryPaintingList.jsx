
import GalleryPaintingListItem from './GalleryPaintingListItem.jsx'

const GalleryPaintingList = (props) => {
    return (
        <div className="w-full h-[100%] overflow-x-auto scrollbar-hide text-sm">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left">
                        <th className="px-2 w-1/12 font-normal">#</th>
                        <th className="px-2 w-1/12 font-normal">Title</th>
                        <th className="font-normal"></th>
                        <th className="px-2 w-3/12 font-normal">Artist</th>
                        <th className="px-2 w-2/12 font-normal">Year</th>
                    </tr>
                    <tr>
                        <td colSpan={5} className="py-2">
                            <hr className= "bg-gray-600 h-[2px]"></hr>
                        </td>
                    </tr>
                </thead>
                <tbody className="">
                    {props.paintings.map((p, index) => 
                        <GalleryPaintingListItem key={p.paintingId} index={index+1} title={p.title} firstName={p.artists.firstName} year={p.yearOfWork} fileName={p.imageFileName}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default GalleryPaintingList;
