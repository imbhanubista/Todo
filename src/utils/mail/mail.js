const nodeMailer = require("nodemailer");

// function for mail sender
const mail = (to, subject, html) => {
  // sender detail
  const senderDetails = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // now receiver details
  const receiverDetails = {
    from: process.env.USER,
    to,
    subject,
    html,
  };
  senderDetails.sendMail(receiverDetails, function (error, info) {
    if (error) {
      console.log("Something went wrong while sending email !!!");
    } else {
      console.log("Email sent to :" + info.response);
    }
  });
};


// exporting the mail sender function
module.exports = mail