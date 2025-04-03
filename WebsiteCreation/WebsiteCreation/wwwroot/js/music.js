
//delopgave 1

let footerNote = document.querySelector(".rightSide-box1"); // selects the first element with the class name "lastUpdate" in the document
let footerNoteText = "<span>Last refreshed: " + document.lastModified + "</span>"; // span helps stay in one line and follow parent element's style. The last modified date is retrieved from the document object and formatted as a string
footerNote.innerHTML += footerNoteText; // sets the inner HTML of the footer tag to the last modified date and updates the footer tag in the document
console.log(document.lastModified); // logs the last modified date to the console


//delopgave 2
