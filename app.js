const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "439725208365-ssmqpekpsjkq8kt8dibrl33deci6b1m7.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04BR-3q6SxxtGCgYIARAAGAQSNwF-L9IrfPfPGUppk4g5286rTyxG_qOxvvzikmc598EznkVOdN_7elbR4LFVwWewfx0cgBHKekM";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "adedigbaadedotunemmanuel@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "ADEDXTUN 🤡",
      to: "oliver00g@gmail.com",
      subject: "Sent from Adedxtun using Node.js to access google Gmail API",
      text: "Mr Okeroghene Stanley, I suppose deck you but I go free you",
      html: "<h2>Mr Okeroghene Stanley, I suppose deck you but I go free you</h2>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (err) {
    return err;
  }
}

sendMail()
  .then((result) => console.log("Email sent...", result))
  .catch((err) => console.log(err.message));
// app.get("/", (req, res) => {
//   res.send("Welcome to EmailSender");
// });

// app.listen(3000, () => {
//   console.log("listeninig on 3000");
// });
