import React from "react";
import "./style.css";

function employee (props) {
    return (
        <div>
            {props.employeeList.length ? (
                <ul className="list-group">

                    {props.employeeList.map(result => (
                        <li className="list-group-item" key={result.id}>
                            <div id="name"><b>{result.firstName} {result.lastName}</b> ({result.genre})</div>
                            <div id="other"><i>Contact:</i> {result.email} </div>
                        </li>
                    ))}
                </ul >
            ) : (
                <h2>Employee does not exist in the database</h2>
            )}
        </div>
    )
}

export default employee;
