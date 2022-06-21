
import $ from "jquery";
import "slick-carousel";

$(function () {
    $('.header__btn-menu').on('click', function () {
        $('.menu__list').toggleClass('menu--open');
    });
});