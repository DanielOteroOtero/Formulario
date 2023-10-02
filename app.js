function alerta(tipo) {
    var alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-warning", "alert-dismissible", "show");

    var mensaje = ""

    alerta.innerHTML = `
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          ${mensaje.innerHTML = "<strong>Campo Obligatorio!</strong> " + tipo}
        `;

    alerta.querySelector(".btn-close").addEventListener("click", function () {
        alerta.remove();
    });

    document.body.prepend(alerta);

    window.scrollTo(0, 0);

    setTimeout(function () {
        alerta.remove();
    }, 4500);
}

let usuarios = [
    { cedula: "10000", nombre: "Ruben", apellido: "Otero", edad: "25", fecha: "12/12/1998", correo: "rubenotero@gmail.com", ciudad: "Barranquilla", direccion: "cra 41" },
    { cedula: "10001", nombre: "Roberta", apellido: "Gonzales", edad: "51", fecha: "21/07/1972", correo: "robbon3@gmail.com", ciudad: "Bogota", direccion: "calle 53" },
    { cedula: "10002", nombre: "Paco", apellido: "Valderama", edad: "12", fecha: "01/09/2011", correo: "valderamapp@gmail.com", ciudad: "Barranquilla", direccion: "Cra 72" },
    { cedula: "10003", nombre: "Jennifer", apellido: "Malambo", edad: "27", fecha: "08/01/1996", correo: "jennifer2098@gmail.com", ciudad: "Cartagena", direccion: "Cra 13" },
    { cedula: "10004", nombre: "Alejandro", apellido: "Garzo", edad: "33", fecha: "10/11/1990", correo: "elbarbas69@gmail.com", ciudad: "Medellin", direccion: "calle 90" }
]

let elemento = document.getElementById('tabla-body')

const listar = () => {
    let contenido = ""
    for (let i = 0; i < usuarios.length; i++) {
        contenido += `<tr><th scope="row">${i + 1}</th><td>${usuarios[i].cedula}</td><td>${usuarios[i].nombre}</td><td>${usuarios[i].apellido}</td><td>${usuarios[i].edad}</td><td>${usuarios[i].fecha}</td><td>${usuarios[i].correo}</td><td>${usuarios[i].ciudad}</td><td>${usuarios[i].direccion}</td></tr>`
    }
    elemento.innerHTML = contenido
}

const registrar = () => {
    let i = 1
    const cedula = document.getElementById('cedula').value.trim()
    const nombre = document.getElementById('nombre').value.trim()
    const apellido = document.getElementById('apellido').value.trim()
    const edad = document.getElementById('edad').value.trim()
    const fecha = document.getElementById('fecha').value.trim()
    const correo = document.getElementById('correo').value.trim()
    const ciudad = document.getElementById('ciudad').value.trim()
    const direccion = document.getElementById('direccion').value.trim()
    if (!cedula) return alerta('Ingrese su cedula')
    if (!nombre) return alerta('Ingrese su nombre')
    if (!apellido) return alerta('Ingrese su apellido')
    if (!edad) return alerta('Ingrese su edad')
    if (!fecha) return alerta('Ingrese su fecha de nacimiento')
    if (!correo) return alerta('Ingrese su correo')
    if (!ciudad) return alerta('Ingrese su ciudad')
    if (!direccion) return alerta('Ingrese su direccion')
    elemento.innerHTML += `<tr><th scope="row">${i}</th><td>${cedula}</td><td>${nombre}</td><td>${apellido}</td><td>${edad}</td><td>${fecha}</td><td>${correo}</td><td>${ciudad}</td><td>${direccion}</td></tr>`
    i++
    const nuevoUsuario = { cedula, nombre, apellido, edad, fecha, correo, ciudad, direccion }
    usuarios.push(nuevoUsuario)
    document.getElementById('cedula').value = ""
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('fecha').value = ""
    document.getElementById('correo').value = ""
    document.getElementById('ciudad').value = ""
    document.getElementById('direccion').value = ""
}

const limpiar = () => {
    document.getElementById('cedula').value = ""
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('fecha').value = ""
    document.getElementById('correo').value = ""
    document.getElementById('ciudad').value = ""
    document.getElementById('direccion').value = ""
}