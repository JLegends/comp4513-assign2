
import GalleryPaintingListItem from './GalleryPaintingListItem.jsx'

const GalleryPaintingList = (props) => {
    return (
        <div className="w-full h-[100%] overflow-x-auto scrollbar-hide">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left">
                        <th className="p-2 w-1/12">#</th>
                        <th className="p-2 w-1/12">Title</th>
                        <th className=""></th>
                        <th className="p-2 w-4/12">Artist</th>
                        <th className="p-2 w-2/12">Year</th>
                    </tr>
                </thead>
                <tbody className="">
                    {props.paintings.map((p, index) => 
                        <GalleryPaintingListItem key={p.paintingId} index={index+1} title={p.title} firstName={p.artists.firstName} year={p.yearOfWork}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default GalleryPaintingList;
