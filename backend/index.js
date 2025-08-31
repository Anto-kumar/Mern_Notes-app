const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const notesRoutes = require("./routes/notesRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
