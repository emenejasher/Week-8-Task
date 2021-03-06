const express = require("express");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const db = require("./config/db")

// configure dotenv for environment variable
dotenv.config({ path: "./config.env" });
const app = express();

db()
//tempm import unneccessary 
// app.get("api/v1/user",(req, res)=>{
//   res.json(userRoutes).status(201);
//   //res.send('friendlist.js');
// });
// Body Parser
app.use(express.json());

// Mounting
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/document", userRoutes);
// app.use("/api/v1/student", userRoutes);

// Start our server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
