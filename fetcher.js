// take two command line arguments:
// 1. a URL
// 2. a local file path
// download the resource at the URL to the local path on your machine.
// once completed, print out message like 'Downloaded and saved ### bytes to ./index.html


// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

const request = require('request');
const fs = require('fs');

let URL = process.argv[2];
let filePath = process.argv[3];
let webResponse = "";

const fetcher = (callbackOne, callbackTwo) => request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the page.
  callbackOne(body);
  callbackTwo(body);
  // webResponse = response;
  // writer(webResponse);
});

const writer = (content) => fs.writeFile(filePath, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const characterCount = (content) => console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);

fetcher(writer, characterCount);

// example file path: /Users/chrismcanulty/networking/page-fetcher/test.txt
// example web site: https://www.example.edu/
