import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import DeleteIcon from "../../delete.svg"


export default function DataTable({ filteredData, setView, setItem, doDelete }) {
  const handleEdit = (row) => {
    setItem(row);
    setView(true);
    console.log(`Edit row with id ${row}`, row);
  };

  const handleDelete = (row) => {
    doDelete(row);
    console.log(`Delete row with id ${row}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: 16, width: "90%", }}>

      {filteredData.map((row) => (
        <Card key={row.id} sx={{
          width: '100%',
          backgroundColor: "#DFDCF7",
          borderBottom: "none"
        }}>
          <CardContent >
            <Typography variant="h6" component="div" sx={{
              color: " #393285",
              // fontFamily: "Inter",
              fontSize: "22px",
              fontWeight: 500,
              lineHeight: "34px"

            }}>
              {row.jobTitle}
            </Typography>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: "space-between",
              color: " #393285",
              fontWeight: 500
            }}>
              <Typography  >
                Posted on : 12-02-2024
              </Typography>
              <Typography  >
                Expire on : 12-02-2024
              </Typography>
              <Typography  >
                Job Status : Active
              </Typography>
              <div>
                <Typography variant="body2" gutterBottom>
                  Status
                </Typography>
                <div style={{ backgroundColor: "white", color: "#000000", padding: "4px", borderRadius: "5px", alignItems: "center", height: "fit-content", color: "#393285", cursor: "pointer" }}>
                  Active
                </div>
              </div>

              <div style={{ backgroundColor: "white", color: "#000000", padding: "4px", borderRadius: "5px", alignItems: "center", height: "fit-content", color: " #393285", cursor: "pointer" }}>
                Check Responses
              </div>
              {/* <Button onClick={() => handleEdit(row)}>View</Button>
              <Button onClick={() => handleDelete(row)}>Delete</Button> */}
            </div>

          </CardContent>
        </Card>
      ))}
    </div>
  );
}
