const geoCodeCountry = async (countryName) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(countryName)}`
    );
    const data = await response.json();
    if (data.length > 0) {
        const { lat, lon } = data[0]; // grabs the latitude and longitude from the first result
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    }
    throw new Error("Country not found");
};

export default  geoCodeCountry