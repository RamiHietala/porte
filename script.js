const menu = document.getElementById('menu');
const closeBtn = document.getElementById('closeBtn');
const modalMenu = document.getElementById('modalMenu');

menu.onclick = () => {
    modalMenu.classList.remove('inactive');
    modalMenu.classList.add("active");
}
closeBtn.onclick = () => {
    modalMenu.classList.remove('active');
    modalMenu.classList.add("inactive");
}