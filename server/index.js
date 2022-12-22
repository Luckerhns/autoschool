require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require("./DataBase/db");
const cors = require("cors");
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use("/kst", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, (err) => {
      console.log(`server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error on start : ${error}`);
  }
};

start();
