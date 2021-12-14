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
    slidesPerView: 3,
    watchSlidesProgress: true,
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
    $(e.currentTarget).parent().find('input').attr('type', 'text');
});

$('body').on('click', '.password .icon.active', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('input').attr('type', 'password');
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

$('body').on('click', '.select:not(.active) .select__current', (e) => {
    $('.select').removeClass('active');
    $(e.currentTarget).parent().addClass('active');
});

$('.countdown .timer').countdown('2022/01/01', function (event) {
    $(this).text(event.strftime('%D : %H : %M : %S'));
});

$('body').on('click', '.header__toggle', (e) => {
    $('.header__dropdown').toggleClass('active');
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
