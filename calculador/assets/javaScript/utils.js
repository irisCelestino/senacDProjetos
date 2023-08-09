const mostrarAno = document.querySelector('.ano')
const mostrarDia = document.querySelector('.mes')
const mostrarMes = document.querySelector('.dia')

export const ValidData = {

    fieldRequired: document.querySelectorAll('.campo-obrigatorio'),
    validAge: document.querySelectorAll('.informacao-valida'),

    isValidAge() {
        ValidData.validAge.forEach(field => { return field.classList.remove('ocultar') })
    },

    isRequired() {
        ValidData.fieldRequired.forEach(field => field.classList.remove('ocultar'))
    }
}

export const fieldIsNaN = (idadeAtual, diaAniversario, mesAniversario) => {
    return isNaN(idadeAtual, diaAniversario, mesAniversario)
}

export const showAge = (idadeAtual, diaAniversario, mesAniversario) => {
    mostrarAno.innerHTML = idadeAtual
    mostrarDia.innerHTML = diaAniversario
    mostrarMes.innerHTML = mesAniversario
}