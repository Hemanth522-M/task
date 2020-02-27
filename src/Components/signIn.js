import React, {Component} from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            error: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSignIn = () => {
        var EmailValue = localStorage.getItem("Email");
        var PasswordValue = localStorage.getItem("Password");
        if(this.state.Email === EmailValue && this.state.Password === PasswordValue) {
            window.location.pathname= "/questions"    
        }
        else {
            this.setState({
                error: "Enter details are wrong"
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.error}</h2>
                <div>
                    Email : <input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <br />
                    Password : <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="button" onClick={this.handleSignIn}>Sign In</button>
                </div>
            </div>
        )
    }
}

export default SignIn;