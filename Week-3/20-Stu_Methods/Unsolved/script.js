var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";
var galaxy = [constellations + planets];
// WRITE YOUR CODE BELOW
constellations.push("Canis Major");
    console.log(constellations);
//.unshift pulls item front of string
var planetsSliced = planets.slice(0,5);
    console.log(planetsSliced);
// .pop() removes last from string

    console.log(galaxy);
//done right
var STAR = String(star).toUpperCase();
    console.log(STAR);
