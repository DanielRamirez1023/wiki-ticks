import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr6Wjv1wA6msgp135mkoHabtJHk_cZOO4",
    authDomain: "crud-acuamatic.firebaseapp.com",
    projectId: "crud-acuamatic",
    storageBucket: "crud-acuamatic.appspot.com",
    messagingSenderId: "53201143847",
    appId: "1:53201143847:web:e7ae89eeacf0955deca602"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider(); 

export const registrarUsuario = async(usuario,contraseña) => {
    createUserWithEmailAndPassword(auth,usuario,contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire({
      icon: 'success',
      title: 'Usuario Registrado correctamente',
      html: '<a style="width: 300px;" href="../Index.html"><button type="button" class="btn btn-success">Siguiente</button></a>',
      allowOutsideClick: false,
      showConfirmButton:false,
      
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: 'error',
      title: 'Usuario no pudo ser Registrado',
      confirmButtonText: 'continuar', 
    })
  });
  
}


export const iniciarSesion = async(usuario,contraseña) => {
    signInWithEmailAndPassword(auth,usuario,contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire({
      icon: 'success',
      title: 'inicio de Sesion exitoso',
      html: '<a style="width: 300px;" href="../Index.html"><button type="button" class="btn btn-success">Siguiente</button></a>',
      allowOutsideClick: false,
      showConfirmButton:false,
      
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: 'error',
        title: 'No se encontro el usuario',
        confirmButtonText: 'continuar', 
      })
  });
  
}

export const cerrarSesion = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            icon: 'success',
            title: 'Sesion cerrada',
            confirmButtonText: 'continuar', 
          })
      }).catch((error) => {
        // An error happened.
    });
  
}


export const usuarioEnSesion = (botonI,botonR,usuario,botonC) => {
  auth.onAuthStateChanged(user =>{
    if(user){

      let email = user.email;

      console.log('Usuario en sesion '+email);
      botonI.style.display ='none';
      botonR.style.display ='none';
      botonC.style.display ='flex';
      usuario.style.display = 'flex';
      usuario.innerHTML = email;
      
    }else{
      console.log('no hay Usuario en sesion');  
    }
  })
}

export const inicioSesionGoogle = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
   }).catch(err => {console.log(err)})
}




