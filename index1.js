// console.log("sub");
// console.log("Hello");
// console.log(10 + 20);
// //Create Server
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-Type": "text/html" });
//     res.write("<h2>Hello there</h2>");
//     res.write("<h1>Hello there</h1>");
//     res.end();
//   })
//   .listen(4500);

const { MongoDBCollectionNamespace } = require("mongodb");

// // we can pass function as parameter

// function dataControl(req, res) {
//   res.writeHead(200, { "content-Type": "text/html" });
//   res.write("<h2>Hello there   1</h2>");
//   res.write("<h1>Hello there  1</h1>");
//   res.end();
// }

// http.createServer(dataControl).listen(4200);

//Making of API
// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(5000);

//Getting input from command line

// console.log(process.argv);
// output->
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Rutu Coding Related\\Node JS\\index.js'

// in command line if we give nodemon index.js hello then the output is
// 'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Rutu Coding Related\\Node JS\\index.js',
//   'hello'
// ]

// -----------------------------------------------------------------------
// Creating file

// const fs = require("fs");
// const path = require("path");
// // fs.writeFileSync("apple.txt", "This is a simple Text file ");
// const dirPath = path.join(__dirname, "crud");
// fs.writeFileSync(`${dirPath}/apple.txt`, "This is a simple text file");
// // now if we execute above 2 lines (52,54)then in direct root folder the file apple will get created but if we want to be created in different folder then how to create it
// // For that we have to import path module also

// //Read File
// fs.readFile(`${dirPath}/apple.txt`, "utf8", (err, item) => {
//   console.log(item); //<Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65> with utf8  as para to resolve this we use 'utf8'
// });

// //Append File
// fs.appendFile(`${dirPath}/apple.txt`, "and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("File is updated");
//   }
// });

// //rename
// fs.rename(`${dirPath}/apple.txt`, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is renamed");
// });

// //delete file

// fs.unlinkSync(`${dirPath}/fruit.txt`);

// -------------------------------------------------------------------------
// Handling Asynchronous Data

// let a = 20;
// let b = 0;

// setTimeout(() => {
//   b = 30;
// }, 2000);

//promise wait for the internal data if is there any operation to be performed which is going to take more time then keep it in promise as soon as promise gets  resolved it will automatically update the result

// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });

// waitingData.then((data) => {
//   console.log(a + data);
// });

// -----------------------------------------------------------------------------
// Routing Paramters -Request and Response

// const express = require("express");
// const app = express();

// app.get("", (req, resp) => {
//   console.log("Data sent by browser", req.query.name);
//   resp.send("Welcome , this is home page");
// });

// app.get("/about", (req, resp) => {
//   resp.send(`<h1>Welcome , this is about page</h1>
//     <input type = "text" placeholder = "Enter here"/>
//     <button type=submit>Submit</button>`);
// });

// app.get("/help", (req, resp) => {
//   resp.send([
//     {
//       name: "rutu",
//       id: 101,
//     },
//     {
//       name: "Aditi",
//       id: 102,
//     },
//   ]);
// });
// app.listen(5000);

// -------------------------------------------------------------------------
// Make html pages
// const express = require("express");
// const app = express(); // --executed fun of express
// const path = require("path");
// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.use(express.static(publicPath)); //--express with itd own diff function as static

// here to execute in browser we have to give url as
//   localhost:5000/about.html

// now to removeextension from url
// for example localhost:5000/about.html then to remove html from it

// app.get("", (_, resp) => {
//   resp.sendFile(`${publiPath}/about.html`);
// });  write in this way

//  to make 404 page  means suppose in url the mention file is not there then 404 page should appear

// app.get("", (req, resp) => {
//   console.log("Data sent by browser", req.query.name);
//   resp.send("Welcome , this is home page");
// });

// app.get("/about", (req, resp) => {
//   resp.send(`<h1>Welcome , this is about page</h1>
//     <input type = "text" placeholder = "Enter here"/>
//     <button type=submit>Submit</button>`);
// });

// app.get("/help", (req, resp) => {
//   resp.send([
//     {
//       name: "rutu",
//       id: 101,
//     },
//     {
//       name: "Aditi",
//       id: 102,
//     },
//   ]);
// });

// app.get("*", (req, resp) => {
//   resp.sendFile(`${publicPath}/pagenotfound.html`);
// });

// app.listen(5000);

// ------------------------------------------------------------------
// TEMPLATE ENGINE

// const express = require("express");
// const path = require("path");
// const app = express();
// app.set("view engine", "ejs");

// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });
// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "rutu",
//     id: 101,
//     city: "nashik",
//     skills: ["php", "js", "c++", "java"],
//   };
//   resp.render("profile", { user });
// });

// app.listen(2500);

// ------------------------------------------------------------------

// MIDDLEWARE

// const express = require("express");
// const app = express();

// below reFilter is middleware with 3 parameter which are compulsory req,resp,next
// const reqFilter = (req, resp, next) => {
//   console.log("reqFilter");
// next(); //if we dont call next then url in browser will be continuosly loading it will not get execute
// };
//way to call middleware
// app.use(reqFilter);
// app.get("", (req, resp) => {
//   resp.send("Hello there");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Users page");
// });

// app.listen(2500);

// ----------------------------------------------------------
// MIDDLEWARE EXAMPLE IF AGE ABOVE 18 THEN CAN ONLY ACEESS WEBSITE

// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("U can not access this page");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);
// app.get("", (req, resp) => {
//   resp.send("Hello there");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Users page");
// });

// app.listen(2500);

// ---------------------------------------------------------------------

// ROUTE LEVEL MIDDLEWARE

// here remove the app.use and add reqFilter as parameter to only that route where we have to add conditions

// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("U can not access this page");
//   } else {
//     next();
//   }
// };

// app.get("", reqFilter, (req, resp) => {
//   resp.send("Hello there");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Users page");
// });

// app.listen(2500);
//  above example is for single level route
// if we want for more than one then add same reqFilter to another router also

//IF we make middleware in different file then  make another file like middleware.js and paste that middleware there

// const express = require("express");
// const reqFilter = require("./middleware");
// const app = express();

// app.get("", reqFilter, (req, resp) => {
//   resp.send("Hello there");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Users page");
// });

// app.listen(2000);

//Another way
// In this instead of passing middleware to each route we make the instance of middleware and use that instance like 'route.get(())' and at the end use app.use('/',route)
// const express = require("express");
// const reqFilter = require("./middleware");
// const app = express();
// const route = express.Router();
// route.use(reqFilter);

// app.get("", (req, resp) => {
//   resp.send("Hello there");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Users page");
// });
// route.get("/about", (req, resp) => {
//   resp.send("About page");
// });
// route.get("/contact", (req, resp) => {
//   resp.send("Contact page");
// });
// app.use("/", route);
// app.listen(2000);



// -----------------------------------------------------------------
// MongoDB

// const { MongoClient } = require("mongodb");

// const MongoClient = require("mongodb").MongoClient;
// //Above both are same 2 ways to write
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// async function getData() {
//   let result = client.connect();
//   let db = result.db("e-comm");
//   let collection = db.collection("products");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }
// // here client is a promise thus to handle it we use await thus for that function needs to be async
// getData();


// const MongoClient = require("mongodb").MongoClient;
// // Above both are same 2 ways to write
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// async function getData() {
//   try {
//     // Wait for the client to connect
//     await client.connect();
//     // Get the database instance
//     const db = client.db("e-comm");
//     // Get the collection
//     const collection = db.collection("products");
//     // Fetch the data
//     const response = await collection.find({}).toArray();
//     // Print the response
//     console.log(response);
//   } catch (error) {
//     // Handle any errors
//     console.error("Error:", error);
//   } finally {
//     // Close the client connection
//     await client.close();
//   }
// }

// Here client is a promise thus to handle it we use await, and for that, the function needs to be async
// getData();
