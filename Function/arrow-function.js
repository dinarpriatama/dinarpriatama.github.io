let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi function expression:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi arrow function:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi refactor:', temperatureInFahrenheit);