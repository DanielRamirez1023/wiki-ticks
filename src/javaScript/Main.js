import {registrarUsuario,iniciarSesion,cerrarSesion,usuarioEnSesion,inicioSesionGoogle} from './BaseDatos.js'


const botonI = document.querySelector('.btn-inicio');
const botonR= document.querySelector('.btn-registrarme');
const usuario = document.querySelector('.usuario');
const botonC = document.querySelector('#cerrar-sesion');
usuarioEnSesion(botonI,botonR,usuario,botonC);


const formularioRegistro  = document.getElementById('form-registro');



if(formularioRegistro){
    formularioRegistro.addEventListener('submit',(e) =>{ 
        e.preventDefault();
    
            let usuario = formularioRegistro['usuario'].value
            let contraseña = formularioRegistro['usuario'].value
        
            registrarUsuario(usuario,contraseña);
    
        })
}

    const formularioInicioSesion = document.getElementById('form-inicioSesion');

if(formularioInicioSesion){
    formularioInicioSesion.addEventListener('submit',(e) =>{ 
        e.preventDefault();
            
            let usuario = formularioInicioSesion['usuario'].value
            let contraseña = formularioInicioSesion['usuario'].value
        
            iniciarSesion(usuario,contraseña);
        
        })
}


const btn_cerrarSesion = document.querySelector('#cerrar-sesion');

btn_cerrarSesion.addEventListener('click',e=>{
    cerrarSesion();
    location.reload();
})