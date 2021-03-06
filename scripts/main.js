import addEventListenerObject from "./eventListeners.js"
import eventListeners from "./eventListeners.js";


//fetched data from json and printed to dom

fetch("http://localhost:3000/books")
  .then((books) => books.json())
  .then((parsedBooks) => {
    // console.log(parsedBooks);
    parsedBooks.forEach((bookObject) => {
      //    console.log(bookObject);
      const htmlString = `<section class ="single-entry">
       <h2>${bookObject.title}</h2>
       <p>by ${bookObject.author}</p>
       <p>ISBN: ${bookObject.ISBN}</p>
       <button class="delete-btn-1" id="delete-btn-${bookObject.id}">Delete</button>
      <button class="edit-btn" id="edit-btn-${bookObject.id}">Edit</button>
       </section>`;
      document.querySelector(".bookContainer").innerHTML += htmlString;
    })
  })

//add event listener to save button on form

document.querySelector("#save-btn").addEventListener("click", eventListeners.saveBookEvent);
//adding event listener on delete button
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("delete-btn")) {

    const idToDelete = event.target.id.split("-")[2]
    console.log(idToDelete)
    fetch(`http://localhost:3000/books/${idToDelete}`, {
      method: "DELETE"
    }).then(() => {
      fetch("http://localhost:3000/books")
        .then(books => books.json())
        .then((parsedBooks) => {
          document.querySelector(".bookContainer").innerHTML = "";
          parsedBooks.forEach((bookObject) => {
            const htmlString =
              `<section class ="single-entry">
      <h2>${bookObject.title}</h2>
      <p>by ${bookObject.author}</p>
      <p>ISBN: ${bookObject.ISBN}</p>
      <button class="delete-btn" id="delete-btn-${bookObject.id}">Delete</button>
      <button class="edit-btn" id="edit-btn-${bookObject.id}">Edit</button>
      </section>`;
            document.querySelector(".bookContainer").innerHTML += htmlString;

          })
        })
    })
  }
})

 





















