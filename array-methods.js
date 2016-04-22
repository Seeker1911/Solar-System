var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(element, index) {
    // statements
    el.innerHTML += element + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var newPlanets = planets.map(function (planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1) + " ";

});
	console.log("new Planets: ", newPlanets);
var capitalPlanets = document.getElementById("capitalPlanets");
capitalPlanets.innerHTML += newPlanets + " ";

// Use the filter method to create a new array that contains planets with the letter 'e'
var filterPlanets = newPlanets.filter(function (planet) {
	return planet.includes("e");
})
console.log("filter: ", filterPlanets);
var letterPlanets = document.getElementById("letterPlanets");
letterPlanets.innerHTML += filterPlanets + " ";

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second",
    "mouse", "gets", "the", "cheese"
];

var newWords = words.reduce(function (previousValue, currentValue, index, array) {
	 /* body... */ 
	 return  previousValue + " " + currentValue;
})
console.log("words", newWords);
var newSentence = document.getElementById("newSentence");
newSentence.innerHTML += newWords;
