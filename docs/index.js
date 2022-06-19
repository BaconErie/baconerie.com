let moreButton = document.getElementById('more-button');
let mobileMenu = document.getElementById('mobile-menu');

function moreButtonClicked() {
    mobileMenu.style.display = 'flex';
}

moreButton.addEventListener('click', moreButtonClicked)