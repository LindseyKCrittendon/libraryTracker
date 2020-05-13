

const eventListeners = {
    saveBookEvent: function(){
            // console.log("you clicked meeeeeee!")
            const titleEntry = document.querySelector("#title").value;
            const authorEntry = document.querySelector("#author").value;
            const isbnValue = document.querySelector("#isbnNumber").value; 

            var newBookObject = {
                title: titleEntry,
                author: authorEntry,
                ISBN: isbnValue  
              };

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
                       </section>`;
                       document.querySelector(".bookContainer").innerHTML += htmlString;
                   })
             })
          })
    }
    
}



export default eventListeners;