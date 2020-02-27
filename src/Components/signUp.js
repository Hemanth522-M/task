import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            error: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = () => {
        if(this.state.Name === "") {
            this.setState({
                error: "Name field is empty"
            })
        }
        else {
            localStorage.setItem("Name", this.state.Name);

        }
        if(this.state.Email === "") {
            this.setState({
                error: "Email is empty"
            })
        }
        else {
            localStorage.setItem("Email", this.state.Email);

        }
        if(this.state.Password === "") {
            this.setState({
                error: "Password is empty"
            })
        }
        else {
            localStorage.setItem("Password", this.state.Password);
        }
        if(this.state.Name !== "" && this.state.Email !== "" && this.state.Password !== "") {
            window.location.pathname="/signIn"
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.error}</h2>
                <div>
                    Name : <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} />
                    <br />
                    Email : <input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <br />
                    Password : <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="button" onClick={this.handleSignup}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default SignUp;