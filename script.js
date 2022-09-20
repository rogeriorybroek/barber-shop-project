const links = document.querySelectorAll('.nav a')
const form = document.querySelector('#form')

links.forEach(link => {
    link.onclick = scrollToIdOnClick
})

function scrollToIdOnClick(e) {
    e.preventDefault()
    const element = e.target

    const id = element.getAttribute('href')
    console.log(id)

    const section = document.querySelector(id)
    console.log(section)
    const sectionOffSetTop = section.offsetTop

    window.scroll({
        top: sectionOffSetTop,
        behavior: "smooth"
    })
}

form.onsubmit = function(e) {
    e.preventDefault()
    let temErro = false

    const inputName = document.forms['form']['input-name']
    if(!inputName.value) {
        temErro = true
        const span = inputName.nextSibling.nextSibling
        span.innerText = 'Digite o seu nome'
    } else {
        const span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    const inputEmail = document.forms['form']['input-email']
    if(!inputEmail.value) {
        temErro = true
        const span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o seu e-mail'
    } else {
        const span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    const inputTel = document.forms['form']['input-tel']
    if(!inputTel.value) {
        temErro = true
        const span = inputTel.nextSibling.nextSibling
        span.innerText = 'Digite o seu telefone'
    } else {
        const span = inputTel.nextSibling.nextSibling
        span.innerText = ''
    }

    const select = document.forms['form']['input-select']
    if(!select.value) {
        temErro = true
        const span = select.nextSibling.nextSibling
        span.innerText = 'Selecione um serviço'
    } else {
        const span = select.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro) {
        form.submit()
    }
}