const express = require("express");
const jwt = require("jsonwebtoken");
const usersWS = require("../DAL/usersWS");

const router = express.Router();
//Entry point: http://localhost:3000/auth/login

router.post("/login", (req, res) => {
  const { username, email } = req.body;

  if (req.body) {
    const users = usersWS.getAllUsers();
    const userName = users.find((user) => user.username === username);
    const userEmail = users.find((user) => user.email === email);
    console.log(existingUser);

    const accessToken = jwt.sign(
      { userame: userName, email: userEmail },
      process.env.ACCESS_SECRET_TOKEN
      //{expiresIn: '1h'}
    );
    res.send({ accessToken });
  }
  res.status(401).send("Unauthorized");
});

module.exports = router;
