/*
Enkapsulasi adalah proses membungkus data di suatu wadah yg disebut class.
atau bisa disebut juga membuat data yg ada di class sebagai private.
Properti yg ada di dalam instance bersifat mutable (dapat diubah).
Intinya membatasi bagian kode yang dapat diakses. 
Secara default buatlah bagian kode menjadi tidak dapat diakses, jika tidak diperlukan
*/

/*
class CoffeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.temperature = 90;
    }
  
    makeCoffe() {
      console.log('Membuat kopi dengan suhu', this.temperature);
    }
}
  
const coffee = new CoffeMachine(100);
coffee.temperature = 60;

coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60
*/

/*
Pada contoh di atas, kita menetapkan temperature mesin kopi 90 derajat Celcius, 
tetapi ada pengguna yang iseng mengubahnya menjadi 60. Mengubah nilai tersebut bisa saja 
mengakibatkan mesin kopi rusak. Meskipun kita sudah menetapkan nilai temperature, 
nilainya tetap dapat diubah. Hal ini tidaklah baik. Untuk mencegah hal itu terjadi lagi, 
kita dapat menerapkan getter dan setter.
*/

/*
get adalah cara untuk mendapatkan nilai dari property.
set adalah method untuk menetapkan nilai property.
*/

/*
class CoffeeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this._temperature;
    }
}
  
const coffee = new CoffeeMachine(10);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);
*/

/*
Penambahan underscore (_) di variable temperature untuk menandakan 
bahwa nilai temperature tidak dapat diubah. Namun, sebenarnya penggunaan tanda underscore 
tidak benar-benar membuat property temperature tidak dapat diubah, ia masih dapat diubah. 
Penggunaan underscore hanyalah code convention yang disepakati oleh komunitas JavaScript.
*/

// Untuk membuat nilainya benar-benar tidak dapat diubah, caranya:

class CoffeeMachine {
    #temperature = 90;
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }
  
    #defaultTemperature() {
      return 90;
    }
}