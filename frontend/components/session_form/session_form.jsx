import React from 'react';
import { Redirect } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
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


  componentWillUnmount() {
    this.props.resetSessionErrors();
  }
  
  renderErrors() {
    return(
      <ul className='errorsCss'>
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
        {this.renderErrors()}
        <div onClick={this.props.closeModal} className="close-x"><CancelIcon/></div>         
            <div >
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
            <label>Email:<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>          
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
          <label>Last name:<span>&nbsp;</span>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input"
            />
          </label>       
            <input className="session-submit" type="submit" value='Sign Up' />     
            <input className="session-submit" type="submit" value="Demo Login" onClick={this.demoLogin}/>  
          </div>          
        </form>
      </div>
    );
  }

  loginForm(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">     
          {this.renderErrors()}
          <div onClick={this.props.closeModal} className="close-x"><CancelIcon/></div>
          <div className="login-form">
            <br/>
            <label>Username:
              <input className='blank' type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input className='blank' type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>          
            <br/>

            <input className="session-submit" type="submit" value='Login' />
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
