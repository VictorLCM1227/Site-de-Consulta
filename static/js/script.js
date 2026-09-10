let horarios = document.querySelectorAll('td[id]')

horarios.forEach(function(horario) {

    horario.addEventListener('click', clicar)

})


function clicar(evento) {

    let horarioClicado = evento.target

    if (horarioClicado.innerText == 'Livre') {

        horarioClicado.innerText = 'Ocupado'

    } else {

        horarioClicado.innerText = 'Livre'

    }

}