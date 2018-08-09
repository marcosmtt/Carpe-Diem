function parallax() {
    const layer_1 = document.getElementById('layer_1');
    const layer_2 = document.getElementById('layer_2');
    const layer_3 = document.getElementById('layer_3');

    layer_1.style.top = -(window.pageYOffset / 0.3) + 'px';
    layer_2.style.top = -(window.pageYOffset / .9) + 'px';
    layer_3.style.top = -(window.pageYOffset / 2) + 'px';
}
window.addEventListener("scroll", parallax, false);