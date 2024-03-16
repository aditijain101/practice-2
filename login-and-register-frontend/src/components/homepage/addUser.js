import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, TextField, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const AddUser = ({ userData }) => {
    const history = useHistory();

    const [user, setUser] = useState({

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user", user);
        axios.post("http://localhost:9002/addUser", {
            name: user.name,
            email: user.email,
            companyName: user.companyName,
            jobTitle: user.jobTitle,
        }).then(res => {
            alert(res.data.message);
            window.location.reload();
            // history.push("/")
          })
        history.push("/");
        // Implement your form submission logic here
    };

    const handleCancel = () => {
        history.push("/");
    };

    return (
        <div className="register" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            overflowY: "auto",
            flexDirection: "column"
        }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={5} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={4} spacing={4} >
                        <Typography variant="h6">Company Details</Typography>
                        <TextField
                            fullWidth
                            label="Company Name"
                            name="companyName"
                            value={user.companyName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Job Location"
                            name="jobLocation"
                            value={user.jobLocation}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Work Time"
                            name="workTime"
                            value={user.workTime}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="N0. of candidates"
                            name="candidates"
                            value={user.candidates}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Process"
                            name="process"
                            value={user.process}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Interview location"
                            name="location"
                            value={user.location}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="job description"
                            name="description"
                            value={user.description}
                            onChange={handleChange}
                            required
                        />
                        {/* Add other company details */}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">Candidate Details</Typography>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Designation"
                            name="designation"
                            value={user.designation}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Job Title"
                            name="jobTitle"
                            value={user.jobTitle}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Salary"
                            name="salary"
                            value={user.salary}
                            onChange={handleChange}
                            required
                        />
                        {/* Add other candidate details */}
                    </Grid>
                </Grid>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "90%", gap: "19px" }}>
                    <Button variant="contained" type="submit">Save</Button>
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>

                </div>
            </form>
        </div>
    );
};

export default AddUser;
