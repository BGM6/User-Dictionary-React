import React from "react";
import "./style.css";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Employee(props) {
    const classes = useStyles();

    return (
        <div style={{marginLeft: 200, marginRight: 200}}>
            <TableContainer style={{marginTop: 20, marginBottom: 20}} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize:'18px', fontWeight:'bold'}}>ID</TableCell>
                            <TableCell align="right"  style={{fontSize:'18px', fontWeight:'bold'}}>Last Name</TableCell>
                            <TableCell align="right" style={{fontSize:'18px', fontWeight:'bold'}}>First Name</TableCell>
                            <TableCell align="right" style={{fontSize:'18px', fontWeight:'bold'}}>Genre</TableCell>
                            <TableCell align="right" style={{fontSize:'18px', fontWeight:'bold'}}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.employeeList.map((result) => (
                            <TableRow key={result.id}>
                                <TableCell component="th" scope="row">{result.id}</TableCell>
                                <TableCell align="right" >{result.lastName}</TableCell>
                                <TableCell align="right">{result.firstName}</TableCell>
                                <TableCell align="right">{result.genre}</TableCell>
                                <TableCell align="right">{result.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
