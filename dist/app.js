var message = "Help me, Obi-Wan Kenobi. You're my only hole! ";
console.log(message);
var episode = 4;
episode = "4";
console.log("This is episode" + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
//Any
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log(favoriteDroid);
//functions
var isenoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log(" Is " + distance + " perscs enough to beat Millennium Falcon? " + (isenoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
//FUNCITION 2
var call = function (name) { return console.log("Do you copy, " + name + "?\t"); };
call("R2");
//function 3
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5,1) = " + inc(5));
//CLASSES E INTERFACES
var Space = (function () {
    function Space() {
    }
    return Space;
}());
