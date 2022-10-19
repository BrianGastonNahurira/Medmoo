import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "../Statemets/statements.css";

export const StateTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "200px" }}>
      <Table aria-aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Time
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              NumberPlate
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Amount(Ugshs)
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
              align="center"
            >
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.Time}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.Time}</TableCell>
              <TableCell>{row.NumberPlate}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell align="center">{row.Type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  { Time: "02:00pm", NumberPlate: "UTT001B", Amount: "20000", Type: "REPAID" },
  { Time: "02:00pm", NumberPlate: "UTT001B", Amount: "15000", Type: "BORROW" },
  { Time: "02:00pm", NumberPlate: "UTT001B", Amount: "1000", Type: "BORROW" },
  { Time: "02:00pm", NumberPlate: "UTT001B", Amount: "10000", Type: "REPAID" },
];
