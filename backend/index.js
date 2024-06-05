require("dotenv").config();
const express = require("express");
const { Resend } = require("resend");
const app = express();

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
      from: "MH Shuvo <noreply@mhshuvoalways.xyz>",
      to: email,
      subject: `${name} will contact you soon`,
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
