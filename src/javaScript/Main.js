import {inicioSesion,ValidarExistencia,cerrarSesion} from './BaseDatos.js'


const formularioRegistro  = document.getElementById('form-registro');



if(formularioRegistro){
    formularioRegistro.addEventListener('submit',(e) =>{ 
        e.preventDefault();
    
            let usuario = formularioRegistro['usuario'].value
            let contraseña = formularioRegistro['usuario'].value
        
            inicioSesion(usuario,contraseña);
    
        })
}

    const formularioInicioSesion = document.getElementById('form-inicioSesion');

if(formularioInicioSesion){
    formularioInicioSesion.addEventListener('submit',(e) =>{ 
        e.preventDefault();
            
            let usuario = formularioInicioSesion['usuario'].value
            let contraseña = formularioInicioSesion['usuario'].value
        
            ValidarExistencia(usuario,contraseña);
        
        })
}


const btn_cerrarSesion = document.querySelector('#cerrar-sesion');

btn_cerrarSesion.addEventListener('click',e=>{
    e.preventDefault();
    cerrarSesion();
})