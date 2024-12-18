import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 my-5">
          <img src="media/images/landing.png" style={{ width: "40rem" }} alt="err" />
        </div>
        <div className="col-6 text-center">
          <div className="container mt-5">
            <h1 className="mb-2">Login</h1>
            <p className="text-muted">Login to your account</p>
            <form>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="username@email.com"
                  className="form-control"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <p className="mt-3">
                Already have an account?{" "}
                <Link className="nav-link active" to="/signup" style={{ color: 'blue',marginRight:"2rem" }}>
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
