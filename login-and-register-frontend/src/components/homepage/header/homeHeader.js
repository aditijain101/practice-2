import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Stack } from '@mui/material';


export default function HomeHeader() {


    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: 16, width: "100%", marginTop: "2rem" }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"flex-end",
                    alignItems:"center",
                    width:"40%",
                    gap:"5rem"
                }}>
                <div>

                    <div style={{
                        backgroundColor: "#DFDCF7",
                        display: "flex",
                        color: " #2b304b",
                        padding: "6px",
                        borderRadius: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "fit-content",
                        color: "#393285",
                        fontSize: "27px",
                        fontWeight: 600
                    }}>
                        2
                    </div>
                    <Typography sx={{
                        color: " #2b304b",
                        fontSize: "19px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 600
                    }}>
                        Jobs <br />Posted
                    </Typography>
                </div>
                <div>

                    <div style={{
                        backgroundColor: "#DFDCF7",
                        display: "flex",
                        color: " #2b304b",
                        padding: "6px",
                        borderRadius: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "fit-content",
                        color: "#393285",
                        fontSize: "27px",
                        fontWeight: 600
                    }}>
                        2
                    </div>
                    <Typography sx={{
                        color: " #2b304b",
                        fontSize: "19px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 600
                    }}>
                        Jobs <br />Active
                    </Typography>
                </div>
                </div>
                <Card sx={{
                    width: '50%',
                    backgroundColor: "#DFDCF7",
                    borderBottom: "none",
                    alignSelf: "flex-end"
                }}>
                    <CardContent >
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <div>
                                <Typography variant="h6" component="div" sx={{
                                    color: " #2b304b",
                                    fontSize: "22px",
                                    alignItems: "center",
                                    display: "flex",
                                    fontWeight: 600

                                }}>
                                    Manage Job Postings
                                </Typography>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: "space-between",
                                    color: " #2b304b",
                                    fontSize: "22px",
                                    fontWeight: 500
                                }}>
                                    <Typography  >
                                        Your Name
                                    </Typography>
                                    <Typography  >
                                        Designation
                                    </Typography>

                                    {/* <Button onClick={() => handleEdit(row)}>View</Button>
              <Button onClick={() => handleDelete(row)}>Delete</Button> */}
                                </div>
                            </div>
                            <div style={{
                                backgroundColor: "white",
                                padding: "4px",
                                borderRadius: "5px",
                                height: "fit-content",
                                cursor: "pointer",
                                color: " #2b304b",
                                fontSize: "22px",
                                display: "flex",
                                alignSelf:"center",
                                fontWeight: 600
                            }}>
                                Post New Job
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    );
}
