

let veterinaria = new Veterinaria();

veterinaria.registrarUsuario('santi', '123', 'santiago asa');
veterinaria.registrarUsuario('leti', '8910', 'leticia nicasio');
veterinaria.registrarUsuario('damian', '456', 'damian tumine');
veterinaria.registrarUsuario('tomy', '678', 'tomas rodriguez');
veterinaria.registrarUsuario('norma', '131415', 'norma tisera');
veterinaria.registrarUsuario('claudia', '101112', 'claudia iribarne');
veterinaria.usuarios[0].registrarMascota('canino', 'mestizo', 'macho', 'coco', 5, 26);
veterinaria.usuarios[0].registrarMascota('felino', 'mestizo', 'hembra', 'biena', 7, 6)
veterinaria.usuarios[1].registrarMascota('felino', 'mestizo', 'hembra', 'matilda', 9, 3.5);
veterinaria.usuarios[2].registrarMascota('canino', 'bulldog frances', 'hembra', 'juana', 4, 9);
veterinaria.usuarios[3].registrarMascota('canino', 'border collie', 'macho', 'nestor', 7, 23);
veterinaria.usuarios[4].registrarMascota('canino', 'pug carlino', 'hembra', 'bruna', 10, 11);
veterinaria.usuarios[5].registrarMascota('felino', 'mestizo', 'macho', 'michi', 1, 3);

do {

    let ingreso = Number(prompt('\n1. Ingresar al sistema. \n2. Registrarse \n3. Salir'));
    while (ingreso !== 1 && ingreso !== 2 && ingreso !== 3) {
        alert('Por favor, ingresa 1, 2 o 3.');
        ingreso = Number(prompt('\n1. Ingresar al sistema. \n2. Registrarse \n3. Salir'));
    }

    if (ingreso === 1) {
        let nombreUsuario = prompt('Ingrese su usuario');
        let password = prompt('Ingrese su password');
        let loginExitoso = veterinaria.logearUsuario(nombreUsuario, password);

        while (!loginExitoso) {
            let opcion = Number(prompt('NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS.\n\nSeleccione una opción:\n1. Intentar nuevamente. \n2. Volver al menú principal.'));
            while (opcion !== 1 && opcion !== 2) {
                alert('Por favor, ingresa 1 o 2.');
                opcion = Number(prompt('Seleccione una opción:\n1. Intentar nuevamente. \n2. Volver al menú principal.'));
            }
            if (opcion === 2) {
                break;
            }
            nombreUsuario = prompt('Ingrese su usuario');
            password = prompt('Ingrese su password');
            loginExitoso = veterinaria.logearUsuario(nombreUsuario, password);
        }

        if (!loginExitoso) {
            continue;
        }

        do {

            if (loginExitoso) {
                let respuestaUsuario = Number(prompt('\n1. Ver todos los usuarios registrados \n2. Buscar usuario registrado \n3. Ver todas las mascotas registradas \n4. Buscar mascota registrada \n5. Registrar nueva mascota  \n6. Salir'));
                while (respuestaUsuario !== 1 && respuestaUsuario !== 2 && respuestaUsuario !== 3 && respuestaUsuario !== 4 && respuestaUsuario !== 5 && respuestaUsuario !== 6) {
                    alert('Por favor, ingresa una opción correcta.');
                    respuestaUsuario = Number(prompt('\n1. Ver todos los usuarios registrados \n2. Buscar usuario registrado \n3. Ver todas las mascotas registradas \n4. Buscar mascota registrada \n5. Registrar nueva mascota  \n6. Salir'));
                }

                if (respuestaUsuario == 1) {
                    alert(veterinaria.listaDeUsuarios());

                } else if (respuestaUsuario == 2) {
                    do {
                        let buscarPersona = prompt('Ingrese nombre y apellido').toLowerCase();
                        veterinaria.buscarUsuario(buscarPersona);
                        let respuesta = Number(prompt('¿Desea salir o realizar otra búsqueda? \n1. Salir \n2. Realizar otra búsqueda'));
                        while (respuesta !== 1 && respuesta !== 2) {
                            alert('Por favor, ingresa 1 o 2.');
                            respuesta = Number(prompt('¿Desea salir o realizar otra búsqueda? \n1. Salir \n2. Realizar otra búsqueda'));
                        }
                        if (respuesta === 1) {
                            break;
                        }
                    } while (true)

                } else if (respuestaUsuario == 3) {
                    alert(veterinaria.listaDeMascotas());

                } else if (respuestaUsuario == 4) {
                    do {
                        let buscarNombre = prompt('Ingrese nombre de la mascota').toLowerCase();
                        let buscarEspecie = Number(prompt('Ingrese la especie: \n1. Perro/a \n2. Gato/a'));
                        while (buscarEspecie !== 1 && buscarEspecie !== 2) {
                            alert('Por favor, ingresa 1 o 2.');
                            buscarEspecie = Number(prompt('Ingrese la especie: \n1. Perro/a \n2. Gato/a'));
                        }
                        if (buscarEspecie == 1) {
                            buscarEspecie = 'canino';
                        } else {
                            buscarEspecie = 'felino';
                        }
                        veterinaria.buscarMascota(buscarNombre, buscarEspecie);
                        let respuesta = Number(prompt('¿Desea salir o realizar otra búsqueda? \n1. Salir \n2. Realizar otra búsqueda'));
                        while (respuesta !== 1 && respuesta !== 2) {
                            alert('Por favor, ingresa 1 o 2.');
                            respuesta = Number(prompt('¿Desea salir o realizar otra búsqueda? \n1. Salir \n2. Realizar otra búsqueda'));
                        }
                        if (respuesta === 1) {
                            break;
                        }
                    } while (true)

                } else if (respuestaUsuario == 5) {
                    let nombreUsuarioMascotaNueva = prompt('Ingrese nombre del usuario').toLowerCase();
                    veterinaria.registrarMascotaEnUsuario(nombreUsuarioMascotaNueva);
                } else {
                    let respuesta = Number(prompt('Desea volver al menú principal? \n1. Si \n2. No'));
                    while (respuesta !== 1 && respuesta !== 2) {
                        alert('Por favor, ingresa 1 o 2.');
                        respuesta = Number(prompt('Desea volver al menú principal? \n1. Si \n2. No'));
                    }
                    if (respuesta === 1) {
                        break;
                    }
                }
            }
        } while (true)

    } else if (ingreso === 2) {
        let nombreUsuario = prompt('Ingrese su nombre de usuario');
        let password = prompt('Ingrese su password');
        let nombreCompleto = prompt('Ingrese su nombre y apellido').toLowerCase();
        veterinaria.registrarUsuario(nombreUsuario, password, nombreCompleto);
    } else {
        let respuesta = Number(prompt('Esta seguro que desea abandonar el sistema? \n1. Si \n2. No'));
        while (respuesta !== 1 && respuesta !== 2) {
            alert('Por favor, ingresa 1 o 2.');
            respuesta = Number(prompt('Esta seguro que desea abandonar el sistema? \n1. Si \n2. No'));
        }
        if (respuesta === 1) {
            break;
        }
    }
} while (true);

alert('Gracias por usar nuestros servicios');