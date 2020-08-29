import React, {
  Component
} from 'react';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import axios from 'axios';


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false
    }
  }

  validateUser = (user) => {
    axios.post("https://api-stage.kyte.app/network-app/oauth/token", {
        auth: {
          username: user.email,
          password: user.password,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "grant_type": "password"
        }
      })
      .then(res => {
        if (res.status <= 300) {
          this.setState({
            isAuth: true
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const {
      isAuth
    } = this.state
    if (isAuth) {
      return <Dashboard / >
    } else {
      return <LoginPage validateUser = {
        this.validateUser
      }
      / >
    }
  }
}

export default App