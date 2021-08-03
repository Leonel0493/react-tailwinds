const btn = document.querySelector('button#mobile-menu-btn')
const menu = document.querySelector('#mobile-menu')

if (btn) {
    btn.addEventListener("click", () => {
        menu.classList.toggle('hidden')
    })
}