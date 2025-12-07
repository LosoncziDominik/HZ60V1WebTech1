$(document).ready(function () {

    $("#szoveg").on("click", function () {
        $("#doboz").append("<br><strong>Programtervező informatikus!</strong>");
    });

    $("#gomb").on("click", function () {
        $("#doboz").append('<br><button style="margin-top:10px;">PTI MI Gomb-ot!</button>');
    });

    $("#ujgomb").click(function () {
        $(".forras").after('<button style="margin:10px 0; padding:10px; font-size:14px;">ME GEIK-PTI</button>');
    });

    $("#fejlec").on("click", function () {
        if ($("h1").length === 0) {
            $("body").prepend('<h1 style="color:black; text-align:left;">jQuery feladat</h1>');
        }
    });

    $("#alcim").on("click", function () {
        if ($("h1").next("h2").length === 0) {
            $("h1").after('<h2 style="text-align:left; color:black;">HTML metódusok</h2>');
        }
    });

    $("#urlapfej").click(function () {

        $("form").before('<h2 style="color:black; margin:30px 0 10px; font-size:22px;">ŰRLAP-HZ60V1</h2>');
    });

});