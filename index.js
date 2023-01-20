let express = require("express");
let app = express();

require("dotenv").config();

app.get("/account", (req, res) => {
  let qr = req.query.token || "";
  if (qr == process.env.TOKEN || "") {
    res.send({
      id: process.env.ID,
      pw: process.env.PW,
    });
  } else
    res.send({
      id: "FUCKYOU",
      pw: "FUCKYOU",
    });
});

app.listen(12350, () => {
  console.log("Server started");
});
