// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: '@#$%$#@#$#@#$#@#$', // Change this to a random, secure string in a real application
  resave: false,
  saveUninitialized: true
}));
const usersFilePath = './users.json';
secretKey="@#$%$#$%$"
// Initialize users array with data from JSON file or an empty array
let users;
try {
  const usersData = fs.readFileSync(usersFilePath, 'utf8');
  users = JSON.parse(usersData);
} catch (err) {
  users = [];
}

// function authenticate(req, res, next) {
//   // Check if user is authenticated
//   // const isAuthenticated = /* Add your authentication logic here */
//   if (isAuthenticated) {
//     next(); // If authenticated, proceed to the next middleware or route handler
//   } else {
//     res.status(404).send('Not Found'); // If not authenticated, send 404 Not Found response
//   }
// }


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  console.log(username + " " + password);
  // Find user by username and password
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Generate JWT token
    const token = jwt.sign({ username }, secretKey);
    res.status(200).json({ success: true, message: 'Authentication successful', token });
  } else {
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

  app.get('/register', (req, res) => {
      res.sendFile(path.join(__dirname, 'register.html'));
  });

  app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ success: false, message: 'Username is already taken' });
    }
    // Add the new user to the database
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    // Save the updated user data to the file
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
    // Redirect to login.html after successful registration
    res.redirect('/login');
  });
app.get('/login', (req, res) => { 
  res.sendFile(path.join(__dirname, 'index.html'));

});

  app.get('/007', (req, res) => {
  
    res.sendFile(path.join(__dirname, '1.html'));
  });

  const secretCodes = {
    "123456": "/123456",
    "12345": "/12345",
    "123456789": "/123456789",
    "password": "/password",
    "iloveyou": "/iloveyou",
    "princess": "/princess",
    "1234567": "/1234567",
    "rockyou": "/rockyou",
    "12345678": "/12345678",
    "abc123": "/abc123",
    "nicole": "/nicole",
    "daniel": "/daniel",
    "babygirl": "/babygirl",
    "monkey": "/monkey",
    "lovely": "/lovely",
    "jessica": "/jessica",
    "654321": "/654321",
    "michael": "/michael",
    "ashley": "/ashley",
    "qwerty": "/qwerty",
    "111111": "/111111",
    "iloveu": "/iloveu",
    "000000": "/000000",
    "michelle": "/michelle",
    "tigger": "/tigger",
    "sunshine": "/sunshine",
    "chocolate": "/chocolate",
    "password1": "/password1",
    "soccer": "/soccer",
    "anthony": "/anthony",
    "friends": "/friends",
    "butterfly": "/butterfly",
    "purple": "/purple",
    "angel": "/angel",
    "jordan": "/jordan",
    "liverpool": "/liverpool",
    "justin": "/justin",
    "loveme": "/loveme",
    "fuckyou": "/fuckyou",
    "123123": "/123123",
    "football": "/football",
    "secret": "/secret",
    "andrea": "/andrea",
    "carlos": "/carlos",
    "jennifer": "/jennifer",
    "joshua": "/joshua",
    "bubbles": "/bubbles",
    "1234567890": "/1234567890",
    "superman": "/superman",
    "hannah": "/hannah",
    "amanda": "/amanda",
    "loveyou": "/loveyou",
    "pretty": "/pretty",
    "basketball": "/basketball",
    "andrew": "/andrew",
    "angels": "/angels",
    "tweety": "/tweety",
    "flower": "/flower",
    "playboy": "/playboy",
    "hello": "/hello",
    "elizabeth": "/elizabeth",
    "hottie": "/hottie",
    "tinkerbell": "/tinkerbell",
    "charlie": "/charlie",
    "samantha": "/samantha",
    "barbie": "/barbie",
    "chelsea": "/chelsea",
    "lovers": "/lovers",
    "teamo": "/teamo",
    "jasmine": "/jasmine",
    "brandon": "/brandon",
    "666666": "/666666",
    "shadow": "/shadow",
    "melissa": "/melissa",
    "eminem": "/eminem",
    "matthew": "/matthew",
    "robert": "/robert",
    "danielle": "/danielle",
    "forever": "/forever",
    "family": "/family",
    "jonathan": "/jonathan",
    "987654321": "/987654321",
    "computer": "/computer",
    "whatever": "/whatever",
    "dragon": "/dragon",
    "vanessa": "/vanessa",
    "cookie": "/cookie",
    "naruto": "/naruto",
    "summer": "/summer",
    "sweety": "/sweety",
    "spongebob": "/spongebob",
    "joseph": "/joseph",
    "junior": "/junior",
    "softball": "/softball",
    "taylor": "/taylor",
    "yellow": "/yellow",
    "daniela": "/daniela",
    "lauren": "/lauren",
    "mickey": "/mickey",
    "princesa": "/princesa",
    "alexandra": "/alexandra",
    "alexis": "/alexis",
    "jesus": "/jesus",
    "estrella": "/estrella",
    "miguel": "/miguel",
    "william": "/william",
    "thomas": "/thomas",
    "beautiful": "/beautiful",
    "mylove": "/mylove",
    "angela": "/angela",
    "poohbear": "/poohbear",
    "patrick": "/patrick",
    "iloveme": "/iloveme",
    "sakura": "/sakura",
    "adrian": "/adrian",
    "alexander": "/alexander",
    "destiny": "/destiny",
    "christian": "/christian",
    "121212": "/121212",
    "sayang": "/sayang",
    "america": "/america",
    "dancer": "/dancer",
    "monica": "/monica",
    "richard": "/richard",
    "112233": "/112233",
    "princess1": "/princess1",
    "555555": "/555555",
    "diamond": "/diamond",
    "carolina": "/carolina",
    "steven": "/steven",
    "rangers": "/rangers",
    "louise": "/louise",
    "orange": "/orange",
    "789456": "/789456",
    "999999": "/999999",
    "shorty": "/shorty",
    "11111": "/11111",
    "nathan": "/nathan",
    "snoopy": "/snoopy",
    "gabriel": "/gabriel",
    "hunter": "/hunter",
    "cherry": "/cherry",
    "killer": "/killer",
    "sandra": "/sandra",
    "alejandro": "/alejandro",
    "buster": "/buster",
    "george": "/george",
    "brittany": "/brittany",
    "alejandra": "/alejandra",
    "patricia": "/patricia",
    "rachel": "/rachel",
    "tequiero": "/tequiero",
    "7777777": "/7777777",
    "cheese": "/cheese",
    "159753": "/159753",
    "arsenal": "/arsenal",
    "dolphin": "/dolphin",
    "antonio": "/antonio",
    "heather": "/heather",
    "david": "/david",
    "ginger": "/ginger",
    "stephanie": "/stephanie",
    "peanut": "/peanut",
    "blink182": "/blink182",
    "sweetie": "/sweetie",
    "222222": "/222222",
    "beauty": "/beauty",
    "987654": "/987654",
    "victoria": "/victoria",
    "honey": "/honey",
    "00000": "/00000",
    "fernando": "/fernando",
    "pokemon": "/pokemon",
    "maggie": "/maggie",
    "corazon": "/corazon",
    "chicken": "/chicken",
    "pepper": "/pepper",
    "cristina": "/cristina",
    "rainbow": "/rainbow",
    "kisses": "/kisses",
    "manuel": "/manuel",
    "myspace": "/myspace",
    "rebelde": "/rebelde",
    "angel1": "/angel1",
    "ricardo": "/ricardo",
    "babygurl": "/babygurl",
    "heaven": "/heaven",
    "55555": "/55555",
    "baseball": "/baseball",
    "martin": "/martin",
    "greenday": "/greenday",
    "november": "/november",
    "alyssa": "/alyssa",
    "madison": "/madison",
    "mother": "/mother",
    "123321": "/123321",
    "123abc": "/123abc",
    "mahalkita": "/mahalkita",
    "batman": "/batman",
  };
  
  // Create endpoints for each secret code
  Object.entries(secretCodes).forEach(([code, endpoint]) => {
    app.get(endpoint, (req, res) => {
      res.status(200).send(`
      Its not easy,please try again`);
    });
  });














app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

