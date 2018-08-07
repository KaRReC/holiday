function start() {
    startTime();
    slider();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("calendar").innerHTML = today.toDateString();
    setTimeout("startTime()", 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var number = Math.floor(Math.random() * 5) + 1;

var timer1 = 0;
var timer2 = 0;

function showPhoto(PhotoNumber) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = PhotoNumber - 1;

    hide();
    setTimeout("slider()", 550);
}

function hide() {
    $("#slider").fadeOut(570);
}

function slider() {
    number++;
    if (number > 5) number = 1;

    var file = "<img src=\"../Img/img" + number + ".jpg\"/>";

    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(570);
    timer1 = setTimeout("slider()", 5000);
    timer2 = setTimeout("hide()", 4500);
}

$(document).ready(function() {
    $("#Input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#HolydayTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function() {

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp_max) + "<span>&#176;</span>";
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});
$(document).ready(function() {

    var lat = 41.89;
    var long = 12.49;
    weatherRome(lat, long);

    function weatherRome(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOMRome(data);
        });
    }

    function updateDOMRome(data) {
        var temp = Math.round(data.main.temp_max) + "<span>&#176;</span>";
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#tempRome').html(temp);
        $('#descRome').html(desc);
        $('#iconRome').attr('src', icon);
    }
});
$(document).ready(function() {

    var lat = 52.22;
    var long = 21.01;
    weatherWarsaw(lat, long);

    function weatherWarsaw(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOMWarsaw(data);
        });
    }

    function updateDOMWarsaw(data) {
        var temp = Math.round(data.main.temp_max) + "<span>&#176;</span>";
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#tempWarsaw').html(temp);
        $('#descWarsaw').html(desc);
        $('#iconWarsaw').attr('src', icon);
    }
});
$(document).ready(function() {

    var lat = 52.52;
    var long = 13.40;
    weatherBerlin(lat, long);

    function weatherBerlin(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOMBerlin(data);
        });
    }

    function updateDOMBerlin(data) {
        var temp = Math.round(data.main.temp_max) + "<span>&#176;</span>";
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#tempBerlin').html(temp);
        $('#descBerlin').html(desc);
        $('#iconBerlin').attr('src', icon);
    }
});
$(document).ready(function() {

    var lat = 40.73;
    var long = -73.93;
    weatherNewYork(lat, long);

    function weatherNewYork(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOMNewYork(data);
        });
    }

    function updateDOMNewYork(data) {
        var temp = Math.round(data.main.temp_max) + "<span>&#176;</span>";
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#tempNewYork').html(temp);
        $('#descNewYork').html(desc);
        $('#iconNewYork').attr('src', icon);
    }
});

function taxi(val) {
    var costs = Math.round((val * 2.20) * 100) / 100;
    costs = parseFloat(costs);

    document.getElementById('cost').innerHTML = "Costs: " + (costs + 4);
    document.getElementById('kilo').innerHTML = val;

    var rg = $("#Range").val();
    var vl = $("#kilo").val(rg);
    $("#Range").change(function() {
        var rg2 = $("#Range").val();
        $("#kilo").val(rg2);
    });
}
$(document).ready(function() {
    $("#kilo").on('keyup change', function() {
        var vl2 = $("#kilo").val();
        $("#Range").val(vl2);
    });
    $("#kilo").on('keyup change', function() {
        var costs2 = $("#kilo").val();
        costs2 = Math.round((costs2 * 2.20) * 100) / 100;
        costs2 = parseFloat(costs2);
        $("#cost").html("Costs: " + (costs2 + 4));
    });
});

function Calculate() {
    var rome = document.getElementById("RomeR").checked;
    var berlin = document.getElementById("BerlinR").checked;
    var warsaw = document.getElementById("WarsawR").checked;
    var newyork = document.getElementById("NewYorkR").checked;
    var allin = document.getElementById("all").checked;
    var onlybreak = document.getElementById("only").checked;
    var nonin = document.getElementById("non").checked;
    var plain = document.getElementById("plain").checked;
    var bus = document.getElementById("bus").checked;
    var owntr = document.getElementById("own").checked;
    var persons = document.getElementById("persons").value;

    var price = 0;

    if (rome == true) {

        price = 400;

        if (allin == true) {

            price += 100;

        } else if (onlybreak == true) {

            price += 30;

        } else {

            price = 400;

        }
        if (plain == true) {

            price += 150;

        } else if (bus == true) {

            price += 50;

        } else {

            price += 0;
        }
        document.getElementById("trip").innerHTML = "Total costs: " + (price * persons) + " &euro;";
    }
    if (berlin == true) {

        price = 300;

        if (allin == true) {

            price += 100;

        } else if (onlybreak == true) {

            price += 30;

        } else {

            price = 300;

        }
        if (plain == true) {

            price += 150;

        } else if (bus == true) {

            price += 50;

        } else {

            price += 0;
        }
        document.getElementById("trip").innerHTML = "Total costs: " + (price * persons) + " &euro;";
    }
    if (warsaw == true) {

        price = 200;

        if (allin == true) {

            price += 100;

        } else if (onlybreak == true) {

            price += 30;

        } else {

            price = 200;

        }
        if (plain == true) {

            price += 150;

        } else if (bus == true) {

            price += 50;

        } else {

            price += 0;
        }
        document.getElementById("trip").innerHTML = "Total costs: " + (price * persons) + " &euro;";
    }
    if (newyork == true) {

        price = 800;

        if (allin == true) {

            price += 100;

        } else if (onlybreak == true) {

            price += 30;

        } else {

            price = 800;

        }
        if (plain == true) {

            price += 150;

        }
        document.getElementById("trip").innerHTML = "Total costs: " + (price * persons) + " &euro;";
    }
}

function validate() {
    var text;
    var persons = document.getElementById("persons").value;

    if (isNaN(persons) || persons < 1 || persons > 10) {
        text = "<span id='notValid'> Not valid !!</span>";
        document.getElementById("pers").innerHTML = "<span id='notValid'> Number of persons is not valid !!</span>";
    } else {
        text = " OK !";
        document.getElementById("pers").innerHTML = "";
    }
    document.getElementById("valid").innerHTML = text;

    if ($("input[name='city']:checked").length == 0) {
        $("#dest").html("Choose your destenation !! ");
    } else {
        $("#dest").html("");
    }
    if ($("input[id='non']:checked").length == 1) {
        $("#ch").html(" You have chosen: Non inclusive");
    } else {
        $("#ch").html("");
    }
    if ($("input[id='own']:checked").length == 1) {
        $("#trans").html(" You have chosen: Own transport");
    } else {
        $("#trans").html("");
    }
}

function CalculateV() {
    Calculate();
    validate();
}

$(document).ready(function() {
    $("input[name='city']").change(function() {

        if ($(this).val() == "Disable") {
            $("#own").attr("disabled", true);
            $("#bus").attr("disabled", true);
            $("#plain").attr("checked", true);
            $(".dis").css("opacity", '.1');
        } else {
            $("#own").attr("disabled", false);
            $("#bus").attr("disabled", false);
            $("#plain").attr("checked", false);
            $(".dis").css("opacity", '1');
            $("#own").prop("checked", true);
        }
    });
});

function resetAll() {
    $("#dest").html("");
    $("#pers").html("");
    $("#valid").html(" 1 - 10");
    $("#trip").html("");
    $("#ch").html("");
    $("#trans").html("");
    $("input[name='city']").prop("checked", false);
    $("#persons").val("");
}
