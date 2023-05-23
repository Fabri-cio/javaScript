class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Mi nombre es ${this.name} y tengo ${this.age} años`);
  }
}

const persona1 = new Persona("William", 30);

persona1.saludar();
