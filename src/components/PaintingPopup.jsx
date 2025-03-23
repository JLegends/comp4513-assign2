
const PaintingPopup = (props) => {

    const p = [paintingId=0, index=1, title="Test", name="Pablo", year=1810, fileName="137010"]
    
    return (props.trigger) ? (
        <div className="flex w-100% h-100% justify-center items-center p-32" >

            <button className="p-4 bg-red-500">X</button>
        </div>
    ) : "";
};

export default PaintingPopup