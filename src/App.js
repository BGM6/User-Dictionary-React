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

    let value = event.target.value;
    const name = event.target.name;


    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let findFirstName = new Array(...employeeList)
    console.log(findFirstName)
    let filtersReturnNewArrays = findFirstName.filter(employee=>{
      console.log(employee.firstName)
      console.log(this.state.firstName)

      console.log(employee.firstName.includes(this.state.firstName))
      return employee.firstName.includes(this.state.firstName.toLowerCase().trim())
          || employee.lastName.includes(this.state.firstName.toLowerCase().trim())
    })
    console.log(filtersReturnNewArrays)
    //setState
    this.setState({sorted:filtersReturnNewArrays})



    this.setState({
      firstName: "",
      lastName: ""
    });
  };
  sortName = ()=>{
    let unsorted = new Array(...employeeList)
    console.log(unsorted)
    let sorted = unsorted.sort((a,b)=>{
      console.log(a.firstName, b.firstName)
      console.log(b.firstName - a.firstName)
      return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
    })
    this.setState({sorted:sorted})
  }

  render(){
    return(

        <div style={{textAlign: "center"}}>

          <Form
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
          />



          <Button
              style={{marginLeft: '10px'}}
              onClick={this.sortName}
              variant="contained"
              color="Secondary">
            Sort by First Name
          </Button>

          <Employee employeeList={this.state.sorted}/>

        </div>
    )
  }
}
export default App;
