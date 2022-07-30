const express = require("express");
const app = express();
const port = 5000;
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(express.static("./publicFolder"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
