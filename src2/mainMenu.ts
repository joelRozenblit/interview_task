// import { log } from "node:console";
// import { Library } from "./Library.js";
// import { Book } from "./models/Book.js";
// import { ask } from "./utils/reader.js";

// // simulate dataBase
// const books: Book[] = [
//   new Book("Harry Potter", 10),
//   new Book("The Bible", 20),
//   new Book("The Secret Garden", 3),
// ];

// // create library
// const library = new Library(books);

// // print menu
// export async function mainMenu() {
//   let exit = false;

//   while (!exit) {
//     console.log("\n ==== Main Menu ===== ");
//     console.log("\n 1: search book by name");
//     console.log("\n 2: return book ");
//     console.log("\n 3: exit ");

//     const choice = await ask("your choice");

//     switch (choice) {
//       // case searching name
//       case "1":
//         const searchName = await ask("Enter book name to search: ");
//         // ensure correct type input
//         if (typeof searchName !== "string") {
//           console.log("something went wrong");
//         }
//         // ensure actual input
//         else if (searchName.trim() === "") {
//           console.log("no input");
//         }
//         // send to search func and print
//         else {
//           console.log(`Searching for book: ${searchName} ...`);
//           const book = library.searchBook(searchName);
//           // ensure book found
//           // TODO: always print book...
//           if (book === null) {
//             console.log(`the book ${searchName} did not found`);
//           } else {
//             // print borrow menu
//             await borrowChoice(book);
//             console.log("----------------");
//             console.log(book);
//             console.log("----------------");
//           }
//         }
//         break;
//       // end cade 1
//       // ---------------------
//       // return book:
//       case "2":
//         const returnBook = await ask("Enter book name to want to return: ");

//         console.log(`Searching for book: ${returnBook} ...`);

//         if (typeof returnBook === "string") {
//           const book = library.searchBook(returnBook);
//           if (book === null) {
//             console.log(`the book ${returnBook} did not found`);
//           } else {
//             // print borrow menu
//             library.returnBook(book);
//             console.log("----------------");
//             console.log(book);
//             console.log("----------------");
//           }
//         }
//         break;

//       //end case 2
//       // ---------------------
//       case "3":
//         exit = true;
//         break;
//       default:
//         console.log("invalid choice");
//     }
//   }
// }

// async function borrowChoice(book: Book): Promise<Book | null> {
//   while (true) {
//     console.log(`1: to borrow this book ${book.getName()}`);
//     console.log(`2: back the main menu`);

//     const choice = await ask("your choice");
//     switch (choice) {
//       case "1":
//         const borrowed = await library.borrowBook(book);
//         if (borrowed === null) {
//           console.log("borrow fail");
//           return null;
//         }
//         console.log(`borrow succeed  ${borrowed}`);
//         return borrowed;
//       // end case 1
//       // ---------------
//       case "2": // back to main menu
//         return null;
//       default:
//         console.log("invalid choice");
//         return null;
//     }
//   }
// }

// // function handleBorrowRequest(book:Book) : Book| null {

// // }
