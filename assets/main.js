function change() {
    var fileLocation, mainImage, heading;

    if (document.getElementById("home").checked) {
        fileLocation = "home/home.html";
        mainImage = "home/hobbiton.jpg";
        heading = "Blog";
    }
    else if (document.getElementById("projects").checked) {
        fileLocation = "projects/projects.html";
        mainImage = "projects/coding.jpg";
        heading = "Projects";
    }
    else if (document.getElementById("contact").checked) {
        fileLocation = "contact/contact.html";
        mainImage = "contact/rosie.jpg";
        heading = "Find Me";
    }
    else {
        fileLocation = "error/oobe.html";
        mainImage = "error/Me.jpg";
        heading = "Error";
    }
    $("#mainImg").attr("src", mainImage)
    $("#dynamic").load(fileLocation);
    document.getElementById("heading").innerHTML = heading;
}

function sizeHeader() {
    $("#headingDiv").css("top", document.getElementById("nav").getBoundingClientRect().bottom);
    $("#headingDiv").css("bottom", window.innerHeight - document.getElementById("dynamic").getBoundingClientRect().top);

    if ($(this).scrollTop() > document.getElementById("headingDiv").getBoundingClientRect().bottom * 2) {
        $("#heading").fadeOut(200);
    }
    else {
        $("#heading").fadeIn(200);
    }
}

function init() {
    change();
    sizeHeader();
}

$(window).scroll(function() {
    sizeHeader();
});

window.onload = init();