const express = require("express");

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
//     server.get("/user/profile/:id", (req, res) =>{
//       app.render(req, res, "/user/profile", { id: req.params.id })
//   });
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (error) => {
      if (error) throw error;
      console.log("Ready on port 3000");
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
