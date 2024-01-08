// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();

// // middleware
// app.use(express.json());
// app.use(cors());

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "business@victoriaspainting.com",
//     pass: "rujvzjidxugcerqu",
//   },
// });

// transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
// });

// app.post("/send", function (req, res) {
//   let mailOptions = {
//     from: `${req.body.mailerState.email}`,
//     to: "business@victoriaspainting.com",
//     subject: `Message from: ${req.body.mailerState.email}`,
//     text: `
//     Name: ${req.body.mailerState.name}
//     Email: ${req.body.mailerState.email}
//     Phone: ${req.body.mailerState.phone}
//     Services Booked: ${req.body.mailerState.select}
//     Message:
//     ${req.body.mailerState.message}`,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("== Message Sent ==");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
