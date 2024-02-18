const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

require("dotenv").config();

const PORT = 5050;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));