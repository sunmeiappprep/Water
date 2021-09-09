loginForm(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">        
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