const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;

const schema = zod.array(zod.number());
{
const schema = zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
})
}

app.use(express.json());

// app.post('/', function(req, res) {

//     //kidney=[1,2]
//     //Any exceptions are here then global catches will be called
//     const kidneys = req.body.kidneys;
//     const kidneyLength= kidneys.length;
//     res.send("You have" + kidneyLength + "kidneys");
// });

//global catches and Error Handling Middlewares
// app.use(function(err,req, res, next) {
//     res.json({
//         msg:"Sorry, something is wrong in this"
//     })
// })

app.post("/", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.suscess) {
    res.status(411).json({
      msg: "Input is invalid",
    });
  } else {
    res.send({
      response
    });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
