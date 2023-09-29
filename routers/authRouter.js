const express = require("express");
const jwt = require("jsonwebtoken");
const usersWS = require("../DAL/usersWS");

const router = express.Router();
//Entry point: http://localhost:3000/auth/login

router.post("/login", (req, res) => {
  const { username, email } = req.body; //req.body brings 'loginData' from loginPage.html where body: JSON.stringify(loginData)

  if (req.body) {
    // checks if username and email are present
    const users = usersWS.getAllUsers();
    const userName = users.find((user) => user.username === username);
    const userEmail = users.find((user) => user.email === email);
    console.log(existingUser);

    const accessToken = jwt.sign(
      { username: userName, email: userEmail },
      process.env.ACCESS_SECRET_TOKEN // taking data from env file
      //{expiresIn: '1h'}
    );
    res.send({ accessToken });
  }
  res.status(401).send("Unauthorized");
});

module.exports = router;
