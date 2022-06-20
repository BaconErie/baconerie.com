let moreButton = document.getElementById('more-button');
let mobileMenu = document.getElementById('mobile-menu');
let moreImage = document.getElementById('more-button-image');
let lessImage = document.getElementById('less-button-image');

function moreButtonClicked() {
    if(mobileMenu.style.display != 'flex'){
        mobileMenu.style.display = 'flex';
        moreImage.style.display = 'none';
        lessImage.style.display = 'initial';
    }else{
        mobileMenu.style.display = 'none';
        moreImage.style.display = 'initial';
        lessImage.style.display = 'none';
    }
}

moreButton.addEventListener('click', moreButtonClicked)