"use strict"


;(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.our-work-header__arrow_left'),
        nextArrow: $('.our-work-header__arrow_right'),
    });
})();


;(function () {
    let arrowButtons = document.querySelectorAll('.arrow');
    for (let elem of arrowButtons) {
        elem.addEventListener('click', function click() {
            this.classList.add('animation-click');
            setTimeout(() => this.classList.remove('animation-click')
                , 500);
        });

    }
})();

/*Беругер Меню*/
;(function () {
    let buttonOpen = document.querySelector('.navigation-burger__btn')
    let windowMenu = document.querySelector('.navigation-burger__nav')
    let flag = true
    buttonOpen.addEventListener('click', function open() {
        this.classList.toggle('burger-close')
        windowMenu.classList.toggle('navigation-burger__nav_close')
        flag = !flag
        if (flag) {
            windowMenu.addEventListener('transitionend', function () {
                // this.style.display = 'none'
            })
        }
    })

    //Автозакрытие, после нажатия на ссылку с id
    // for (let elem of navLinkElement) {
    //     elem.addEventListener('click', function () {
    //         links.style.transform = 'translateX(1000px)';
    //         bgLinks.style.transform = 'translateX(1000px)';
    //         // this.style.backgroundColor = '#477942'
    //         btnOpenMenu.addEventListener('click', openMenu)
    //         btnOpenMenu.classList.remove('burger-close');
    //     });
    // }
})();
