const mongoose = require("mongoose");
const StudentSch = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  phn: Number,
});
const saveInDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  const StudentModel = mongoose.model("student", StudentSch);
  let data = new StudentModel({
    name: "aditi",
    email: "abc@gmail.com",
    city: "nashik",
    Number: 8541,
  });
  let result = await data.save();
  console.log(result);
};
saveInDb();

const updateInDb = async () => {
  const StudentModel = mongoose.model("students", StudentSch);
  let data = await StudentModel.updateMany(
    {
      name: "aditi",
    },
    { $set: { name: "yashwi" } }
  );
};
updateInDb();
const deleteDb = async () => {
  const StudentModel = mongoose.model("students", StudentSch);
  let data = await StudentModel.deleteMany({
    city: "nashik",
  });
};
deleteDb();
const findIndb = async () => {
  const StudentModel = mongoose.model("students", StudentSch);
  let data = await StudentModel.find({
    city: "nashik",
  });
};
findIndb();
