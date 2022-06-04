import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
function createData(name, trakingId, data, status, detail) {
  return { name, trakingId, data, status, detail };
}

const rows = [
  createData("Lasania", 18909424, "2 March 2022", "Approved"),
  createData("Pizza", 18909425, "2 March 2022", "Approved"),
  createData("Pizza", 18909426, "2 March 2022", "Pending"),
  createData("Pizza", 18909427, "2 March 2022", "Approved"),
  createData("Pizza", 18909428, "2 March 2022", "Pending"),
  createData("Pizza", 18909429, "2 March 2022", "Deliwered"),
];
function makeStyle(status) {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
}

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Recent Order</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 13 20px 0 #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Orders</TableCell>
              <TableCell align="left">Traking-Id</TableCell>
              <TableCell align="left">Data</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trakingId}</TableCell>
                <TableCell align="left">{row.data}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="detail-orders">
                  Detail
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
