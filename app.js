import {getStudentFullName, getStudentId} from "./student.js";
import http from 'http';

console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);


const PORT = 3000;
const FULLNAME = getStudentFullName();
const STUDENT_ID = getStudentId();


const server = http.createServer((req, res) => {
    // Ustawienie nagłówka Content-Type na wartość text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
   
    // Tworzenie dokumentu HTML z odpowiednim tytułem i treścią
    const htmlResponse = `
       <!DOCTYPE html>
       <html>
       <head>
           <title>About student</title>
       </head>
       <body>
           <p>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}</p>
       </body>
       </html>
    `;
   
    // Wysyłanie odpowiedzi do klienta
    res.end(htmlResponse);
   });
   
   server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
   });
   