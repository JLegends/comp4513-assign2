
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
        <tr className="text-sm hover:bg-[#302F2F] ">
            <td className="p-2 w-1/12 text-[1rem]"> {props.index} </td>
            <td className=""><img src="images/favicon.png"/></td>
            <td className="p-2 w-6/12 font-bold text-[1rem]"> {props.title} </td>
            <td className="p-2 w-3/12"> {name} </td>
            <td className="p-2 w-2/12"> {props.year} </td>
        </tr>
    
    );
}

export default GalleryPaintingListItem;
