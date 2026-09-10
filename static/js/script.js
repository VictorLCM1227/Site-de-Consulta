
let selecionado = document.querySelector('#selecionado')
let horarioSelecionado = null
let linha = evento.target.parentElement
let btnAgendar = document.querySelector('buttonAgendar')

linha.addEventListener('click', clicar)
horarioSelecionado = linha.querySelector('td').innerText[0]
situacao = linha.querySelector('td').innerText[1]


function clicar() {

    

    if (situacao == 'Livre') {

        selecionado.innerText = `Horário escolhido: ${horarioSelecionado.innerText}`
        situacao = 'Ocupado'


    } else {

        situacao = 'Livre'

    }

}