let ww = $(window).width();

$('body').on('focus', '.input input', (e) => {
    $(e.currentTarget).parent().addClass('active');
});

// Custom scroll
document.querySelectorAll('.custom-scroll').forEach((el) => {
    new SimpleBar(el);
});

$('body').on('blur', '.input input', (e) => {
    $(e.currentTarget).parent().removeClass('active');
});

$('body').on('submit', '.header__search', (e) => {
    e.preventDefault();
    $(e.currentTarget).addClass('active');
});

$(document).click((event) => {
    if (
        !$(event.target).closest('.header__search').length &&
        !$(event.target).closest('.select__current').length &&
        !$(event.target).closest('.select__dropdown').length &&
        !$(event.target).closest('.header__dropdown').length &&
        !$(event.target).closest('.header__notification-wrap').length &&
        !$(event.target).closest('.header__notification-tip').length &&
        !$(event.target).closest('.header__toggle').length
    ) {
        $('.header__search').removeClass('active');
        $('.select').removeClass('active');
        $('.header__dropdown').removeClass('active');
        $('.header__notification-tip').removeClass('active');
    }
});

var sliderNav = new Swiper('.slider__nav', {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});
var sliderMain = new Swiper('.slider__main', {
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    thumbs: {
        swiper: sliderNav,
    },
});

$('body').on('click', '.toggle', (e) => {
    $(e.currentTarget).prev().slideDown(300);
    $(e.currentTarget).remove();
});

$('body').on('click', '.password .icon:not(.active)', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('input[type="password"]').addClass('temp-password').attr('type', 'text');
});

$('body').on('click', '.password .icon.active', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('input.temp-password').removeClass('temp-password').attr('type', 'password');
});

let masks = document.querySelectorAll('.phone-mask');

masks.forEach((el) => {
    IMask(el, { mask: '(000) 000 00 00' });
});

let phones = document.querySelectorAll('.phone-input');

phones.forEach((el) => {
    IMask(el, { mask: '+{7} (000) 000 00 00' });
});

$('body').on('click', '.phone__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('.phone__dropdown').toggleClass('active');
});

// tabs .bar animation

if ($('.tabs .active').length > 0) {
    $('.tabs .bar')
        .stop()
        .animate({
            left: $('.tabs .active').offset().left - $('.tabs').offset().left,
            width: $('.tabs .active').outerWidth(),
        });
}

$('body').on('mouseenter', '.tabs a', (e) => {
    $('.tabs .bar')
        .stop()
        .animate({ left: $(e.currentTarget).offset().left - $('.tabs').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.tabs', (e) => {
    if ($('.tabs .active').length > 0) {
        $('.tabs .bar')
            .stop()
            .animate({
                left: $('.tabs .active').offset().left - $('.tabs').offset().left,
                width: $('.tabs .active').outerWidth(),
            });
    } else {
        $('.tabs .bar').stop().animate({ left: 0, width: 0 });
    }
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $('.tab').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
    $('.news__list.three  .news__title').css('height', 'auto');
});

$('body').on('click', '.select.active .select__current', (e) => {
    $('.select').removeClass('active');
    $(e.currentTarget).parent().removeClass('active');
});

$('body').on('click', '.select__dropdown .select__item', (e) => {
    $(e.currentTarget).parent().removeClass('active');
    $(e.currentTarget).closest('.select').find('.select__current').text($(e.currentTarget).text());
    $(e.currentTarget).closest('.select').removeClass('active');
});

$('body').on('click', '.select:not(.active) .select__current', (e) => {
    $('.select').removeClass('active');
    $(e.currentTarget).parent().addClass('active');
});

$('body').on('click', '.counter__plus', (e) => {
    $(e.currentTarget)
        .parent()
        .find('.counter__num')
        .text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) + 1);
});

$('body').on('click', '.counter__minus', (e) => {
    if (parseInt($(e.currentTarget).parent().find('.counter__num').text()) > 1) {
        $(e.currentTarget)
            .parent()
            .find('.counter__num')
            .text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) - 1);
    }
});

// $('.countdown .timer').countdown('2022/01/01', function (event) {
//     $(this).text(event.strftime('%D : %H : %M : %S'));
// });

$('body').on('click', '.header__toggle', (e) => {
    $('.header__dropdown').toggleClass('active');
});

$('body').on('input', '.login__flex .phone__body input', (e) => {
    if ($(e.currentTarget).val().length >= 18) {
        $('.login__flex .btn.width').addClass('show');
    }

    if ($(e.currentTarget).val().length === 0) {
        $('.login__flex .btn.width').removeClass('show');
    }
});

$('body').on('click', '.header__notification-wrap', (e) => {
    $('.header__notification-tip').toggleClass('active');
});

if ($('.datepicker').length > 0) {
    $('#dateFrom')
        .dateRangePicker({
            language: 'ru',
            inline: true,
            hoveringTooltip: false,
            container: '.datepicker__main',
            startOfWeek: 'monday',
            getValue: function () {
                if ($('#dateFrom').val() && $('#dateTo').val()) return $('#dateFrom').val() + ' to ' + $('#dateTo').val();
                else return '';
            },
            setValue: function (s, s1, s2) {
                $('#dateFrom').val(s1);
                $('#dateTo').val(s2);
            },
        })
        .bind('datepicker-open', function () {
            $('.date-picker-wrapper').css('left', $('.datepicker').offset().left);
        });

    $('#dateTo').dateRangePicker({
        language: 'ru',
        inline: true,
        hoveringTooltip: false,
        container: '.datepicker__main',
        startOfWeek: 'monday',
        getValue: function () {
            if ($('#dateFrom').val() && $('#dateTo').val()) return $('#dateFrom').val() + ' to ' + $('#dateTo').val();
            else return '';
        },
        setValue: function (s, s1, s2) {
            $('#dateFrom').val(s1);
            $('#dateTo').val(s2);
        },
    });
}

let sameHeight = (item, element, count) => {
    let titleHeight = 0;
    let items = [];

    for (let i = 1; i < $(item).length + 1; i++) {
        let $step = $(item).eq(i - 1);

        if (i !== 0 && i % count === 0) {
            if ($step.find(element).height() > titleHeight) {
                titleHeight = $step.find(element).height();
            }

            items.push(i - 1);

            for (let j = 0; j < items.length; j++) {
                $(item).eq(items[j]).find(element).height(titleHeight);
            }

            items = [];
            titleHeight = 0;
        } else {
            items.push(i - 1);

            if ($step.find(element).height() > titleHeight) {
                titleHeight = $step.find(element).height();
            }

            for (let j = 0; j < items.length; j++) {
                $(item).eq(items[j]).find(element).height(titleHeight);
            }
        }
    }
};

let resetHeight = (item, element) => {
    $(item).find(element).css('height', 'auto');
};

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.backdrop').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.menu-trigger', (e) => {
    $('.mobile-sidebar.left').toggleClass('active');
    $('.backdrop').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.filter-trigger', (e) => {
    $('.mobile-sidebar.right').toggleClass('active');
    $('.backdrop').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');
    $('html, body').toggleClass('overflow');
    $('.backdrop').addClass('zindex');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.menu').removeClass('active');
    $('.mobile-sidebar').removeClass('active');
    $('html, body').removeClass('overflow');
    $('.modal').find('svg').removeClass('animate');
    $('html, body').removeClass('overflow');
    $('.backdrop').removeClass('zindex');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.mobile-sidebar .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

sameHeight('.grid.three .article', '.article__title', 3);
sameHeight('.grid.three .swiper-slide', '.item__title');

var swiperItemThree = Swiper;
var sidebarExperts = Swiper;
var sidebarVacancy = Swiper;
var swiperVacancy = Swiper;
var sidebarTests = Swiper;
var swiperBooksSix = Swiper;
var swiperBooksFive = Swiper;
var swiperRubricThree = Swiper;
var swiperStock = Swiper;

let initTablet1024 = () => {
    if (ww <= 1279 && !$('body').hasClass('s-1024')) {
        $('body').addClass('s-1024');

        sameHeight('.swiper-item .swiper-slide', '.tags');
    } else if (ww >= 1280 && $('body').hasClass('s-1024')) {
        $('body').removeClass('s-1024');
    }

    if (ww <= 1279) {
        if ($('body').hasClass('s-768') || $('body').hasClass('s-1024')) {
            if ($('.mobile-sidebar.right').length === 0) {
                $('body').append('<div class="mobile-sidebar right"><div class="close"></div></div>');

                if ($('.sidebar.right').length > 1) {
                    for (let i = 0; i < $('.sidebar.right').length; i++) {
                        $(`.sidebar.right:nth-child(${i})`).appendTo('.mobile-sidebar.right');
                    }
                } else {
                    $('.sidebar.right').appendTo('.mobile-sidebar.right');
                }
            }

            let sizeExperts1024 = $('.sidebar-experts .swiper-slide').length > 2 ? 2.8 : 2;
            let sizeVacancy1024 = $('.sidebar-vacancy .swiper-slide').length > 2 ? 2.8 : 2;
            let sizeTests1024 = $('.sidebar-tests .swiper-slide').length > 2 ? 2.8 : 2;
            let sizeTests768 = $('.sidebar-tests .swiper-slide').length > 2 ? 2.3 : 2;

            sidebarExperts = new Swiper('.sidebar-experts', {
                spaceBetween: 10,
                slidesPerView: 1.1,
                breakpoints: {
                    768: {
                        slidesPerView: 2.1,
                    },
                    1024: {
                        slidesPerView: sizeExperts1024,
                    },
                },
            });

            sidebarVacancy = new Swiper('.sidebar-vacancy', {
                spaceBetween: 10,
                slidesPerView: 1.05,
                breakpoints: {
                    768: {
                        slidesPerView: sizeVacancy1024,
                    },
                },
            });

            sidebarTests = new Swiper('.sidebar-tests', {
                spaceBetween: 10,
                slidesPerView: 1.1,
                breakpoints: {
                    768: {
                        slidesPerView: sizeTests768,
                    },
                    1024: {
                        slidesPerView: sizeTests1024,
                    },
                },
            });

            swiperBooksSix = new Swiper('.swiper-books.six', {
                spaceBetween: 10,
                slidesPerView: 1.5,
                breakpoints: {
                    768: {
                        slidesPerView: 3.3,
                    },
                    1024: {
                        slidesPerView: 4.8,
                    },
                },
            });

            swiperBooksFive = new Swiper('.swiper-books.five', {
                spaceBetween: 10,
                slidesPerView: 1.3,
                breakpoints: {
                    768: {
                        slidesPerView: 2.8,
                    },
                },
            });
        } else {
            try {
                sidebarExperts.destroy();
                sidebarVacancy.destroy();
                sidebarTests.destroy();
                swiperBooksSix.destroy();
                swiperBooksFive.destroy();
            } catch {}
        }
    } else {
    }
};

let initTablet768 = () => {
    if (ww >= 768 && ww <= 1023 && !$('body').hasClass('s-768')) {
        $('body').removeClass('s-1024');
        $('body').addClass('s-768');

        sameHeight('.grid.two .item', '.item__title', 2);
        resetHeight('.grid.three .article', '.article__title');
        sameHeight('.grid.three .article', '.article__title', 2);
        sameHeight('.sidebar-vacancy .swiper-slide', '.vacancy__title');
    } else if (ww >= 1024 && $('body').hasClass('s-768')) {
        $('body').removeClass('s-768');
        $('.header .container').append($('.header__login'));
        $('.submenu .container').prepend($('.submenu__menu')).prepend($('.submenu__main'));
    }

    if (ww <= 1023) {
        if ($('body').hasClass('s-768') || $('body').hasClass('s-320')) {
            $('.menu').append($('.submenu__main')).append($('.submenu__menu')).append($('.header__login'));

            if ($('.mobile-sidebar.left').length === 0) {
                $('body').append('<div class="mobile-sidebar left"><div class="close"></div></div>');

                if ($('.sidebar.left').length > 1) {
                    for (let i = 0; i < $('.sidebar.left').length; i++) {
                        $(`.sidebar.left:nth-child(${i})`).appendTo('.mobile-sidebar.left');
                    }
                } else {
                    $('.sidebar.left').appendTo('.mobile-sidebar.left');
                }
            }

            swiperItemThree = new Swiper('.swiper-item.three', {
                spaceBetween: 10,
                slidesPerView: 1.1,
                breakpoints: {
                    768: {
                        slidesPerView: 2.1,
                    },
                },
            });

            swiperRubricThree = new Swiper('.swiper-rubric.three', {
                spaceBetween: 10,
                slidesPerView: 1.1,
                breakpoints: {
                    768: {
                        slidesPerView: 2.1,
                    },
                },
            });

            resetHeight('.swiper-item .swiper-slide', '.tags');
            sameHeight('.swiper-item .swiper-slide', '.tags');
        }
    } else {
        try {
            swiperItemThree.destroy();
            swiperRubricThree.destroy();
        } catch {}
    }
};

let initPhone = () => {
    if (ww >= 320 && ww <= 767 && !$('body').hasClass('s-320')) {
        $('body').removeClass('s-1024');
        $('body').removeClass('s-768');
        $('body').addClass('s-320');

        swiperVacancy = new Swiper('.swiper-vacancy', {
            spaceBetween: 10,
            slidesPerView: 1.1,
        });

        swiperStock = new Swiper('.swiper-stock', {
            spaceBetween: 10,
            slidesPerView: 1.3,
        });

        resetHeight('.grid.three .article', '.article__title');
        sameHeight('.sidebar-vacancy .swiper-slide', '.vacancy__title');
    } else if (ww >= 768 && $('body').hasClass('s-320')) {
        $('body').removeClass('s-320');

        try {
            swiperVacancy.destroy();
        } catch {}
    }
};

initTablet1024();
initPhone();
initTablet768();

$(window).on('resize', () => {
    ww = $(window).width();

    initTablet1024();
    initPhone();
    initTablet768();
});

$('.like-parent').on('click ', function () {
    $(this).find('.like').toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$('.like').on('animationend', function () {
    $(this).toggleClass('is_animating');
});

// $('body').on('mouseenter', '.stars.rating g', (e) => {
//     $(e.currentTarget).closest('.stars.rating').find('g').removeClass('active');

//     for (let i = 1; i <= $(e.currentTarget).attr('data-star'); i++) {
//         $(e.currentTarget).closest('.stars.rating').find(`g[data-star="${i}"]`).addClass('active');
//     }
// });

// $('body').on('click', '.stars.rating g', (e) => {
//     $(e.currentTarget).closest('.stars.rating').attr('data-count', $(e.currentTarget).attr('data-star'));
//     $(e.currentTarget).closest('.stars.rating').find('g').removeClass('active');

//     for (let i = 1; i <= $(e.currentTarget).attr('data-star'); i++) {
//         $(e.currentTarget).closest('.rating').find(`g[data-star="${i}"]`).addClass('active');
//     }
// });

// $('body').on('mouseleave', '.stars.rating', (e) => {
//     $(e.currentTarget).find('g').removeClass('active');
//     for (let i = 1; i <= $(e.currentTarget).attr('data-count'); i++) {
//         $(e.currentTarget).find(`g[data-star="${i}"]`).addClass('active');
//     }
// });

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            console.log('Async: Copying to clipboard was successful!');
        },
        function (err) {
            console.error('Async: Could not copy text: ', err);
        }
    );
}

$('body').on('click', '.copy-btn', (e) => {
    copyTextToClipboard($(e.currentTarget).parent().find('.copy-text').text());
});
