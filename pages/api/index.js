import nc from "next-connect";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

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

handler.get((req, res) => {
  res.status(200).json("I am API");
});

export default handler;
