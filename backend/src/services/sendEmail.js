const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "fannykaugumi@gmail.com",
    to: "fanny_bonnet@hotmail.fr",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.info(info);
  }
);
