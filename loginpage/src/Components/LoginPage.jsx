import React, { Component } from "react";
import "./LoginPage.css";

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
      const {validateUser} = this.props
    return (
      <div className="image">
        <div className="form">
          <div className="box">
            <p className="welcome">Welcome to</p>
            <img src="/logo.svg" className="logo" />
            <p className="content">
              We make easy for everyone to manage logistics operations
            </p>
            <form>
              <label  className="emailLabel">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="email"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <label  className="emailLabel">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="email"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              <input type="checkbox" className="checkbox" />
              <p className="remember">Remember me</p>
              <p className="forgot">Forgot password?</p>
              <button className="login" onClick={()=>validateUser(this.state)}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
