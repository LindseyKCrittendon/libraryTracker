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
});

//add event listener to save button on form

document.querySelector("#save-btn").addEventListener("click", function(){
    // console.log("you clicked meeeeeee!")
    const titleEntry = document.querySelector("#title").value;
    const authorEntry = document.querySelector("#author").value;
    const isbnValue = document.querySelector("#isbnNumber").value;

    // console.log(titleEntry, authorEntry, isbnValue)

    //build into an object
    var newBookObject = {
      title: titleEntry,
      author: authorEntry,
      ISBN: isbnValue  
    };

    // console.log(newBookObject);
//post to json file
    fetch("http://localhost:3000/books", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newBookObject)
})
});