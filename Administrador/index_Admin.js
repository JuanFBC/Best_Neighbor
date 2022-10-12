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
    window.location = "../Administrador/Inicio_Admin";
}
function buscarElUsuarioRegistrado(user) {
    return usuarios.filter(usuario => usuario.correo == user)
}


function Send() {
    window.location = "../Administrador/SendEmail.html";
}