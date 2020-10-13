import React from "react"
import studentData from "./studentData"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from "react-router-dom"
import { Redirect } from "react-router"

class AddNew extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "", dob: "", school: "", standard: "", division: "", status: "",
            hpltxtName: "", hlptxtDOB: "", hlptxtSchool: "", hpltxtStandard: "", hpltxtDivision: "", hpltxtStatus: "",
            errName: false, errDOB: false, errSchool: false, errStandard: false, errDivision: false, errStatus: false,
            redirect: false
        }
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value })
    }

    onSubmit = () => {
        const { name, dob, school, standard, division, status } = this.state;
        if (name === ""){
            this.setState({ hpltxtName: "Please enter your name", errName: true})
        } else if (dob === "") {
            this.setState({ hpltxtDOB: "Please enter your birth date", errDOB: true})
        } else if (school === "") {
            this.setState({ hpltxtSchool: "Please enter your school's name", errSchool: true})
        } else if (standard === "") {
            this.setState({ hpltxtStandard: "Please select an option", errStandard: true})
        } else if (division === "") {
            this.setState({ hpltxtDivision: "Please select an option", errDivision: true})
        } else if (status === "") {
            this.setState({ hpltxtStatus: "Please select an option", errStatus: true})
        } else {
            studentData.push({name, dob, school, standard, division, status})
            this.setState({ redirect: true })
        }
    }

    render(){
        if (this.state.redirect) {
            return( <Redirect to="/" /> )
        } else {
            return(
                <MuiThemeProvider>
                <Card className="add-new-card">
                    <TextField 
                        fullWidth
                        name= "name"
                        label = "Enter your full name"
                        onChange={this.handleChange("name")}
                        helperText={this.state.hpltxtName}
                        error={this.state.errName}
                    />
                    <TextField 
                        fullWidth
                        type="date"
                        name="dob"
                        label="Birth date"
                        onChange={this.handleChange("dob")}
                        helperText={this.state.hpltxtDOB}
                        error={this.state.errDOB}
                    />
                    <TextField 
                        fullWidth
                        name="school"
                        label="Enter your school name"
                        onChange={this.handleChange("school")}
                        helperText={this.state.hpltxtSchool}
                        error={this.state.errSchool}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Class</InputLabel>
                        <Select
                            onChange={this.handleChange("standard")}
                            helperText={this.state.hpltxtStandard}
                            error={this.state.errStandard}    
                        >
                            <MenuItem value={"1"}>1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                            <MenuItem value={"3"}>3</MenuItem>
                            <MenuItem value={"4"}>4</MenuItem>
                            <MenuItem value={"5"}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl fullWidth>
                        <InputLabel>Division</InputLabel>
                        <Select
                            onChange={this.handleChange("division")}
                            helperText={this.state.hpltxtDivision}
                            error={this.state.errDivision}    
                        >
                            <MenuItem value={"A"}>A</MenuItem>
                            <MenuItem value={"B"}>B</MenuItem>
                            <MenuItem value={"C"}>C</MenuItem>
                        </Select>
                    </FormControl>
                    <br /> <br />
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup row 
                            onChange={this.handleChange("status")}
                            helperText={this.state.hpltxtStatus}
                            error={this.state.errStatus}                            
                        >
                            <FormControlLabel value="Active" control={<Radio />} label="Active"/>
                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive"/>
                        </RadioGroup>
                    </FormControl>
                    <div className="submitBtn">
                        <Button color="primary" variant="contained" onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </div>
                </Card>
                </MuiThemeProvider>
            )
        }
    }
}

export default AddNew