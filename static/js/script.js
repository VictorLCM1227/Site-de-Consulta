let oito = document.querySelector('#oito')
oito.addEventListener('click', clicar)

function clicar() {
    if (oito.innerText == 'Livre') {
        oito.innerText = 'Ocupado'
    } else {
        oito.innerText = 'Livre'
    }
}