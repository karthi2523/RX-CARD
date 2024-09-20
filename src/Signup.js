// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();
  

//   const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3001/', name,email,password)
//         .then(result => console.log(result))
//         .catch(err=> console.log(err))
//   }

//   return (
//     <div>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Rx Access Card - Sign Up</title>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             body {
//                 font-family: Arial, sans-serif;
//                 background-image: url("https://swathi93.neocities.org/project/img/img.jpg.jpg");
//                 background-size: square;
//                 background-position: center;
//                 margin: 0;
//                 padding: 0;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 height: 100vh;
//             }
//             .container {
//                 background-color: rgba(84, 79, 79, 0.8);
//                 padding: 40px;
//                 border-radius: 12px;
//                 box-shadow: 0 1px 2px rgba(230, 226, 226, 0.1);
//                 width: 300px;
//             }
//             input[type="text"],
//             input[type="email"],
//             input[type="password"],
//             input[type="submit"] {
//                 width: 100%;
//                 padding: 10px;
//                 margin: 10px 0;
//                 border: 1px solid #ccc;
//                 border-radius: 5px;
//             }
//             input[type="submit"] {
//                 background-color: #007bff;
//                 color: #fff;
//                 cursor: pointer;
//             }
//             input[type="submit"]:hover {
//                 background-color: #0056b3;
//             }
//           `,
//         }}
//       />
//       <div className="container">
//         <h2>Rx Access Card - Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Patient Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             autoComplete="name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="email"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="password"
//             required
//           />
          
//           <input type="submit" onClick={handleSubmit} value="Sign Up" />
//         </form>

//         <p>
//           Already have an account? <Link to="/">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from './axios' ;  // Import the signup function

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password)
      .then((result) => {
        console.log(result);
        // You can navigate to the login page after successful signup
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rx Access Card - Sign Up</title>
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
            input[type="email"],
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
          `,
        }}
      />
      <div className="container">
        <h2>Rx Access Card - Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            required
          />
          <input type="submit" value="Sign Up" />
        </form>

        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
