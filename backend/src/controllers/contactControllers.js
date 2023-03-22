const transporter = require("../services/mailer");

exports.sendMail = async (req, res) => {
  const { email, subject, html } = req.body;
  try {
    await transporter.sendMail({
      from: "fannykaugumi@gmail.com",
      to: email,
      subject,
      html,
    });
    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while sending the message" });
  }
};
