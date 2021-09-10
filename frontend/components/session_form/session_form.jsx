import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
    console.log(this.props)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e){
    e.preventDefault();
    const demo =  {username: "Sun", password: "qweqwe"}
    this.props.processDemo(demo).then(this.props.closeModal);;
  }

  signupForm(){
    const loggedIn = this.props.sessionId ? <Redirect to="/" /> : null

    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
        <div onClick={this.props.closeModal} className="close-x">X</div>         
            {this.renderErrors()}
            <div className="signup-input">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>          
            <br/>
            <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="signup-input"
            />
          </label>
            <br/>                  
          <label>First name:
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="signup-input"
            />
          </label>
            <br/>
          <label>Last name:
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input"
            />
          </label>       

            <input className="session-submit" type="submit" value={this.props.formType} />            
          </div>          
        </form>
      </div>
    );
  }

  loginForm(){
    return (
      <div className="login-form-container">
        {/* {loggedIn} */}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* Login 
          <br/>
          Please {this.props.formType} or {this.props.otherForm} */}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>          
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <input className="session-submit" type="submit" value="Demo Login" onClick={this.demoLogin}/>
          </div>
        </form>
      </div>
      
    );
  }

  render() {   
    {    
      if(this.props.formType == 'login'){
        return this.loginForm();
      }
      else{
        return this.signupForm();
      }
    }
  }
}

export default SessionForm;
