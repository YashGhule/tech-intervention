import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Entry Age: 0-65 Years'),
  createData('Maturity Age: 75 Years for Growth Variant: 99 Years For Legacy Variant'),
  createData('Policy Term: 5 – 20 Years'),
  createData('Minimum Premium Amount: Single Pay* – ₹ 1,00, 000; Regular Pay – ₹ 25,000'),
  //   createData('Gingerbread'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} >
      <Grid item xs={12} sm={12} md={12}>
        <TableContainer component={Paper} style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#CACBCC" }}>
          <Table className={classes.table} aria-label="simple table">
            {/* <TableHead> */}
            {/* <TableRow> */}
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            {/* </TableRow> */}
            {/* </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}