$(document).ready(function () {
    setTimeout(function () {
        $("#myButton").click();
    }, 100);
    $.each(cars, function (k, v) {
        var index = k;
        var ad = "images/" + v.type + "_roadblock.jpg";

        $("#myModal ul.ad-panel").append($("<li class='ad ad-" + index + "' href='#' data-ad=" + index + "><div class='ad-wrapper'><img src='" + ad + "'/></div><a class='red-ad-button'>Select</a> </li>"))
    })

    $('#myButton').click(function (e) {
        e.preventDefault();
        $('#myModal').reveal({
            closeonbackgroundclick: false
        });
    });

    $(".ad").live('click', function () {
        var index = $(this).attr('data-ad');
        setBanners(index);
        $(this).addClass('selected');
        $(".ad:not('.selected')").fadeOut('slow', function (e) {
            $(".ad.selected").find('img').animate({
                width: '150%',
                height: '150%'
            });
        });


        setTimeout(function () {
            $('#myModal').trigger('reveal:close');
        }, 2000)
    })

    var count = 15;
    var counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }
        if (count == 1) {
            $('#myModal').trigger('reveal:close');
        }
        $(".count-down").text(count);
    }


});
