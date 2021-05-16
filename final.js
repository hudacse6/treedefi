var $backToTop = $(".back-to-top");
$backToTop.hide();

$(window).on('scroll', function () {
    console.log($(this).scrollTop())
    if ($(this).scrollTop() > 100) {
        $backToTop.show('slow');
    } else {
        $backToTop.hide();
    }
});

$backToTop.on('click', function (e) {
    console.log(e)
    $("html, body").animate({scrollTop: 0}, 500);
});
