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