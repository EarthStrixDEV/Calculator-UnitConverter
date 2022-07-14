var celsius = document.getElementById('celsius')
var fahrenheit = document.getElementById('fahrenheit')
var kelvin = document.getElementById('kelvin')
var temperature_btn = document.getElementById("submit_temp")

var meter_second = document.getElementById('meters_second')
var kilometer_hour = document.getElementById('kilometers_hour')
var mile_hour = document.getElementById('miles_hour')
var velocity_btn = document.getElementById("submit_velocity");

var meters = document.getElementById('meters')
var kilometers = document.getElementById('kilometers')
var miles = document.getElementById('miles')
var distance_btn = document.getElementById("submit_distance");

var clear_value = document.getElementById("clear_value")

temperature_btn.addEventListener("click", () => {
    if (celsius.value != "") {
        let c = parseInt(celsius.value)
        let f = c * 9 / 5 + 32
        let k = c + 273.15
        fahrenheit.value = "Fahrenheit: " + f
        kelvin.value = "Kelvin: " + k
    } else if (fahrenheit.value != "") {
        let f = parseInt(fahrenheit.value)
        let c = (f - 32) * 5 / 9
        let k = (f + 459.67) * 5 / 9
        celsius.value = "Celsius: " + c
        kelvin.value = "Kelvin: " + k
    } else if (kelvin.value != "") {
        let k = parseInt(kelvin.value)
        let c = k - 273.15
        let f = k * 9 / 5 - 459.67
        celsius.value = "Celsius: " + c
        fahrenheit.value = "Fahrenheit: " + f
    } else {
        alert("Please enter a value")
    }
})

distance_btn.addEventListener("click", () => {
    if (meters.value != "") {
        let m = parseInt(meters.value)
        let km = m / 1000
        let mi = m / 1609.34
        kilometers.value = "Kilometers: " + km
        miles.value = "Miles: " + Math.floor(mi)
    } else if (kilometers.value != "") {
        let km = parseInt(kilometers.value)
        let m = km * 1000
        let mi = km / 1.60934
        meters.value = "Meters: " + m
        miles.value = "Miles: " + Math.floor(mi)
    } else if (miles.value != "") {
        let mi = parseInt(miles.value)
        let m = mi * 1609.34
        let km = mi * 1.60934
        meters.value = "Meters: " + m
        kilometers.value = "Kilometers: " + km
    } else {
        alert("Please enter a value")
    }
})

velocity_btn.addEventListener("click", () => {
    if (meter_second.value != "") {
        let m = parseInt(meter_second.value)
        let km = m * 3.6
        let mi = m * 2.23694
        kilometer_hour.value = "Kilometer/hour: " + km
        mile_hour.value = "Mile/hour: " + mi
    } else if (kilometer_hour.value != "") {
        let km = parseInt(kilometer_hour.value)
        let m = km / 3.6
        let mi = km / 1.60934
        meter_second.value = "Meter/second: " + m
        mile_hour.value = "Mile/hour: " + mi
    } else if (mile_hour.value != "") {
        let mi = parseInt(mile_hour.value)
        let m = mi / 2.23694
        let km = mi * 1.60934
        meter_second.value = "Meter/second: " + m
        kilometer_hour.value = "Kilometer/hour: " + km
    } else {
        alert("Please enter a value")
    }
})

clear_value.addEventListener("click", () => {
    celsius.value = ""
    fahrenheit.value = ""
    kelvin.value = ""
    meters.value = ""
    kilometers.value = ""
    miles.value = ""
    meter_second.value = ""
    kilometer_hour.value = ""
    mile_hour.value = ""
})