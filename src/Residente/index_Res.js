
const router = require('express').Router();
const customerController = require('../controllers/customerController');
const { get, use } = require('../routes/customer');

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
var user;
var  pass;

var usuarios = [user1, user2];
var usuarioAValidar = [];

function log(){
     var user = document.getElementById("ID").value;
     var pass = document.getElementById("contraseña").value;
    window.alert("Nada" + user);

}

function login(a) {
    var user, pass;

    user = document.getElementById("correo").value;
    pass = document.getElementById("contraseña").value;


    usuarioAValidar = buscarElUsuarioRegistrado(user);



    if (usuarioAValidar[0]) {
        if (usuarioAValidar[0].contraseña == pass) {
            sessionStorage.setItem('usuario', usuarioAValidar[0].correo);
            sessionStorage.setItem('nombre', usuarioAValidar[0].nombre);

            console.log(usuarioAValidar);
            window.location = "/INICIORES";
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
    window.location = "../Residente/SendEmail.html";
}