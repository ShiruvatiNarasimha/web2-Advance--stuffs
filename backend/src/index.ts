import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;



app.post("/generate-otp", (req: Request, res: Response) => {
  const email = req.body.email;
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

});

app.post("/reset-password", (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    res
      .status(400)
      .json({ message: "Email, OTP, and new password are required" });
    return;
  }
  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email]; // Clear the OTP after use
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
});
