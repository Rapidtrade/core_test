import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth } from 'rapidtradecore';
console.log(Auth);
class App extends Component {
  constructor() {
    super();
    this.state = {
      "email" : "",
      "password" : ""
    }
  }

  _onEmailChange(event){
    this.setState({
      email : event.target.value
    })
  }

  _onPasswordChange(event){
    this.setState({
      password : event.target.value
    })
  }

  _loginClicked(){
    var _auth = new Auth();
    _auth.VerifyUser(`http://api.rapidtrade.biz/rest2/Users/VerifyPassword?userID=${this.state.email}&password=${this.state.password}&AppName=RapidTrade&format=json`, { userid: this.state.email, password: this.state.password })
    .then((data) => {
      console.log(data);
      alert(JSON.stringify(data));
    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <div style={{margin : 20}}>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" onChange={this._onEmailChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" onChange={this._onPasswordChange.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div onClick={this._loginClicked.bind(this)} className="btn btn-primary">Log In</div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
