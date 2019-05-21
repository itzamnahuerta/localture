import React, { Component } from 'react';
import './styles/App.scss';
import { login } from './services/authApi';
import { addUser } from './services/usersApi';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header'


class App extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      error:false,
      username: '',
      password: '',
      createdUser: false,
      city: '',
      country: '',
      email: '',
      first_name: '',
      last_name: '',
      isAuthenticated: false

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
        console.log('ahhhhhh')
        this.setState({
          isAuthenticated: true
        })
    }
    catch (e) {
        console.log(e.message);
    }
  }

  handleSignUp = async(e) => {
    e.preventDefault();
    if(!this.state.username || !this.state.password || !this.state.city || !this.state.country || !this.state.first_name || !this.state.last_name || !this.state.email){
        alert('Please fill in all fields')
    }
    else {
        let newUser = {
            username: this.state.username,
            password: this.state.password,
            home_area: `${this.state.city}, ${this.state.country}`,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email

        }
        await addUser(newUser);
        console.log('user created')
        this.setState({createdUser: true});
        this.setState({isAuthenticated: true});
    }
}


  render() {
    return (
      <div className="App">
        <h1> localture* </h1>
        <Header />
        <Dashboard 
          isAuthenticated={this.state.isAuthenticated}
          handleLoginFormChange={this.handleLoginFormChange}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          username={this.state.username}
          password={this.state.password}
          country={this.state.country}
          city={this.state.city}
          email={this.state.email}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          formToggle={this.formToggle}
        />
  
      </div>
    );
  }
}

export default App;


