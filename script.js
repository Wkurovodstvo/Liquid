let images = imgs.getElementsByTagName('img');
let dots = document.querySelectorAll('input[name="point"]');

let i = 0;
slider.style.backgroundImage = `url('${images[i].src}')`;

next.onclick = () => {
    if (i == 4) {
        i = -1;
    }
    slider.style.backgroundImage = `url('${images[++i].src}')`;
    dots[i].checked = true;
};

prev.onclick = () => {
    if (i == 0) {
        i = 5;
    }
    slider.style.backgroundImage = `url('${images[--i].src}')`;
    dots[i].checked = true;
};

dot1.onclick = () => {
    i = 0;
    slider.style.backgroundImage = `url('${images[i].src}')`;
};
dot2.onclick = () => {
    i = 1;
    slider.style.backgroundImage = `url('${images[i].src}')`;
};
dot3.onclick = () => {
    i = 2;
    slider.style.backgroundImage = `url('${images[i].src}')`;
};
dot4.onclick = () => {
    i = 3;
    slider.style.backgroundImage = `url('${images[i].src}')`;
};
dot5.onclick = () => {
    i = 4;
    slider.style.backgroundImage = `url('${images[i].src}')`;
};
