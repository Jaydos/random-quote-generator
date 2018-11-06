/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Initialise array of quote objects
let quotes = [
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt",
    tags: ["Politics", "Motivation"]
   },
  {
    quote: "Learning never exhausts the mind.",
    source: "Leonardo da Vinci"
  }, 
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H.Jackson Brown, Jr.",
    citation: "Life's Little Instruction Book: 511 suggestions, observations, and reminders on how to live a happy and rewarding life",
    year: "1991"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain"
  }
];

// Function to change background color of the document body
const changeBackgroundColor = () => {
  let newColor = [];
  for (let i = 0; i < 3; i++){
    newColor.push(Math.floor(Math.random() * 255));
  }
  document.querySelector('body').style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
}

// Function to select a random quote object from the quotes array
const getRandomQuote = array => array[Math.floor(Math.random() * array.length)];

/*
Function to structure HTML using quote object property values. 
We will call this function in the printQuote function to keep code clean and readable
*/

const structureHTML = () => {
 let quote = getRandomQuote(quotes);

 let quoteHTML = "";

  quoteHTML += `<p class="quote">${quote.quote}</p>\n<p class="source">${quote.source}`;

  // Check if citation property exists. If so, concatenate to HTML structure
  if (quote.citation){
    quoteHTML += `\n <span class="citation">${quote.citation}</span> \n`;
  }

  // As above but for year property 
  if (quote.year){
    quoteHTML += ` <span class="year">${quote.year}</span>\n`;
  }

  quoteHTML += "</p>\n";

  // Check if tags property exists and add to HTML structure if true
  if (quote.tags){
    // Iterate through each tag and create new html element for each
    quote.tags.forEach(function(tag){
      quoteHTML += `<p><i>${tag}</i></p>\n`;
    });
  }
  return quoteHTML;
}

// Create printQuote function to display the innerHTML of the quote-box element to a new quote
const printQuote = () => {
  // Store the return value of structureHTML in a variable
  let newQuote = structureHTML();

  // Store quote-box element in a variable for cleaner targeting
  const quoteBox = document.getElementById('quote-box');

  // While new quote matches currently displayed quote, fetch new quote
  while(newQuote ===quoteBox.innerHTML){
    newQuote = structureHTML();
  }
  
  // Change quote-box display to new quote
  quoteBox.innerHTML = newQuote;

  // Clear the autoChangeQuote interval to reset the counter for another 20 second wait
  clearInterval(autoChangeQuote);
}

/* Create a runMachine function that calls functions to: 
 - change background color
 - print a new quote
 - set a new 20 second interval to change quote
 */
const runMachine = () => {
  changeBackgroundColor();
  printQuote();
  autoChangeQuote = setInterval(runMachine, 20000);
}

// Click event listener to initialise the quote machine
document.getElementById('loadQuote').addEventListener("click", runMachine, false);

// Automatic quote change after 20 seconds
let autoChangeQuote = setInterval(runMachine, 20000);



