//CONNECTING MONGODB TO NODE JS

const MongoClient = require("mongodb").MongoClient;
// Above both are same 2 ways to write
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData() {
  // Wait for the client to connect
  await client.connect();
  // Get the database instance
  const db = client.db("e-comm");
  // Get the collection
  return db.collection("products");
}

// Here client is a promise thus to handle it we use await, and for that, the function needs to be async

module.exports = getData;

// -----------------------------------------------------------------------

// DB COLLECTION 2 ways to handle promise and read data
// const MongoClient = require("mongodb").MongoClient;
// // // Above both are same 2 ways to write
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// async function dbConnect() {
//   // Wait for the client to connect
//   await client.connect();
//   // Get the database instance
//   const db = client.db("e-comm");
//   // Get the collection
//   return db.collection("products");
// }
// //  1st way to handle promise
// // dbConnect().then((resp) => {
// //   resp
// //     .find()
// //     .toArray()
// //     .then((data) => {
// //       console.warn(data);
// //     });
// // });

// // 2nd way to handle promise

// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.warn(data);
// };
// main();
// // Here client is a promise thus to handle it we use await, and for that, the function needs to be async
