import { usuarios } from "./usuarios.js"

document.getElementById("login-button").addEventListener("click", fazerLogin)

// Função para fazer login
function fazerLogin() {

    const email = document.getElementById('campo-email').value
    const senha = document.getElementById('campo-senha').value

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('error-email').hidden = true

    document.getElementById('campo-senha').classList.remove("input-error")
    document.getElementById('error-senha').hidden = true

    // Verificando se os dados são válidos
    if (email === "") {
        document.getElementById('campo-email').classList.add('input-error')
        document.getElementById('error-email').hidden = false
        document.getElementById('error-email').innerText = "Digite um email válido"


    } else if (senha.length < 5) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve ter no minimo 5 caracteres"
    }

    const emailSenha = `${email}:${senha}`
    const usuarioEncontrado = usuarios.has(emailSenha)
    if (usuarioEncontrado) {
       location.href = "home.html"
        // Redireciona para home.html
    } else {
       document.getElementById('error-autenticacao').hidden = false
       document.getElementById('error-autenticacao').innerText = "Usuário não encontrado."
        // usuário não foi encontrado
    }
}



