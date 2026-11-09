const library = [];
function addBook()
{
    const title = prompt("Enter book title:");
    const author = prompt("Enter author:");
    const book = 
    {
        title: title,
        author: author,
        isread: false
    };

    library.push(book);

    alert("Book added!");
}

function listBooks()
{
    library.forEach(function(book)
    {
        console.log(book);
    });
}

function markAsRead(title)
{
    const book = library.find(function(book)
    {
        return book.title === title;
    });

    if(book)
    {
        book.isRead = true;
        alert("Book marked as read!");
    }
    else 
    {
        alert("Book not found!")
    }
}

function listUnreadBooks()
{
    const unreadBooks = library.filter(function(book) 
    {
        return book.isRead === false;
    });

            unreadBooks.forEach(function(book)
        {
            console.log(book);
        });

}

let running = true;
while(running)
{
    const choice = prompt(`Book Tracker 1. Add Book 2.List Books 3. mark Book as Read 4. Exit 5. List Unread Books Enter your choice:` );

    switch(choice)
    {
        case "1":
            addBook();
            break;
        
        case "2":
            listBooks();
            break;
        
        case "3":
            const title = prompt("Enter book title:");
                markAsRead(title);
            break;
        
        case "4":
            running = false;
          alert("Goodbye!");
            break;

        case "5":
            listUnreadBooks();
            break;

        
        default:
            alert("Invalid choice.");                

    }
}