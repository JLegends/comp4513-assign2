
const GalleryPaintingListItem = (props) => {
    
    let name = "";
    if (props.firstName && props.lastName) {
        name = `${props.firstName} ${props.lastName}`
    }
    else if (props.firstName && !props.lastName) {
        name = props.firstName
    }
    else if (!props.firstName && props.lastName) {
        name = props.lastName
    }
    else name = "unknown"

    return (
        <>
            <tr className="text-sm">
                <td className="p-2 w-1/12"> {props.index} </td>
                <td className=""><img src="images/favicon.png"/></td>
                <td className="p-2 w-6/12"> {props.title} </td>
                <td className="p-2 w-4/12"> {name} </td>
                <td className="p-2 w-2/12"> {props.year} </td>
            </tr>
            <tr>
                <td colSpan={5} className="p-0">
                    <hr className= "bg-gray-600 h-[2px]"></hr>
                </td>
            </tr>
        </>
    );
}

export default GalleryPaintingListItem;
