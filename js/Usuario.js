

class Usuario {
    constructor(nombreUsuario, password, nombreCompleto) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombreCompleto = nombreCompleto;
        this.mascotas = [];
    }

    registrarMascota(especie, raza, sexo, nombre, edad, peso) {
        const nuevaMascota = new Mascota(especie, raza, sexo, nombre, edad, peso);
        this.mascotas.push(nuevaMascota);
    }

    mostrarDatos() {
        let datosUsuarios = `\nNombre completo: ${this.nombreCompleto}, \nNombre de usuario: ${this.nombreUsuario}, \nPassword: ${this.password},`
        return datosUsuarios;
    }

    listaMisMascotas() {
        let datosMisMascotas = 'Mascotas: \n'
        this.mascotas.forEach(mascota => {
            datosMisMascotas += `${mascota.mostrarDatos()}`
        })
        return datosMisMascotas
    }
}








