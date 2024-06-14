const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/append-to-file", (req, res) => {
  const { username, aadhar_no } = req.body;
  const data = `Username: ${username}, Aadhar No: ${aadhar_no}\n`;

  fs.appendFile("info.txt", data, (err) => {
    if (err) {
      console.error("Error appending to file:", err);
      res.status(500).json({ success: false });
    } else {
      console.log("Data appended to file successfully.");
      res.status(200).json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
