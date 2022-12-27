const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach((panel) => {
    panel.addEventListener('click',()=> {
        removepic()
        panel.classList.add('active')
    })
} )

function removepic() {
    panels.forEach((panels) => {
        panels.classList.remove('active')
    })
    
}