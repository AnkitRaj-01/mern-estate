import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../utils/error.js";


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate input fields
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Hashing the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    // res.status(500).json(error.message)

    next(error);
    // next(errorHandler(550, "Error from manual function"));

  }
//    console.log(req.body);
//    res.json("Success");
};
