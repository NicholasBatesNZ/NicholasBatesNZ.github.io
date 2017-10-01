$(document).ready(function() {

    $(document).on("scroll", function() {
        $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
    });

    $("nav.desktop .dropdown").hover(function() {
        $(this).children("div").toggleClass("active");
    });
    $("nav.mobile ul .dropdown").click(function() {
        $(this).children("div").slideToggle();
    });
    $("nav.desktop .link, nav.mobile ul .link").click(function() {
        $(this).children("a")[0].click();
    });
    $("header #hamburger").click(function() {
        $("nav.mobile").slideToggle();
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
        $("#slideshow").css("pointer-events", "none");
        
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
                    $("#slideshow").css("pointer-events", "initial");
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
    
    sizeFacebook();
    $(window).resize(sizeFacebook);
    function sizeFacebook() {
        $("#facebook").empty();
        var fbWidth = Math.round($("#facebook").width() / 20 * 19);
        var fbHeight = Math.round($("#facebook").height() / 20 * 19);
        $("#facebook").append("<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNorthShoreYouthMusic&tabs=timeline&" +
        "width=" + fbWidth +"&height=" + fbHeight + "&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' " +
        "width='" + fbWidth + "' height='" + fbHeight + "' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>");
    }
});