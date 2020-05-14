//refactor to make a new book object
const buildBookObjectFromForm = () => {
    return{
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    ISBN: document.querySelector("#isbnNumber").value
}
}

const eventListeners = {
    saveBookEvent: () => {
        const newBookObject = buildBookObjectFromForm();
              //posting to json
              fetch("http://localhost:3000/books", { // Replace "url" with your API's URL
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newBookObject)
          
              //prints old and newly added books if I refresh at this point, but I want it to refresh and print new book with old ones automatically
          }).then(() => {
             fetch("http://localhost:3000/books") 
             .then(books => books.json())
             .then(parsedBooks => {
                document.querySelector(".bookContainer").innerHTML = "";
                parsedBooks.forEach((bookObject) => {
                    
                    //    console.log(bookObject);
                   
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
    
}
// {
    // deleteBookEvent: (event) => {
    //     if (event.target.id.includes("delete-btn")) {

    //         const idToDelete = event.target.id.split("-")[2]
    //         console.log(idToDelete)
    //         fetch(`http://localhost:3000/books/${idToDelete}`, {
    //           method: "DELETE"
    //         }).then(() => {
    //           fetch("http://localhost:3000/books")
    //             .then(books => books.json())
    //             .then((parsedBooks) => {
    //               document.querySelector(".bookContainer").innerHTML = "";
    //               parsedBooks.forEach((bookObject) => {
    //                 const htmlString =
    //                   `<section class ="single-entry">
    //           <h2>${bookObject.title}</h2>
    //           <p>by ${bookObject.author}</p>
    //           <p>ISBN: ${bookObject.ISBN}</p>
    //           <button class="delete-btn" id="delete-btn-${bookObject.id}">Delete</button>
    //           <button class="edit-btn" id="edit-btn-${bookObject.id}">Edit</button>
    //           </section>`;
    //                 document.querySelector(".bookContainer").innerHTML += htmlString;
    // }



export default eventListeners;