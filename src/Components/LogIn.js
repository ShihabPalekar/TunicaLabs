import React from "react"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <MuiThemeProvider>
            <Card className="log-in-card">
                <TextField
                    name="loginID" 
                    label="Enter your log-in ID"
                    onChange={this.props.handleLogInDetails("loginID")}
                    error = {this.props.errLogInID}
                    fullWidth
                />
                <br /> <br />
                <TextField 
                    name="password"
                    label="Enter your password"
                    type="password"
                    onChange={this.props.handleLogInDetails("password")}
                    error = {this.props.errPassword}
                    fullWidth
                /> <br /> <br />
                <div className="loginBtn">
                    <Button color="primary" variant="contained" onClick={this.props.onLogIn}>
                        Log In
                    </Button>
                </div>
            </Card>   
            </MuiThemeProvider>
        )
    }
}

export default LogIn