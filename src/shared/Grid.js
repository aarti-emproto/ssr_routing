import React, { Component } from 'react';
// import style from './common.css';




class Login extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="container-fluid top-level">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                <img src="https://i.ya-webdesign.com/images/people-icon-png.png" alt="" className="login-img" />
                <form className="form-container">
                    <h4 className="text-center font-weight-bold">Login Form</h4>
                    <div className="form-group">
                        <input  
                            className="form-control" 
                            placeholder = 'Username'
                            onChange = {(e) => setCredentials({
                                username: e.target.value,
                                password
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-control"
                        placeholder = "Password"
                        type="password"
                        onChange = {(e) => setCredentials({
                            username,
                            password:e.target.value
                        })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}

export default Login