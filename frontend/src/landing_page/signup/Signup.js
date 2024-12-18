import React from "react";
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div className="container ">
      <div className="row d-flex">
        <div className="col-6 my-5">
          <img src="media/images/landing.png" style={{ width: "40rem" }} />
        </div>
        <div className="col-6 text-center ">
          <div class="container mt-5 ">
            <h1 class="mb-2 ">Signup now</h1>
            <p className="text-muted">signup to continue</p>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="form-control"
                  id="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="username@email.com"
                  class="form-control"
                  id="email"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"  placeholder="Enter your  password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                 Confirm password
                </label>
                <input  placeholder="confirm your password"
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Signup now
              </button>

              <p>
                Already have an account?{" "} <Link to="/login">Login</Link>
               
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
