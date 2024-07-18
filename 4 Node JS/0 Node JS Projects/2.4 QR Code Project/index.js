import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";
inquirer
    .prompt([
        {
            "message": "Type in your URL:",
            "name": "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        // console.log(url);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        writeFile('qr-text.txt', url, (err) => {
            if (err) throw err;
            console.log("The file qr-text.txt has been saved!")
        });
    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
