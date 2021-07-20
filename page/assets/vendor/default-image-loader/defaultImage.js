window.defaultImage         = '/assets/images/icon/default.svg';
window.defaultImageCover    = '/assets/images/default/cover.png';
window.defaultImageProfile  = '/assets/images/default/profile.jpeg';

window.defaultImgCover = function(image) {
    image.src = window.defaultImageCover;
}

window.defaultImgProfile = function(image) {
    image.src = window.defaultImageProfile;
    image.classList.add('bg-gray-200');
}
