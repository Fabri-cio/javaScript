class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.encendido = false;
    this.velocidad = 0;
  }

  encender() {
    this.encendido = true;
    console.log(`El coche ${this.marca} ${this.modelo} se ha encendido`);
  }

  apagar() {
    this.encendido = false;
    console.log(`El coche ${this.marca} ${this.modelo} se ha apagado`);
  }

  acelerar(velocidad) {
    if (this.encendido) {
      this.velocidad += velocidad;
      console.log(
        `El coche ${this.marca} ${this.modelo} acelero a ${this.velocidad} km/h`
      );
    } else {
      console.log(
        `No se puede acelerar el coche ${this.marca} ${this.modelo} esta apagado`
      );
    }
  }

  frenar(velocidad) {
    if (this.velocidad >= velocidad) {
      this.velocidad -= velocidad;
      console.log(
        `El coche ${this.marca} ${this.modelo} freno a ${this.velocidad} km/h`
      );
    } else {
      console.log(
        `El coche ${this.marca} ${this.modelo} no puede frenar porque esta detenido`
      );
    }
  }
}

const coche1 = new Coche("Toyota", "Corolla", "Rojo");
const coche2 = new Coche("Ford", "Mustang", "azul");

// uso de los metodos de los objetos
coche1.encender();
coche1.acelerar(90);
coche1.frenar(40);
coche1.apagar();
