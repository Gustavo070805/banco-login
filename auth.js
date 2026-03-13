import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "SUA_KEY",
    authDomain: "SEU_DOMINIO",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_BUCKET",
    messagingSenderId: "SEU_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// CADASTRO
window.cadastrar = function (email, senha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            alert("Conta criada com sucesso!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}


// LOGIN
window.login = function (email, senha) {
    signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            alert("Login realizado!");
            window.location.href = "home.html";
        })
        .catch((error) => {
            alert("Email ou senha incorretos");
        });
}


// RECUPERAR SENHA
window.recuperarSenha = function (email) {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Email de recuperação enviado!");
        })
        .catch((error) => {
            alert(error.message);
        });
}