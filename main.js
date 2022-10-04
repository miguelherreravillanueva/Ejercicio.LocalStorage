
// 1. Formulario de contacto - Local Storage

// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// Muestra el usuario que has guardado en el DOM
// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

// localStorage.setItem("firstName", "Pepito");
// let test1 = localStorage.getItem("firstName");
// console.log(test1);

// localStorage.setItem("email", "pepitomail@gmail.com");
// let test2 = localStorage.getItem("email", "pepitomail@gmail.com")
// console.log(test2)

// localStorage.setItem("message", "Esto es un mensaje");
// let test3 = localStorage.getItem("message", "Esto es un mensaje")
// console.log(test3)



let listaSinOrden = document.createElement("ul");
console.log(listaSinOrden)

document.body.appendChild(listaSinOrden);

let elemento1Lista = document.createElement("li");


let elemento2Lista = document.createElement("li");
// elemento2Lista.textContent = "mirkouda@gmail.com";
// listaSinOrden.appendChild(elemento2Lista)

let elemento3Lista = document.createElement("li");
// elemento3Lista.textContent = "Esto es un texto";
// listaSinOrden.appendChild(elemento3Lista)

// let listaSinOrden = JSON.parse(localStorage.getItem("li"));

const inputFirstName = document.getElementById('firstName')
const inputEmail = document.getElementById('email')
const inputMessage = document.getElementById("message")

const btn = document.getElementById('send-button')



function onSubmit(e) {
    e.preventDefault()
    console.log(inputFirstName.value);
    console.log(inputEmail.value);
    console.log(inputMessage.value);

    let object = {
        email: inputEmail.value,
        name: inputFirstName.value,
        message: inputMessage.value,
    }

    // localStorage.setItem("object", object)
    localStorage.setItem("user", JSON.stringify(object));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    elemento1Lista.textContent = user.email;
    elemento2Lista.textContent = user.name;
    elemento3Lista.textContent = user.message;
    listaSinOrden.appendChild(elemento1Lista);
    listaSinOrden.appendChild(elemento2Lista);
    listaSinOrden.appendChild(elemento3Lista);
}

btn.addEventListener('click', onSubmit)



        // const inputEmail = document.getElementById('email')
        // const btn = document.getElementById('btn')

        // const inputMessage = document.getElementById('message')
        // const btn = document.getElementById('btn')


// 2. Extra

// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage
