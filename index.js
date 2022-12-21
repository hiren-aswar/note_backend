const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

const user = require("./models/user");

app.use(bodyparser({ extended: false }));
app.use(express.json());
mongoose.connect("mongodb://mongodb+srv://hiren123:hiren123@cluster0.unp4crn.mongodb.net/note_app");
app.get("/note/list", async (req, res) => {
  const data = await user.find({ userid: req.body.userid });

  res.json(data);
});
app.post("/note/add", async (req, res) => {
  const data = new user({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });
  const result = await data.save();
  res.json(result);
});
app.post("/note/delet", async (req, res) => {
  const data = await user.deleteOne({ id: req.body.id });
   res.json(data);
});

app.listen(3001, () => {
  console.log("server is listing");
});
