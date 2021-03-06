$(document).ready(function() {

    $(document).on("scroll", function() {
        $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
    });

    $("nav.desktop .dropdown").hover(function() {
        $(this).children("div").toggleClass("active");
    });
    $("nav.mobile ul .dropdown").click(function() {
        $thisDiv = $(this).children("div");
        $("nav.mobile ul .dropdown div").each(function() {
            if ($(this).css("display") != "none" || $(this).is($thisDiv)) {
                $(this).parent("li").toggleClass("active");
                $(this).slideToggle();
            }
        });
    });
    $("nav.desktop .link, nav.mobile ul .link").click(function() {
        $(this).children("a")[0].click();
    });
    $("header #hamburger").click(function() {
        $("nav.mobile").slideToggle();
    });
    $("body").click(function(event) {
        if (!($(event.target).is(".mobile") || $(event.target).parents(".mobile").length > 0) && $("nav.mobile").css("display") != "none") {
            $("nav.mobile").slideUp();
        }
    });

    var $images = $("#slideshow").children("img");
    var destination = 0;
    createSlideDots();
    function createSlideDots() {
        $("#slideshow .dot").remove();
        var emsNeeded = 2 * $images.length - 1;
        var emToPx = parseFloat($("body").css("font-size"));
        var pxsSpareEachSide = ($(document).width() - emToPx * emsNeeded) / 2;

        $images.each(function(index) {
            $("#slideshow").append("<span class='dot' id='" + index + "'></span>");
            $(".dot#" + index).css("left", pxsSpareEachSide + emToPx * (index * 2));
        });
        $(".dot#0").addClass("active");

        $(".dot").click(function() {
            destination = $(this).attr("id");
            updateSlide();
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
    setInterval(function() {
        destination++;
        updateSlide();
    }, 5000);
    
    $(window).resize(onResize);
    function onResize() {
        if ($("nav.mobile").css("display") != "none") {
            $("nav.mobile").slideUp();
        }
        createSlideDots();
        sizeFacebook();
    }
    
    sizeFacebook();
    function sizeFacebook() {
        var fbWidth = Math.round($("#facebook").width() / 20 * 19);
        var fbHeight = Math.round($("#facebook").height() / 20 * 19);
        $("#facebook").html("<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMairangi-Bay-Tennis-Club-685812498418446&tabs=timeline&" +
        "width=" + fbWidth +"&height=" + fbHeight + "&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' " +
        "width='" + fbWidth + "' height='" + fbHeight + "' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>");
    }
});