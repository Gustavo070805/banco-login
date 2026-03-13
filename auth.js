function cadastrarUsuario(nome, email, senha) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.email === email);

    if (existe) {
        alert("Este email já está cadastrado!");
        return;
    }

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Conta criada com sucesso!");

    window.location.href = "index.html";

}



function loginUsuario(email, senha) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {

        alert("Login realizado!");

        window.location.href = "home.html";

    } else {

        alert("Email ou senha incorretos");

    }

}