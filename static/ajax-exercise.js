"use strict";
// PART 1: SHOW A FORTUNE

function addFortune(results) {
    $("#fortune-text").html(results);
}

function showFortune(evt) {
    $.get('/fortune', addFortune);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER
function addWeather(results) {
    $("#weather-info").html(results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    // var url = "/weather?zipcode=" + $("#zipcode-field").val();
    var formInputs = {
        "zipcode": $("#zipcode-field").val()
    };

    $.get('/weather.json', formInputs, addWeather);
}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


