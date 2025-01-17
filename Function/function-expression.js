/*
let temperatureInCelsius;
let temperatureInFahrenheit;

temperatureInCelsius = 50;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 122

temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158

temperatureInCelsius = 100;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 212
*/

/*
function convertCelciusToFahrenheit(temperature) {
    if (temperature !== undefined) {
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;

        console.log('Hasil konversi:', temperatureInFahrenheit);
    }
}


const temperatureInCelcius = 90;
convertCelciusToFahrenheit(temperatureInCelcius);
convertCelciusToFahrenheit();

console.log(convertCelciusToFahrenheit);
*/

const convertCelciusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}



const temperatureInFahrenheit = convertCelciusToFahrenheit (90);
console.log('Hasil konversi:', temperatureInFahrenheit)
