const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyKid;

  // Check if username and password are correct
  if (username !== "Manash" || password !== "Manash@123") {
    res.status(400).json({ msg: "Invalid username or password" });
    return;
  }

  // Check if kidneyId is valid
  if (kidneyId != "1" && kidneyId != "2") {
    res.status(400).json({ msg: "Invalid kidney ID" });
    return;
  }

  // If all checks pass, respond with success message
  res.json({
    msg: "Your kidney is fine!",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
