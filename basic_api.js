//We can not pass body in get method
const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const app = express();

//when we have to get data from postman we have to use
app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  // console.log(data);
  resp.send(data);
});

app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateMany(
    {
      name: "Maharashtra123", // to take from query param the {name:req.params.name} give name in url in postman
    },
    { $set: { name: "Maharashtra" } } //{$set:{req.body}}
  );
  console.warn(req.body);
  resp.send({ result: "updated" });
});

// app.post("/", (req, resp) => {
//   resp.send({ name: "aditi" });
//   console.log(req.body);
// });

//if i want to return the same data to mongodb which i have get from postman then post api will be like given below

// app.post("/", async (req, resp) => {
//   try {
//     let data = await dbConnect();
//     let result = await data.insertMany(req.body);
//     resp.send(result);
//   } catch (error) {
//     console.error(error);
//     resp.status(500).send("Error inserting data into the database.");
//   }
// });

app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});
app.listen(2000);
