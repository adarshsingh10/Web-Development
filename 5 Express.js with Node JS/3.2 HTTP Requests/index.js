import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {                      // req -> request, res -> response
  res.send("<h1>Hello, World!</h1>");
  // console.log(req.rawHeaders);
})

app.get("/about", (req, res) => {
  res.send("<h1>About Me!</h1><p>My name is Adarsh</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>+91 0123456789</p>");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});