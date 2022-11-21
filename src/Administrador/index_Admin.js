var user1 = {
    correo: 'alejo9017@gmail.com',
    contraseña: '12345',
    activo: false
}


var user2 = {

    correo: 'sofia08@gmail.com',
    contraseña: '12345',
    activo: false
}



var usuarios = [user1, user2];
var usuarioAValidar = [];

function login() {
    var user, pass;

    user = document.getElementById("correo").value;
    pass = document.getElementById("contraseña").value;

    usuarioAValidar = buscarElUsuarioRegistrado(user);



    if (usuarioAValidar[0]) {
        if (usuarioAValidar[0].contraseña == pass) {
            sessionStorage.setItem('usuario', usuarioAValidar[0].correo);
            sessionStorage.setItem('nombre', usuarioAValidar[0].nombre);

            console.log(usuarioAValidar);
            window.location = "/INICIOADM";
        } else {
            window.alert("Contraseña incorrecta");
        }

    } else {
        window.alert("Usuario no registrado");
    }

    sessionStorage.setItem('usuario', usuarioAValidar[0].correo);
}
function buscarElUsuarioRegistrado(user) {
    return usuarios.filter(usuario => usuario.correo == user)
}


function Send() {
    window.location = "../Administrador/SendEmail.html";
}