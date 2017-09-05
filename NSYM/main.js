$(document).on("scroll", function() {
    $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
});