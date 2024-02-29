// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));




// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cuttlefish', (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'));
  });
  

app.post('/auth', (req, res) => {
    const { username, password } = req.body; // Get username and password from form data
    
    // Check if username and password are correct
    if (username === 'example_user' && password === 'example_password') {
      res.json({ success: true }); // Send success response
    } else {
      res.status(401).json({ success: false, message: 'Wrong username or password.' }); // Send error response
    }
  });



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

