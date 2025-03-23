
const PaintingPopup = (props) => {
    return (props.trigger) ? (
        <div className="flex w-100% h-100% justify-center items-center p-32" >
            <div>
                <button className="p-4 bg-red-500">X</button>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default PaintingPopup