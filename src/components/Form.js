import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Form(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Employee Directory</h1>
            <h3>Search Employee's by last name</h3>

            <div className="entertext">
                <form className="form">

                    <TextField id="filled-basic" label="Name" variant="filled"
                               value={props.firstName}
                               name="firstName"
                               onChange={props.handleInputChange}
                               type="text"
                               placeholder="Employee's Name"
                    />

                    <Button
                        style={{marginLeft: '10px'}}
                        onClick={props.handleFormSubmit}
                        variant="contained"
                        color="Secondary">
                        Search
                    </Button>

                </form>
            </div>
        </div>
    );

}

export default Form;
