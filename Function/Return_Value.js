/* 
Soal 1: Perhitungan Luas Persegi

Buatlah fungsi bernama calculateSquareArea yang menerima satu parameter, 
yaitu panjang sisi persegi, dan mengembalikan luas persegi.
*/

function calculateSquareArea (a) {
    const result = a ** 2;
    return result;
}

const squareArea = calculateSquareArea (8);
console.log('Luas persegi = ', squareArea);

/*
Soal 2: Menentukan Bilangan Genap atau Ganjil

Buatlah fungsi bernama isEven yang menerima satu parameter angka dan mengembalikan true 
jika angka tersebut genap, atau false jika ganjil.
*/

function isEvenOrOdd (number) {
    if (number % 2 === 0) {
        console.log(number, 'adalah bilangan genap.')
        return 'genap';
    } else {
        console.log(number, 'adalah bilangan ganjil.')
        return 'ganjil';
    }
}

const result = isEvenOrOdd (7);
//console.log('Hasil = ', result);