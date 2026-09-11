
let selecionado = document.querySelector('#selecionado')
let horarioSelecionado = null

let btnAgendar = document.querySelector('buttonAgendar')

let linhas = document.querySelectorAll('tr[id]')

linhas.forEach(function(linha) {
    linha.addEventListener('click',clicar)
})


function clicar(evento) {
    let linha = evento.currentTarget
    horarioSelecionado = linha.querySelector('td').innerText
    let situacao = linha.querySelector('td').innerText[1]
    
    if (situacao.innerText == 'Livre') {

        selecionado.innerText = `Horário escolhido: ${horarioSelecionado.innerText}`
    } else {

        situacao = 'Livre'

    }

}