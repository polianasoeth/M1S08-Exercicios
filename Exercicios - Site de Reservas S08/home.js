document.querySelector('#logout').onclick = () => location.href = "login.html"

// Função para gerar a tabela
function buscarReservas() {
    fetch('http://localhost:3000/reservas', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => gerarTabela(res))
}
function gerarTabela(reservas) {

    const tbody = document.querySelector('tbody')

    reservas.forEach(item => {
        // Criação da tabela
        const linha = document.createElement('tr')
        Object.entries(item).filter(entry => entry[0] != "id").forEach(entry => {
            const td = document.createElement('td')
            td.textContent = entry[1]
            linha.appendChild(td)
        })
        // Criação do botão para deletar
        const td = document.createElement('td')
        const button = document.createElement('button')
        button.textContent = 'Deletar Reserva'
        button.onclick = function () { removerReserva(this, item.id) }
        td.appendChild(button)
        linha.appendChild(td)
        tbody.appendChild(linha);

    });

}
// Função para remover a reserva
function removerReserva(buttonClickEvent, idReserva) {
    fetch(`http://localhost:3000/reservas/${idReserva}`, {
        method: 'DELETE'
    })
    const indiceReserva = buttonClickEvent.parentNode.parentNode.rowIndex
    document.getElementsByTagName('tr').item(indiceReserva).remove()
}

buscarReservas()