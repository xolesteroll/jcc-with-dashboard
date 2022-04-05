$(document).ready(function () {

    function closeSidebar() {
        $('.sidebar').removeClass('expanded').addClass('collapsed');
    }

    function openSidebar() {
        $('.sidebar').removeClass('collapsed').addClass('expanded');
    }
    
    function closeSubMenus() {
        $('.sidebar-nav__item.with-sub-menu').removeClass('expanded').addClass('collapsed');
    }


    $('.sidebar-btn').click(function () {
        if ($('.sidebar').hasClass('expanded')) {
            closeSidebar();
            closeSubMenus();
        } else {
            closeSubMenus();
            openSidebar();
        }
    });

    $('.sidebar-nav__item.with-sub-menu > a').click(function (e) {
        e.preventDefault();
        const parent = $(this).parent();
        $('.sidebar-nav__item.with-sub-menu').not(parent).removeClass('expanded').addClass('collapsed');
        parent.toggleClass('expanded').toggleClass('collapsed');

    });


    $(document).click(function (e) {
        if ($(e.target).closest('.sidebar').length === 0) {
            closeSubMenus();
            closeSidebar();
        }
    });
});