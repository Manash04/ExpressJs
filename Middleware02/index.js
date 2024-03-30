const express = require("express");
const app = express();
const port = 3000;
function isOldEnough(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
app.get("/ride", (req, res) => {
    const age = req.query.age;
  if (isOldEnough(age)) {
    res.json({
      msg: "You have successfully riden the ride",
    });
  } else {
    res.status(411).json({
      msg: "Sorry you are not allowed",
    });
  }
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
