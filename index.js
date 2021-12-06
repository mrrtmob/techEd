const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mathsteps = require('./maths/index');
const tesseract = require("node-tesseract-ocr")
const path = require('path')
const options = {
  langPath: path.join(__dirname, "langs") // Or wherever your downloaded langs are stored
};
const config = {
  lang: "khm",
  oem: 1,
  psm: 3,
}
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd-4mI2kvX_xTPgSbvcKXrvAJI8QpzMnccw&usqp=CAU"

// tesseract
//   .recognize(img, config)
//   .then((text) => {
//     console.log("Result:", text)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })

// var result = "";

const sever = express()
sever.use(express.json())
sever.use(express.urlencoded({ extended: true }))

sever.post('/math', (req, res) => {
  result = req.body.data;
  var ans = [];
  
  console.log(req.body.data)
  const steps = mathsteps.solveEquation(req.body.data);
  steps.forEach(step => {
    st = {
      [step.changeType] : step.newEquation.ascii()
    };
    ans.push(st);
  });
  console.log(result);
  res.send({
    ans
  });

})
sever.listen(3000, function () {
  console.log("Sever listen on port 3000");
});






//H8ec6Js3mZbAXiu