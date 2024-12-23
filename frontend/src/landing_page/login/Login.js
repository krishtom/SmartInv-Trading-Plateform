import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [isLoading, setIsLoading] = React.useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();

  setIsLoading(true);

  const body = {
   username,
   password,
  };

  try {
   const { data } = await axios.post("http://localhost:3002/login", body);
   alert("Login successful!.. Redirecting to dashboard");
   window.location.href = "http://localhost:3000/dashboard?token=" + data.token;
  } catch (error) {
   let message = error?.response?.data?.message || error?.response?.data?.error || error.message;
   message = "Login failed..." + message;
   alert(message);
  } finally {
   setIsLoading(false);
  }
 };
 return (
  <div className='container'>
   <div className='row d-flex'>
   <div className="col-6 my-5 d-none img-fluid d-md-block">
          <img className="opacity-75 img-fluid d-none d-md-block" src="media/images/loginPage.jpg" style={{ width: "40rem" }} alt="err" />
        </div>
    <div className='col-6 text-center'>
     <div className='container mt-5'>
      <h1 className='mb-2'>Login</h1>
      <p className='text-muted'>Login to your account</p>
      <form onSubmit={handleLogin}>
       <div className='mb-3'>
        <label for='username' className='form-label'>
         Username
        </label>
        <input type='text' placeholder='username@email.com' className='form-control' id='username' required value={username} onChange={(e) => setUsername(e.target.value)} />
       </div>

       <div className='mb-3'>
        <label for='password' className='form-label'>
         Password
        </label>
        <input type='password' placeholder='Enter your password' className='form-control' id='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>
       <button type='submit' className='btn btn-primary' disabled={isLoading}>
        Login
       </button>

       <p className='mt-3'>
        Already have an account?{" "}
        <Link className='nav-link active' to='/signup' style={{ color: "blue", marginRight: "2rem" }}>
         Signup
        </Link>
       </p>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Login;
