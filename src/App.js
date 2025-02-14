import React from "react";
import "./App.css";
import {Box} from "@mui/material";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
    return (<Box sx={{width: '100vw', height: '100vh'}}>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('/stage.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <Box sx={{width: '100%', height: '200px', padding: '30px'}}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url('/protosmithTitle.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}/>
                </Box>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>

                    <iframe width={'95%'} height={650}
                            src="https://cdn.forms-content-1.sg-form.com/e88a8d8a-eb24-11ef-9594-8e02444e8be3"/>

                </Box>
            </Box>
        </Box>);
}
