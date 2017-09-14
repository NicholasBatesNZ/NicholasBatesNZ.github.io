$(document).ready(function() {

    $(document).on("scroll", function() {
        $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
    });

    $("nav span").hover(function() {
        $(this).children("div").toggleClass("active");
    });
});