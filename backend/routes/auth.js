const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
    });

    // Save user to the database
    await user.save();

    // Generate JWT token (for future authentication if needed)
    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(201).json({ token, msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({message: 'Invalid email or password'});
        // alert("Invalid credentials");
      }
  
      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
        // alert("Invalid credentials");

      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      // Return the token
  //     res.json({ token });
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server error');
  //   }
  // });

  const qrCodePath = `http://localhost:3001/files/rx.pdf`;
  const qrCodeFilePath = `./qrcodes/${user._id}_qrcode.png`;


  await QRCode.toFile(qrCodeFilePath, qrCodePath);
  
  res.json({ token, qrCodePath: `http://localhost:3001/qrcodes/${user._id}_qrcode.png` });
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server error');
}
});

module.exports = router;
