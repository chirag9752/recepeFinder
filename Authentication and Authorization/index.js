const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// const myDB = require("./config/myDatabase");              // when you do module.exports
// myDB();

let cors = require("cors")

app.use(cors());                                // for cross platform connection

app.use(express.json());                              // is kaam ko sabse pehle karna hai

require("./config/myDatabase").myDB();              // when you do exports.module

const user = require("./routes/routes");
app.use("/" ,user);


app.listen(PORT , () => {
    console.log(`server start at port no ${PORT}`);
})

