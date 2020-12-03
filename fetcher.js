//define the argument from the command line www.url.com /file/path
let url = process.argv[2]; //url to check
let path = process.argv[3] //path to download the file to

// use the request library
const request = require('request');
const fs = require('fs')

const fetch = request(url, (error, response, body) => {
  // Print the error if one occurred
  let fetchError = () => {
    ('error:', error); 
  }
  // console.log(`this is from fetchError`, fetchError)
  // Print the response status code if a response was received
  let fetchStatus = () => {
    ('statusCode:', response && response.statusCode);
   } 
  // Print the HTML for the webpage.
  let fetchBody = () => {
    ('body:', body); 
  }
  fetchError
  fetchStatus = response.statusCode
  fetchBody
  //writes to a directory if the body and file path exist.
  fs.writeFile(path, fetchBody, (error) => {
    if (error) {
      console.log(`error writing to file, filepath does not exist. please enter a valid directory`)
      return
    } 
    if (fetchStatus !== 200 || fetchStatus === undefined) {
     console.log(`${fetchStatus}: Nothing to fetch from ${url}`);
      return
    }
    console.log (`Downloaded and saved ${body.length} bytes to ${path}`)
  })
});

fetch











