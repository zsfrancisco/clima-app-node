const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// console.log(typeof(lugar.getLugarLatLon(argv.direccion)));
// clima.getClima()

// clima.getClima(1.210000, -77.279999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon)
        return `El clima de ${ coords.direccion } es de ${ temp }`
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }

    // lugar.getLugarLatLon(direccion)
    //     .then(resp => {
    //         clima.getClima(resp.lat, resp.lon)
    //             .then(resp2 => {
    //                 console.log(`El clima de ${ resp.direccion } es de ${ resp2 }`)
    //             })
    //             .catch(console.log)
    //     })
    //     .catch(console.log)
};

getInfo(argv.direccion)
    .then(console.log);