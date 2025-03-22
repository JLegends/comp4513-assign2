import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
});

const GalleryInfo = (props) => {
  return (
    <div className="flex flex-col w-full h-full p-2 relative">
      {/* Background Image */}
      <div className="flex bg-[#1F1F1F] h-1/2 w-full rounded-xl shadow-lg px-3 py-3">
        {/* Overlay */}
        <div className="flex flex-col pl-4 w-[44%] pt-3 relative">
          <h3 className="text-white text-lg font-bold"> {props.gallery.galleryName}</h3>
          <p className="font-normal text-white text-xs"> {props.gallery.galleryNativeName} </p>
          <p className="font-normal text-white text-xs"> {`${props.gallery.galleryCity}, ${props.gallery.galleryCountry}`} </p>
          <a href={props.gallery.galleryWebSite} className="absolute -bottom-4 -left-4 text-[#1F1F1F] text-sm bg-button hover:bg-button-focus hover:text-white rounded-xl p-3 m-4 font-bold">Find More</a>
        </div>
        <img src={"./images/" + props.gallery.galleryId + '.jpg'} className="flex rounded-xl h-full w-1/2 translate-x-1/8 bg-green-500"/>
      </div>

      {/* Map */}
      <div className="flex justify-center items-center h-1/2 bg-[#1F1F1F] w-full rounded-xl mt-2 text-white">
        <MapContainer 
            key={props.gallery.galleryId}
            className = "h-full w-full"
            center={[props.gallery.latitude, props.gallery.longitude]} 
            zoom={13} 
            scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[props.gallery.latitude, props.gallery.longitude]}>
            <Popup>
              {props.gallery.galleryName}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <img className="absolute top-[3.5%] right-7 rounded-full p-2 bg-[#1F1F1F] hover:bg-button-focus bg-opacity-100" src="./images/heart-icon-outline.svg"/>
    </div>
  );
};

export default GalleryInfo;