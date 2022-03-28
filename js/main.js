var header__button = document.getElementById('header__button')
header__button.addEventListener('click', function () {
    var nav = document.getElementById('nav');
    var buttonText = document.getElementById('header__button-text');
    var header = document.getElementById('header');
    if (nav.classList.contains('nav_active')) {
        nav.style.top = "100%";
        header.classList.remove('header__button_active')
        buttonText.innerHTML = "Меню"
        header__button.setAttribute('disabled', 'true')
        setTimeout(() => {
            header__button.removeAttribute('disabled');
        }, 1020);

        setTimeout(() => {
            nav.classList.remove('nav_active');
            nav.style.visibility = "hidden";
            nav.style.top = "-100%";
            nav.style.transition = "all 0s ease";
            setTimeout(() => {
                nav.removeAttribute('style');
            }, 20);
        }, 1000);
    } else {
        nav.classList.add('nav_active');
        header.classList.add('header__button_active');
        buttonText.innerHTML = "Закрыть";
        header__button.setAttribute('disabled', 'true')
        setTimeout(() => {
            header__button.removeAttribute('disabled');
        }, 1020);
    }
})
document.getElementById('theme').addEventListener('click', function () {
    body = document.body
    colW = getComputedStyle(body).getPropertyValue('--col-w')
    colB = getComputedStyle(body).getPropertyValue('--col-b')
    if (colW === '#000' || colB === '#fff') {
        body.style.setProperty('--col-w', '#fff');
        body.style.setProperty('--col-b', '#000');
        document.getElementById('theme__name').innerHTML = "ark"
        document.getElementById('theme__status').innerHTML = "D"
    } else {
        body.style.setProperty('--col-w', '#000');
        body.style.setProperty('--col-b', '#fff');
        document.getElementById('theme__name').innerHTML = "ight"
        document.getElementById('theme__status').innerHTML = "L"
    }
})