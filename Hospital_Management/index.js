const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  const healthyKidneys = johnKidneys.filter((kindney) => kindney.healthy);
  const numberOfHealthyKidneys = healthyKidneys.length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  let unhealthyKidneysFound = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
unhealthyKidneysFound = true; 
      continue;
    }
      newKidneys.push({
        healthy: true,
      });
         
  }

if(!unhealthyKidneysFound)
{
  return res.sendStatus(404);
}

users[0].kidneys = newKidneys;
res.json({msg:"Done!"});
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
