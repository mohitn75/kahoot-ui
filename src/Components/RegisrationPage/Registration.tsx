import React from "react"
import '../../Assets/login.css'

const Registration = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Registration</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Re-Enter Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="register-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Registration;
