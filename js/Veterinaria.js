

class Veterinaria {
    constructor() {
        this.usuarios = [];
    }

    registrarUsuario(nombreUsuario, password, nombreCompleto) {
        const nuevoUsuario = new Usuario(nombreUsuario, password, nombreCompleto);
        this.usuarios.push(nuevoUsuario);
    }

    logearUsuario(nombreUsuario, password) {
        const usuario = this.usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.password === password)
        if (usuario) {
            alert('Ingreso exitoso');
            return true;
        } else {
            alert('Usuario no existe');
            return false;
        }
    }

    listaDeUsuarios() {
        let usuariosLista = 'Lista de usuarios:\n';
        this.usuarios.forEach(usuario => {
            usuariosLista += `${usuario.nombreCompleto}\n`
        })
        return usuariosLista;
    }

    registrarMascotaEnUsuario(nombreUsuario) {
        this.usuarios.forEach(usuario => {
            if (usuario.nombreCompleto === nombreUsuario) {
                let especie = Number(prompt('Ingrese la especie: \n1. Perro/a \n2. Gato/a'));
                while (especie !== 1 && especie !== 2) {
                    alert('Por favor, ingresa 1 o 2.');
                    especie = Number(prompt('Ingrese la especie: \n1. Perro/a \n2. Gato/a'));
                }
                if (especie == 1) {
                    especie = 'canino';
                } else {
                    especie = 'felino';
                }
                let raza = prompt('Ingrese la raza').toLowerCase();
                let sexo = Number(prompt('Ingrese el sexo: \n1. Macho \n2. Hembra'));
                while (sexo !== 1 && sexo !== 2) {
                    alert('Por favor, ingresa 1 o 2.');
                    sexo = Number(prompt('Ingrese el sexo: \n1. Macho \n2. Hembra'));
                }
                if (sexo == 1) {
                    sexo = 'macho';
                } else {
                    sexo = 'hembra';
                }
                let nombre = prompt('Ingrese el nombre de la mascota').toLowerCase();
                let edad = Number(prompt('Ingrese la edad de la mascota'));
                let peso = Number(prompt('Ingrese el peso de la mascota'));
                usuario.registrarMascota(especie, raza, sexo, nombre, edad, peso)
                alert('Mascota registrada')
            }
        });
    }

    listaDeMascotas() {
        let mascotasLista = 'Lista de mascotas registradas:\n';
        this.usuarios.forEach(usuario => {
            mascotasLista += `${usuario.nombreCompleto}\n`
            mascotasLista += `${usuario.listaMisMascotas()}\n`
        })
        return mascotasLista;
    }

    buscarUsuario(nombreCompleto) {
        const usuario = this.usuarios.find(usuario => usuario.nombreCompleto === nombreCompleto)
        if (usuario) {
            alert('Este nombre se encuentra en el sistema\n\nDatos: ' + usuario.mostrarDatos())
            return true;
        } else {
            alert('Usuario no encontrado');
            return false;
        }
    }

    buscarMascota(nombre, especie) {
        let mascotaEncontrada = false
        for (let usuario of this.usuarios) {
            for (let mascota of usuario.mascotas) {
                if (mascota.nombre == nombre && mascota.especie == especie) {
                    let informacion = mascota.mostrarDatos()
                    alert('' + informacion)
                    mascotaEncontrada = true
                }
            }
        }
        if (mascotaEncontrada == false) {
            alert('Animal no encontrado')
        }

    }

}