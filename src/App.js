import React from "react";
import "./App.css";
import {Box, Grid2 as Grid, Typography} from "@mui/material";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
      <Box sx={{width:'100vw', height:'100vh'}}>
          <Box sx={{
              width:'100%',
              height:'100%',
              backgroundImage:`url('/stage.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
          }}>
              <Grid container size={12} sx={{
                      width:'100%',
                      height:'100%'
              }}>
                  <Grid size={6} sx={{width:'100%',
                      padding:'50px'
                  }}>
                      <Box sx={{
                          width:'100%',
                          height:'200px',
                          backgroundImage:`url('/protosmithTitle.png')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                      }}></Box>
                      <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                          <Typography sx={{color:'white'}}>Our site is down for maintenance please check back soon...</Typography>

                      </Box>

                  </Grid>

              </Grid>

          </Box>
      </Box>
  );
}
