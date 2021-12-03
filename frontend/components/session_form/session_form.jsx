import React from 'react';
import { Redirect } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let arr = []
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []

    if (!this.state.username){
      arr.push("Please enter a user name")
    }
    this.setState({usernameError:arr})

    if (this.state.password.length < 6){
      arr1.push("Minimum length is 6")
    }
    this.setState({passwordError:arr1})

    if (!this.state.email.includes("@")){
      arr2.push("Please enter a valid email")
    }
    this.setState({emailError:arr2})

    if (!this.state.first_name){
      arr3.push("Please enter a first name")
    }
    this.setState({firstnameError:arr3})

    if (!this.state.last_name){
      arr4.push("Please enter a last name")
    }
    this.setState({lastnameError:arr4})


    if (this.state.username
      && this.state.password.length >= 6
      && this.state.first_name
      && this.state.last_name 
      && this.state.email.includes("@")){
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
      }

  }


  handleSubmitLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }



  componentWillUnmount() {
    this.props.resetSessionErrors();
  }
  

  renderErrors() {
    // removing dup errors, super janky, find root problem
    const uniq = [... new Set(this.props.errors)]
    return (
      <ul>
        {uniq.map((error, i) => (
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
    // console.log(this.props.errors)

    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
        <div onClick={this.props.closeModal} className="close-x"><ExitToAppIcon fontSize={"large"}/></div>         
            <div >
            <br/>
            <label>Username:
              <input type="text"
                placeholder="AirbnbUser"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <div className='errorsCss'>
            {this.state.usernameError}
            </div>
            <br/>
            <label>Password:
              <input type="password"
                placeholder="Minimum 6 char"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>     
            <div className='errorsCss'>
            {this.state.passwordError}
            </div>     
            <br/>
            <label>Email:   
            <input type="text"
              placeholder="email@gmail.com"
              value={this.state.email}
              onChange={this.update('email')}
              className="signup-input"
            />
          </label>
          <div className='errorsCss'>
            {this.state.emailError}
            </div>
            <br/>                  
          <label>First name:
            <input type="text"
              placeholder="Jane"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="signup-input"
            />
          </label>
          <div className='errorsCss'>
            {this.state.firstnameError}
            </div>
            <br/>
          <label>Last name:
            <input type="text"
              placeholder="Doe"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input"
            />
          </label>  
          <div className='errorsCss'>
            {this.state.lastnameError}
            </div>   
            <div className='errorsCss'>
            {this.renderErrors()}
            </div>  
            <div className="signup_buttons">

         
                <input className="session-submit" type="submit" value='Sign Up' />     
                <input className="session-submit" type="submit" value="Demo Login" onClick={this.demoLogin}/>  
            </div>

          </div>          
        </form>
      </div>
    );
  }

  loginForm(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmitLogin} className="login-form-box">     
         
          <div onClick={this.props.closeModal} className="close-x"><CancelIcon/></div>
          <div className="login-form">
            <br/>
            <label>Username:
              <input className='blank' type="text"
                placeholder="qwe"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input className='blank' type="password"
                placeholder="qweqwe"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>          
            <br/>
            {this.renderErrors()}
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
