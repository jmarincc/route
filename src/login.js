import React, { Component } from "react";
import "./App.css";

class FormLogin extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            login: this.refs.login.value,
            password: this.refs.password.value       
        })
    }
    constructor (props){
        super(props);
        this.state = {login: '', password: ''};
    }
        
    render(){
        return(
            <div className="FormLogin">
                <header className="FormLogin-header">
                    <h1 className="FormLogin-title">Login Form</h1>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Login</label></div>
                        <div>
                            <input type="text" ref="login"/>
                        </div>
                        <div><label>Password</label></div>
                        <div>
                            <input type="text" ref="password"/>
                        </div>
                        <div>
                            <input type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
                <div>
                    Login: {this.state.login},
                    Password: {this.state.password}
                </div>
            </div>
        );
    }

}
export default FormLogin;
