//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;
var flag = 0;

app.use(bodyParser.urlencoded({ extended: true }));

function parserCheck(req, res, next) {
    console.log(req.body);
    if (req.body["password"] == "ILoveProgramming"){
        flag = 1;
    }
    next();
}
app.use(parserCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (flag == 1){
        res.sendFile(__dirname + "/public/secret.html");
        flag = 0;
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
        // res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});