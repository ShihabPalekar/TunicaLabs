import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import AddNew from "./Components/AddNew"
import StudentTable from "./Components/StudentTable"
import LogIn from "./Components/LogIn"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      isLoggedIn: false,
      loginID: "", password: "",
      errLogInID: false, errPassword: false
    }
  }

  handleLogInDetails = input => e => {
    this.setState({ [input] : e.target.value})
  }

  onLogIn = () => {
    const { loginID, password } = this.state
    if (loginID === ""){
      this.setState({ errLogInID: true })
    } else if (password === ""){
      this.setState({ errPassword: true })
    } else {
      this.setState({ isLoggedIn: true })
    }
  }

  render(){
    if (!this.state.isLoggedIn) {
      return(
        <LogIn 
            onLogIn = {this.onLogIn}
            handleLogInDetails = {this.handleLogInDetails}
            errLogInID = {this.state.errLogInID}
            errPassword = {this.state.errPassword}
        />
      )
    } else {
      return(
        <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={StudentTable} />
              <Route path="/add" component={AddNew} />
          </Switch>
        </Router>
      )  
    }
  }
} 

export default App