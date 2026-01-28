fullstack-bootcamp/  

 Inside it create:  

 day1-html-css-js/ 

In VS Code → Right-click → New File → name it:  

 index.html  

Paste:  

<!DOCTYPE html>  

  

<html>  

  

<head>  

  

    <title>Day 1 - HTML Basics</title>  

  

    <link rel="stylesheet" href="style.css">  

  

</head>  

  

<body>  

  

   

  

    <h1>Welcome to MERN Bootcamp</h1>  

  

    <p>This is our first HTML page.</p>  

  

   

  

    <h2>My First Task List</h2>  

  

    <ul>  

  

        <li>Learn HTML</li>  

  

        <li>Learn CSS</li>  

  

        <li>Learn JavaScript</li>  

  

    </ul>  

  

   

  

    <script src="script.js"></script>  

  

</body>  

  

</html> 

 
students to add: 

•	Their name 

•	A paragraph about themselves 

•	3 goals 


 
 

File: style.css  

  

   

  

Create:  

  

   

  

style.css  

  

   

  

Add:  

  

   

  

body {  

  

    font-family: Arial;  

  

    padding: 20px;  

  

    background: #f4f4f4;  

  

}  

  

   

  

h1 {  

  

    color: #1c4c96;  

  

    text-align: center;  

  

}  

  

   

  

ul {  

  

    line-height: 1.8;  

  

}  

  

   

  

button {  

  

    padding: 10px;  

  

    background: black;  

  

    color: white;  

  

    border-radius: 5px;  

  

}  

.container {  

  

    display: flex;  

  

    gap: 20px;  

  

} 

Students to add: 

•	Center the heading 

•	Add border to list 

•	Add background color 

Create script.js 

console.log("Welcome to JavaScript!"); 

  

function greet(name) { 

    console.log("Hello " + name); 

} 

  

greet("Anmol"); 

  

let tasks = ["HTML", "CSS", "JavaScript"]; 

  

for (let i = 0; i < tasks.length; i++) { 

    console.log("Task:", tasks[i]); 

} 


