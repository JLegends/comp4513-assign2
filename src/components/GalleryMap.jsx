import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
const baseUrl = import.meta.env.BASE_URL + 'images/';
const markerIcon = baseUrl + 'marker-icon.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerIcon,
});

const customIcon = new L.Icon({
    iconUrl: baseUrl + 'marker-icon.png',
    shadowUrl: markerIconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const GalleryMap = (props) => {

    return (      
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
            <Marker position={[props.gallery.latitude, props.gallery.longitude]} icon={customIcon}>
                <Popup>
                {props.gallery.galleryName}
                </Popup>
            </Marker>
            </MapContainer>
        </div>)
}


export default GalleryMap;
