const getData = require("./mongodb");
const update1 = async () => {
  console.log("update function");
  const db = await getData();
  const result = await db.updateMany(
    {
      name: "Maharashtra",
    },
    { $set: { name: "Maharashtra123" } }
  );
  console.log(result);
};

update1();
