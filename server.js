const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const port = 9000;

mongoose.connect(process.env.DB).then((con) => {
  console.log("DB connected");
});

app.listen(port, () => {
  console.log(`runing on port ${port}...`);
});
