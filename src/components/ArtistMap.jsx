import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import geoCodeCountry from './geoCodeCountry.jsx';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
});

const ArtistMap = (props) => {
    const [coordinates, setCoordinates] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
          try {
            const { latitude, longitude } = await geoCodeCountry(props.nationality);
            setCoordinates({ latitude, longitude });
          } catch (error) {
            console.error("Error fetching coordinates:", error);
            setError("Failed to load map.");
          }
        };
    
        fetchCoordinates();
        }, [props.nationality]
    );

    if (error) {
        return <div className="flex justify-center items-center h-1/2 bg-[#1F1F1F] w-full rounded-xl mt-2 text-white">{error}</div>;
    }
    
    if (!coordinates) {
        return (
          <div className="w-full h-full flex items-center justify-center text-white text-lg">
            <div className="flex justify-center items-center w-40 h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
            </div>
          </div>
        )
    }
    
    return (      
        <div className="flex justify-center items-center h-1/2 bg-[#1F1F1F] w-full rounded-xl mt-2 text-white">
            <MapContainer 
                key={`${coordinates.latitude}-${coordinates.longitude}`} // Discovered this is a way to force a re-render every time (not just by key)
                className = "h-full w-full"
                center={[coordinates.latitude, coordinates.longitude]} 
                zoom={4} 
                scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates.latitude, coordinates.longitude]}>
                <Popup>
                {props.nationality}
                </Popup>
            </Marker>
            </MapContainer>
        </div>)
}


export default ArtistMap;
