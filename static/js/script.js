
let selecionado = document.querySelector('#selecionado')
let horarioSelecionado = null
let situacaoSelecionada = null

let btnAgendar = document.querySelector('#buttonAgendar')
btnAgendar.addEventListener('click', agendar)

let linhas = document.querySelectorAll('tr[id]')

linhas.forEach(function(linha) {
    linha.addEventListener('click',clicar)

})


function clicar(evento) {
    let linha = evento.currentTarget

    horarioSelecionado = linha.querySelectorAll('td')[0].innerText
    situacaoSelecionada = linha.querySelectorAll('td')[1]


    if (situacaoSelecionada.innerText == 'Livre') {

        selecionado.innerHTML = `<p>Horário escolhido: ${horarioSelecionado}</p>`
    } else {
        selecionado.innerHTML = `<p>Horário escolhido: Já está ocupado</p>`
    }

}

// Evento 2 confirmar Agendamento


function agendar() {
    if (horarioSelecionado == null) {
        alert('[ERRO]: Por favor selecione um horário para agendar consulta!')
    } else {
        if (situacaoSelecionada.innerText == 'Livre') {
            situacaoSelecionada.innerText = 'Ocupado'
            selecionado.innerHTML = '<p>Horário escolhido: </p>'
        } else {
            alert('[ERRO]: O horário escolhido já está ocupado!')
        }
    }
}
