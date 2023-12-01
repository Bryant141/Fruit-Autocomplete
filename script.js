const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(inputString) {
  // Initialize an empty results array
  let results = [];

  // Convert inputString to lowercase for case-insensitive comparison
  const lowerInputString = inputString.toLowerCase();

  // Filter the fruit array based on the inputString
  results = fruit.filter((fruitName) => {
    // Convert the fruit name to lowercase for case-insensitive comparison
    const lowerFruitName = fruitName.toLowerCase();

    // Check if inputString appears anywhere in the fruit name
    return lowerFruitName.includes(lowerInputString);
  });
  console.log(results);
  return results;
}
// function search(inputString) {
// let results = [];
// 	// Use the inputArr to filter the fruit array
//  	results = fruit.filter(fruitName => {
//     // Check if any part of the inputArr matches any part of the fruit name
//     return inputArr.some(input => fruitName.toLowerCase().includes(input.toLowerCase()));
//   });
//   console.log(results);
//   return results;

// let results = [];
// const matches = (fruit, inputArr) => {
// 	return fruit.some(match => [...inputArr].includes(match));

// }
// results.push(matches);
// console.log(results);

//designed to filter the fruit list based on the inputs from the keyboard in the search box

//filters the fruit list above
//uses the event listener from keyup below
//adds to results list if the string entered matches ANY letters in fruit list. so (ap) will return (ap)ple and gr(ap)e
//the input for the function is whatever the user types. Where is that being stored?
//A: the inputs are stored in the event object, or e in search handler
//the output is the strings stored in results, which are those that match letters in fruit list. Results will contain fruit
// to compare what the user types to the fruit array, I need to convert the fruit array to a set,
//then use some to determine if any letters from input match the letters in fruit array

// let inputArr = [];
// function searchHandler(e) {
// 	// console.log(e.key);
// 	// inputArr.push(e.key);
// 	// console.log(inputArr);
// 	// console.log(inputArr.length);
// 	if (e.key === "Backspace") {
// 		// Remove the last item from the array if Backspace is pressed
// 		inputArr.pop();
// 	  } else if (/^[a-zA-Z]$/.test(e.key)) {
// 		// Handle letter key input by appending it to the array
// 		inputArr.push(e.key);
// 	  }
// 	  console.log("This is inputArr " + inputArr);
// 	  const userInputs = search(inputArr);
// 	  return inputArr;

// }

let inputString = ""; // Initialize an empty string

function searchHandler(e) {
  console.log("This is inputString: " + inputString);
  if (inputString === "") {
    // Clear the suggestions when the input is empty
    suggestions.innerHTML = "";
  } else {
    const userInputs = search(inputString); // Pass the string to the search function
    showSuggestions(userInputs);
    return inputString; // Return the updated string
  }
}

function showSuggestions(results) {
  suggestions.innerHTML = "";

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.textContent = result;
    suggestions.appendChild(listItem);
  });
}

function useSuggestion(e) {
  //the event listener is already written, it's using event delegation to wait for clicks to the entire UL to apply this function
  //need a way to access the innerHTML of the li being clicked on, and passing it to the input.
  //my guess is the text from the UL will need to replace the variable inputString
  const choice = e.target.innerHTML;
  input.value = choice;
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
// Add a single event listener to the `ul` element for both mouse enter and leave
//  suggestions.addEventListener('mouseenter', handleMouseEvents);
// //  suggestions.addEventListener('mouseleave', handleMouseEvents);
// suggestions.addEventListener('mouseenter', function (e) {
// 	if (e.target.tagName === 'LI') {
// 	  e.target.classList.add('highlight');
// 	}
//   });

//   suggestions.addEventListener('mouseleave', function (e) {
// 	if (e.target.tagName === 'LI') {
// 	  e.target.classList.remove('highlight');
// 	}
//   });
