signupForm(){
    const loggedIn = this.props.sessionId ? <Redirect to="/" /> : null

    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
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
            <label>Email&nbsp&nbsp&nbsp&nbsp&nbspd:
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