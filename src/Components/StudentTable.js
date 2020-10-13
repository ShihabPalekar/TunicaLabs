import React from "react"
import studentData from "./studentData"
import MaterialTable from "material-table"

class StudentTable extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.setState({ data: studentData })
    }

    render(){
        const { data } = this.state;
        const columns = [
            {title: "Name", field: "name"},
            {title: "D.O.B", field: "dob"},
            {title: "School", field: "school"},
            {title: "Class", field: "standard" },
            {title: "Division", field: "division"},
            {title: "Status", field: "status"}
        ]

        return(
            <div className="student-table">
                <MaterialTable 
                    title = "Student Table"
                    data = {data}
                    columns = {columns}
                />
            </div>
        )
    }
}

export default StudentTable