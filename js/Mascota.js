

class Mascota {
    constructor(especie, raza, sexo, nombre, edad, peso) {
        this.especie = especie;
        this.raza = raza;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    mostrarDatos() {
        let datosMascota = `\nEspecie: ${this.especie}, \nRaza: ${this.raza}, \nSexo: ${this.sexo}, \nNombre: ${this.nombre}, \nEdad: ${this.edad}, \nPeso: ${this.peso} Kg.\n`
        return datosMascota;
    }
}