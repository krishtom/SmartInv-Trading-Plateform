import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [isLoading, setIsLoading] = React.useState(false);
 const [confirmPassword, setConfirmPassword] = React.useState("");

 const navigate = useNavigate();

 const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  const body = {
   username,
   password,
   email,
   confirmPassword,
  };
  try {
   const { data } = await axios.post("http://localhost:3002/register", body);
   console.log(data.token);

   let id = setTimeout(() => {
    navigate("/login");
   }, 3000);

   alert("Signup successful!.. Redirecting to login page... in 3 seconds");

   clearTimeout(id);

   navigate("/login");
  } catch (error) {
   let message = error?.response?.data?.message || error?.response?.data?.error || error.message;
   message = "Signup failed..." + message;
   alert(message);
  } finally {
   setIsLoading(false);
  }
 };

 return (
  <div className='container '>
   <div className='row d-flex'>
    <div className='col-6 my-5'>
     <img src='media/images/landing.png' style={{ width: "40rem" }} alt='landing img' />
    </div>
    <div className='col-6 text-center '>
     <div class='container mt-5 '>
      <h1 class='mb-2 '>Signup now</h1>
      <p className='text-muted'>signup to continue</p>
      <form onSubmit={handleSignup}>
       <div class='mb-3'>
        <label for='username' class='form-label'>
         Username
        </label>
        <input type='text' placeholder='Enter Your Username' class='form-control' id='username' required value={username} onChange={(e) => setUsername(e.target.value)} />
       </div>

       <div class='mb-3'>
        <label for='email' class='form-label'>
         Email
        </label>
        <input type='text' placeholder='username@email.com' class='form-control' id='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
       </div>

       <div class='mb-3'>
        <label for='password' class='form-label'>
         Password
        </label>
        <input type='password' placeholder='Enter your  password' class='form-control' id='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>

       <div class='mb-3'>
        <label for='password' class='form-label'>
         Confirm password
        </label>
        <input placeholder='confirm your password' type='password' class='form-control' id='password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
       </div>
       <button type='submit' class='btn btn-primary' disabled={isLoading}>
        Signup now
       </button>

       <p>
        Already have an account? <Link to='/login'>Login</Link>
       </p>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Signup;
