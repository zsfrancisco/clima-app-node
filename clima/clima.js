const axios = require('axios');

const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=2c8a75b66077bd4f42b242409466824c&units=metric&lang=es`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}