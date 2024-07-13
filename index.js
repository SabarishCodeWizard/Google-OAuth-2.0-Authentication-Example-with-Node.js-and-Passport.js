const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const path = require("path");
require("dotenv").config();
require("./passport-setup");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/succeed", (req, res) => res.send("Succeed!"));
app.get("/failed", (req, res) => res.send("Failed!"));

// GET /auth/google
app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// GET /auth/google/callback
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.post("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session = null; // Clear the session
    res.redirect('/'); // Redirect to login page
  });
});

app.get("/user", (req, res) => {
  res.send({ user: req.user });
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
