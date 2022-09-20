const links = document.querySelectorAll('.nav a')

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