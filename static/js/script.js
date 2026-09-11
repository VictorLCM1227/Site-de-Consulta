
let selecionado = document.querySelector('#selecionado')
let horarioSelecionado = null

let btnAgendar = document.querySelector('buttonAgendar')

let linhas = document.querySelectorAll('tr[id]')

linhas.forEach(function(linha) {
    linha.addEventListener('click',clicar)
})


function clicar(evento) {
    let linha = evento.currentTarget

    horarioSelecionado = linha.querySelectorAll('td')[0].innerText

    let situacao = linha.querySelectorAll('td')[1]
    
    if (situacao.innerText == 'Livre') {

        selecionado.innerText = `Horário escolhido: ${horarioSelecionado}`
    }

}