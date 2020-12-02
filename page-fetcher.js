const request = require('request');
const fs = require("fs");
const domain = process.argv[2];
const save = process.argv[3];

request(domain, (error, response, body) => {
  if (!error) {
    fs.writeFile(`${save}`, body, function(error) {
      if (!error) {
        console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${save}`);
      } else console.log("Error:", error);
    });
  } else console.log('Error:', error);
});