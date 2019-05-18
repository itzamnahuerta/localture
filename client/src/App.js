import React, { Component } from 'react';
import './styles/App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import { login } from './services/authApi';

// ~~~~~~~~~~~~~~~~~~~~~~~~
// import LoginForm from './components/LoginForm/LoginForm.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      error:false,
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLoginFormChange = (e) => {

    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({
        [fieldName] : value,
        error: false
    })
  }

  async handleLogin() {
    try {
        const { username, password} = this.state;
        console.log(username, password)
        const response = await login({username, password});
        console.log(response);
        this.setState({
            authenticated: true
        })
    }
    catch (e) {
        console.log(e.message);
    }
  }


  render() {
    return (
      <div className="App">
        <h1> localture* </h1>
        <LandingPage
          authenticated={this.state.authenticated}
          handleLoginFormChange={this.handleLoginFormChange}
          handleLogin={this.handleLogin}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default App;


