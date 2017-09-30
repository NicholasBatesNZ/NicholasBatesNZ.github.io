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

    var $images = $("#slideshow").children("img");
    var destination = 0;
    createSlideDots();
    function createSlideDots() {
        var emsNeeded = 2 * $images.length - 1;
        var emToPx = parseFloat($("body").css("font-size"));
        var pxsSpareEachSide = ($(document).width() - emToPx * emsNeeded) / 2;

        $images.each(function(index) {
            $("#slideshow").append("<span class='dot' id='" + index + "'></span>");
            $(".dot#" + index).css("left", pxsSpareEachSide + emToPx * (index * 2));
            $(".dot#0").addClass("active");
        });
    }
    function updateSlide() {
        
        if (destination > $images.length-1) {
            destination = 0;
        }
        if (destination < 0) {
            destination = $images.length-1;
        }
        
        $images.each(function(index) {
            if (index == destination) {
                $(".dot#" + index).addClass("active");
                $(this).hide().fadeIn(250, function() {
                    $(this).css("z-index", "1");
                });
            }
            else {
                $(".dot#" + index).removeClass("active");
                $(this).fadeOut(250, function() {
                    $(this).css("z-index", "-1").show();
                });
            }
        });
    }
    $("#left.arrow").click(function() {
        destination--;
        updateSlide();
    });
    $("#right.arrow").click(function() {
        destination++;
        updateSlide();
    });
    $(".dot").click(function() {
        destination = $(this).attr("id");
        updateSlide();
    });
    setInterval(function() {
        destination++;
        updateSlide();
    }, 5000);
});