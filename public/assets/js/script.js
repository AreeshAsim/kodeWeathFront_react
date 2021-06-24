$(document).ready(function () {
    $('body').on('click', '.toggleMenu', function () {
        $('.sideBar').toggleClass('closed');
        $('.pageCrums, .pageWrapper').toggleClass('sideBarClosed');
    });
    $('body').on('click', '.menuListing .navItem', function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest('.hasChild').find('.subMenu').slideUp();
        }
        else {
            $('.navItem').removeClass('active')
            $('.navItem>a').removeClass('active');
            $('.navItem').closest('.hasChild').find('.subMenu').slideUp();

            $(this).addClass('active');
            $(this).find('a').first().removeClass('active');
            $(this).closest('.hasChild').find('.subMenu').slideDown();
        };
    });

    $('body').on('click', '.toogleCard', function () {
        $(this).toggleClass('open');
        $(this).closest('.contentCard').find('.cardBody').slideToggle();
    });
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $('.topBar').addClass('stickTop');
        }
        else {
            $('.topBar').removeClass('stickTop');
        }
    };
})