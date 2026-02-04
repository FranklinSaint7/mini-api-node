const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const usersRoutes = require("./src/routes/users.routes");
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("API Node is alive 🔥");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});