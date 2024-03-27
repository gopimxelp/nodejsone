const Signup = require("../models/Signup");

const createAccount = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const signup = new Signup({
      username,
      email,
      password,
      phone,
    });
    await signup.save();
    res.status(201).json(signup);
  } catch (error) {
    console.log("error is occured ", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports={createAccount}
