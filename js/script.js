/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
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



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
const getRandomQuote = array => array[Math.floor(Math.random() * array.length)];




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
const printQuote = () => {
  let quote = getRandomQuote(quotes);
  let quoteStructure = "";

  quoteStructure += `<p class="quote">${quote.quote}</p>\n<p class = "source">${quote.source}`;

  if (quote.citation){
    quoteStructure += `\n <span class="citation">${quote.citation}</span> \n`;
  } 
  if (quote.year){
    quoteStructure += ` <span class="year">${quote.year}</span>\n`;
  }

  quoteStructure += "</p>";
  document.getElementById('quote-box').innerHTML = quoteStructure;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.