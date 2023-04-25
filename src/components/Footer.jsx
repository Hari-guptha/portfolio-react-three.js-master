import { Box } from '@material-ui/core'
import React from 'react'
import Tilt from 'react-tilt';
import '../assets/css/central.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div style={{ display: "flex",justifyContent:"center" }}>
            <h4 id='h3' style={{ color: "white",textAlign:"center" }} >Developed by titan</h4>
            <Box style={{ color: "white",display:"flex",marginLeft:"20px" }}>
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                    <a href='https://github.com/Hari-guptha'><GitHubIcon sx={{fontSize:"40px",margin:"0px 10px"}} /></a>
                </Tilt>
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                <a href='https://www.linkedin.com/in/hari-guptha-bb6a29208/' ><LinkedInIcon  sx={{fontSize:"40px",margin:"0px 10px"}}  /></a>
                </Tilt>
            </Box>
        </div>
    )
}

export default Footer