import nc from "next-connect";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "SendinBlue",
  auth: {
    user: process.env.SENDINBLUE_USER,
    pass: process.env.SENDINBLUE_PASS,
  },
});

const handler = nc({
  onError: (err, req, res, next) => {
    serverError(res);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.post((req, res) => {
  const { name, email, message } = req.body;
  let messageHtml = `
      <div>
          <h3>Name: ${name}</h3>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
      </div>`;
  transporter
    .sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_USER,
      subject: "Message from your portfolio",
      html: messageHtml,
    })
    .then(() => {
      res.send("Message sent to admin email");
    })
    .catch(() => {
      res.send("Something is wrong");
    });
});

handler.get((req, res) => {
  res.status(200).json("I am the blog API");
});

export default handler;
