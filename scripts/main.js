import addEventListenerObject from "./eventListeners.js"
import eventListeners from "./eventListeners.js";


//fetched data from json and printed to dom

fetch("http://localhost:3000/books")
  .then((books) => books.json())
  .then((parsedBooks) => {
    console.log(parsedBooks);
   parsedBooks.forEach((bookObject) => {
    //    console.log(bookObject);
       const htmlString = `<section class ="single-entry">
       <h2>${bookObject.title}</h2>
       <p>by ${bookObject.author}</p>
       <p>ISBN: ${bookObject.ISBN}</p>
       </section>`;
       document.querySelector(".bookContainer").innerHTML += htmlString;
   }) 
})

//add event listener to save button on form

document.querySelector("#save-btn").addEventListener("click", eventListeners.saveBookEvent)

    // console.log(titleEntry, authorEntry, isbnValue)

    //build into an object
    

    // console.log(newBookObject);
//post to json file
   







