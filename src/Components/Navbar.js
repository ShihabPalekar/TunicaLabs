import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <nav>
                <h2>LOGO</h2>
                <ul className="nav-links">
                    <Link to= "/add">
                        <li>Add New</li>
                    </Link>
                    <Link to= "/">
                        <li>Student Table</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar