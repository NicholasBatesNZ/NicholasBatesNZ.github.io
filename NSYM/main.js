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


    var destination = 0;
    $("#left.arrow").click(function() {
        destination--;
        updateSlide();
    });
    $("#right.arrow").click(function() {
        destination++;
        updateSlide();
    });

    function updateSlide() {
        var $images = $("#slideshow").children("img");
        
        if (destination > $images.length-1) {
            destination = 0;
        }
        if (destination < 0) {
            destination = $images.length-1;
        }
        
        $images.each(function(index) {
            if (index == destination) {
                $(this).css("z-index", "1");
            }
            else {
                $(this).css("z-index", "-1");
            }
        });
    }
});