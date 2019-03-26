var tempF = parseInt(document.getElementById("tempF").innerHTML);
var speed = parseInt(document.getElementById("windSpeed").innerHTML);

function windChill(temp2, speed2) {
    var s = Math.pow(speed2, 0.16);
    var f = (35.74 + (0.6215 * temp2)) - (35.75 * s) + ((0.4275 * temp2) * s);
    var chill = Math.round(f * 10) / 10;
    return chill;
}

document.getElementById("chill").innerHTML = "Wind Chill: " + windChill(tempF, speed) + "&#176;F";