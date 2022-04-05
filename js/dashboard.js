$(document).ready(function () {
    $(function () {
        const tabs = $('.dashboard-notifications__tabs-btn');
        const items = $('.dashboard-notifications__item');

        tabs.on('click touch', function () {
            const id = $(this).attr('data-tab');
            if (id !== 'all') {
                tabs.removeClass('active');
                $(this).addClass('active');
                items.hide();
                $('.dashboard-notifications__item' + '.' + id).fadeIn(100);
            } else {
                tabs.removeClass('active');
                $(this).addClass('active');
                items.hide();
                items.fadeIn(100);
            }
        })

    });

    $('.dashboard-notifications__control-btn.mark-all-unread').click(function () {
        const notifications = $('.dashboard-notifications__item');
        const unreadTab = $('[data-tab="unread"]');

        notifications.removeClass('unread');

        if (unreadTab.hasClass('active')) {
            notifications.hide();
        }
    });
});


