$(document).ready(function () {

    $('.sidebar-btn').click(function () {
        console.log('click')
        if ($('.sidebar').hasClass('expanded')) {
            $('.sidebar').removeClass('expanded').addClass('collapsed')
            $('.sidebar-nav__item.with-sub-menu').removeClass('expanded').removeClass('collapsed')
        } else {
            $('.sidebar').removeClass('collapsed').addClass('expanded')
            $('.sidebar-nav__item.with-sub-menu').addClass('collapsed')
        }
    })

    $('.sidebar-nav__item.with-sub-menu > a').click(function (e) {
        e.preventDefault()
        const parent = $(this).parent()
        $('.sidebar-nav__item.with-sub-menu').not(parent).removeClass('expanded').addClass('collapsed')
        parent.toggleClass('expanded').toggleClass('collapsed')
    })

})