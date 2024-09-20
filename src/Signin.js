import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/signin', {
        email,
        password,
        
      });

      // Save JWT to localStorage
      localStorage.setItem('token', response.data.token);
      setQrCode(response.data.qrCodePath);
      setError('') // Update qrCode with the QR code path
    } catch (err) {
      console.error(err);
      setError('Invalid Email or Password')
      // Handle error
    }
    
    
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rx Access Card - Sign In</title>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
                font-family: Arial, sans-serif;
                background-image: url("https://swathi93.neocities.org/project/img/img.jpg.jpg");
                background-size: square;
                background-position: center;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: rgba(84, 79, 79, 0.8);
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 1px 2px rgba(230, 226, 226, 0.1);
                width: 300px;
            }
            input[type="text"],
            input[type="password"],
            input[type="submit"] {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            input[type="submit"] {
                background-color: #007bff;
                color: #fff;
                cursor: pointer;
            }
            input[type="submit"]:hover {
                background-color: #0056b3;
            }
            .error {
                color: red;
                margin-top: 10px;
            }
          `,
        }}
      />
      <div className="container">
        <h2>Rx Access Card</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
        </form>

        {qrCode && (
        <div>
          <h3>Scan this QR code to download your PDF:</h3>
          <img src={qrCode} alt="QR Code" />
        </div>
      )}

        {error && <p className="error">{error}</p>}
        <p>
          Don't have an account? 
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
