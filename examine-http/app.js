const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Pretend internet addres run localy (localhost)
// get request , the browser requesting a webpage

app.get('/api/exercise', (req, res) => { // Creating the adress
  res.send(req.query); // Sending the reponce
  console.log(req.method);
  console.log(req.path);
  console.log(req.query);
});
//guery is everything after question mark with a key value pair in the URL


// body is like a container for the users input
//app.post is sending the information in Header(information is not visible)
app.post('/api/exercise', (req, res) => {
  let list = '<h1>Hello from Express!</h1><h2>POST parameters</h2><p>I received these parameters: </p><ul>';

  for (const key in req.body) { //Looping through whole form information
    list += '<li>' + key + ':' + req.body[key] + '</li>';
    console.log(key, req.body[key]) //  req.body[key] retrives the value of that key
  }
  list += '</ul>'
  res.send(list);
})


app.post('/api/login', (req, res) => {
      if (!req.body.user || !req.body.pwd) {
        res.status(400).end();
      } else if (req.body.user === 'mark' && req.body.pwd === 'giraffe') {
        res.send(JSON.stringify({
          user: req.body.user
        }));
      } else {
        res.status(403).end()
      }
    }
)



    //Extra practise
    app.get('/Paul', (req, res) => {
      res.send('Paul is super');
    });

    // localhost:5000
    app.listen(5000, () => console.log('server running on port 5000'));

    //Forms
    // Get pases the information in the URL
    // Post Sends data in Http header (like an envelop)
