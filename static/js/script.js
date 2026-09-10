//let horarios = document.querySelectorAll('tr[id]')
let selecionado = document.querySelector('#selecionado')
let horarioSelecionado = null
let linha = evento.target.parentElement

linha.addEventListener('click', clicar)



function clicar() {

    selecionado = linha.querySelector('td').innerText

    if (linha.querySelectorAll('td')[1].innerText == 'Livre') {

        horarioSelecionado = horarioClicado
        selecionado.innerHTML = `Horário escolhido: ${horarioSelecionado.innerText}`
        linha.querySelectorAll('td')[1].innerText = 'Ocupado'


    } else {

        linha.querySelectorAll('td')[1].innerText = 'Livre'

    }

}