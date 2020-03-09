const axios = require('axios');

const getLugarLatLon = async(location) => {
    const encodeLocation = encodeURI(location);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeLocation }`,
        headers: { 'x-rapidapi-key': '916e528fedmsh1a79897a2c0feccp1d19edjsn7be0594344e3' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${location}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
};

module.exports = {
    getLugarLatLon
}