import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"
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


export const inicioSesion = async(usuario,contraseña) => {
    createUserWithEmailAndPassword(auth,usuario,contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Usuario Creado')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
}


export const ValidarExistencia = async(usuario,contraseña) => {
    signInWithEmailAndPassword(auth,usuario,contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
        confirmButtonText: 'continuar', 
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

