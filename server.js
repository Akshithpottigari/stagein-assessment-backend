const express = require("express");
const cors = require('cors')
const { USERS, STORIES } = require("./data");

const app = express();
app.use(cors())

app.get("/api/data", (req, res) => {
  try {
    const jsonData = {
      USERS,
      STORIES,
    };

    res.json({ data: jsonData });
  } catch (error) {
    throw new Error("Error while fetching data");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
