/*
Mengubah implementasi(properti/ method) yg diturunkan dari superclass.
*/

// Overriding property dan method
class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
   
    charging() {
      console.log(`Charging ${this.model}`);
    }
}

class Android extends SmartPhones {
    // overriding constructor
    constructor(color, brand, model, device) { // overriding properti
      super(color, brand, model);
      this.device = device;
    }

    charging() { // overriding method
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }
   
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();