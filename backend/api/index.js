require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { Resend } = require("resend");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = 5000;
const resend = new Resend(process.env.RESEND_KEY);

app.post("/api", (req, res) => {
  const { name, email, message } = req.body;
  const messageHtml = `
        <div>
            <h3>Name: ${name}</h3>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        </div>`;
  resend.emails
    .send({
      from: "Portfolio <noreply@mhshuvo.com>",
      to: "mhshuvoalways@gmail.com",
      subject: `A message from my portfolio!`,
      html: messageHtml,
    })
    .then(() => {
      res.send("Message sent to admin email");
    })
    .catch(() => {
      res.send("Something is wrong");
    });
});

app.get("/", (req, res) => {
  res.send("I am the API");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
