document.getElementById("formulario-reserva").onsubmit = fazerReserva

// Função para fazer reserva
function fazerReserva(event) {
    const idCampos = ['campo-numero-quarto', 'campo-nome', 'campo-CPF', 'campo-inicio-reserva', 'campo-termino-reserva']
    const valorCampos = idCampos.map(verificarCampoPreenchido).filter(Boolean)
    if (valorCampos.length === idCampos.length) {
        const reserva = {
            "numeroQuarto": parseInt(valorCampos[0]),
            "nome": valorCampos[1],
            "cpf": valorCampos[2],
            "inicioReserva": valorCampos[3],
            "terminoReserva": valorCampos[4]
        }
        fetch('http://localhost:3000/reservas', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reserva)
        })
    } else {
        event.preventDefault()
    }
}
function verificarCampoPreenchido(idCampo) {
    const elemento = document.getElementById(idCampo)
    const valorElemento = elemento.value
    const errorCampoSpan = document.getElementById(idCampo.replace('campo', 'error'))
    if (valorElemento) {
        errorCampoSpan.hidden = true
        return valorElemento
    }
    errorCampoSpan.hidden = false
    errorCampoSpan.textContent = 'Este campo é obrigatório!'
    return false

}