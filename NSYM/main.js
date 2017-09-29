$(document).ready(function() {

    $(document).on("scroll", function() {
        $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
    });

    $("nav span").hover(function() {
        $(this).children("div").toggleClass("active");
    });

    $("nav span").click(function() {
        $(this).children("a")[0].click();
    });
});