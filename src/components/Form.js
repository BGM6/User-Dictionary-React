import React from "react";
import "./style.css";

function Form (props) {
    return (
        <div>
            <h1>Employee Directory</h1>
            <h3>Enter the Employee's name you would like to search</h3>

            <div className="entertext">
                <form className="form">

                    <input
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Employee's Name"
                    />
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Search</button>
                </form>
            </div>
        </div>
    );

}

export default Form;
