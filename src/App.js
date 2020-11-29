import React, {Component} from "react";
import Employee from "./components/Employee";
import employeeList from "./FakeUserData/Employee.json";
import Form from "./components/Form";
import Button from '@material-ui/core/Button';


class App extends Component {

    state = {
        sorted: employeeList,
        firstName: "",
        lastName: ""
    }
    handleInputChange = event => {

        const value = event.target.value;
        const name = event.target.name;


        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const findEmployee = new Array(...employeeList)

        // eslint-disable-next-line array-callback-return
        const newArray = findEmployee.filter(employee => {
            if (employee.lastName === this.state.firstName) {
                return employee
            }
        })
        //setState
        this.setState({sorted: newArray})

        this.setState({
            firstName: "",
            lastName: ""
        });
    };
    sortByFirstName = () => {
        let unsorted = new Array(...employeeList)
        let sorted = unsorted.sort((a, b) => {
            return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
        })
        this.setState({sorted: sorted})
    }

    sortByLastName = () => {
        let unsorted = new Array(...employeeList)
        let sorted = unsorted.sort((a, b) => {
            return (a.lastName > b.lastName ) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)
        })
        this.setState({sorted: sorted})
    }

    render() {
        return (

            <div style={{textAlign: "center"}}>
                <Form
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <Button
                    style={{marginLeft: '10px'}}
                    onClick={this.sortByFirstName}
                    variant="contained"
                    color="Secondary">
                    Sort by First Name
                </Button>
                <Button
                    style={{marginLeft: '10px'}}
                    onClick={this.sortByLastName}
                    variant="contained"
                    color="Secondary">
                    Sort by Last Name
                </Button>
                <Employee employeeList={this.state.sorted}/>
            </div>
        )
    }
}

export default App;
