/*função Dark mode*/
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})


/*Função navbar mobile*/
function openNav() {
  document.getElementById("my-menu-nav").style.width = "250px" ;
}

function closeNav() {
  document.getElementById("my-menu-nav").style.width = "0";
}