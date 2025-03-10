// const User = require("../models/User");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// const createUser = async (req, res) => {
//   const { name, email, pasword } = req.body;

//   try {
//     const user = new User({ name, email, pasword });
//     await user.save();
//     res.send(user);
//     const token = jwt.sign({ email }, process.env.SECRET_KEY, {
//       expiresIn: "1h",
//     });
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "strict",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// };
// module.exports = {
//   createUser,
// };

const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { name, email, password } = req.body; // تصحيح "pasword" إلى "password"

  try {
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getUser,
};
