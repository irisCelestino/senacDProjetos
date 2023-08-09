// 
//import { form, diaNascimento, mesNascimento, anoNascimento } from './elements.js'
import { ValidData, fieldIsNaN, showAge } from './utils.js'

const form = document.querySelector('form')
const diaNascimento = document.querySelector('#dia')
const mesNascimento = document.querySelector('#mes')
const anoNascimento = document.querySelector('#ano')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    try {
        const getDate = new Date()

        const ano = getDate.getFullYear()
        const mes = getDate.getMonth() + 1
        const dia = getDate.getDay()

        const diaAniversario = parseInt(diaNascimento.value)
        const mesAniversario = parseInt(mesNascimento.value)
        const anoAniversario = parseInt(anoNascimento.value)

        let idadeAtual = ano - anoAniversario

        if (fieldIsNaN(idadeAtual, diaAniversario, mesAniversario)) {
            throw new Error(ValidData.isRequired())
        }

        if (diaAniversario < 1 || diaAniversario > 31 || mesAniversario < 1 || mesAniversario > 12 || idadeAtual > ano || anoAniversario > ano || anoAniversario < 1900) {
            throw new Error(ValidData.isValidAge())
        }

        if (mes < mesAniversario || (mes === mesAniversario && dia < diaAniversario)) {
            idadeAtual--;
        }

        showAge(idadeAtual, diaAniversario, mesAniversario)
    } catch (error) {
        return error.message
    }
})