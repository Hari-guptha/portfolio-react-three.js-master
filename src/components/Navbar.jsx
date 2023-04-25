import { AppBar, Box, Drawer, Stack } from '@mui/material'
import React, { useState } from 'react'
import '../assets/css/Nav.css'
import '../assets/css/central.css'
//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export const Navbar = () => {
    const [fun, setfun] = useState(false)
    return (
        <>
            <AppBar id='navbar' >
                <Box sx={{ display: { md: "block", sm: "none", xs:"none" } }}>
                <Stack direction={'row'} sx={{ display: "flex", justifyContent: "space-between" }} >
                    <h3 id='navitem1'>HIRE ME</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                        <a href="#About"><h3 id='navitem2'>about me</h3></a>
                        <a href="#Skills"><h3 id='navitem2'>Skills</h3></a>
                        <a href="#Exp"><h3 id='navitem2'>Experience</h3></a>
                        <a href="#Project"><h3 id='navitem2'>Projects</h3></a>
                        <a href="#Art"><h3 id='navitem2'>Art works</h3></a>
                        <a href="#Contact"><h3 id='navitem2'>Contact</h3></a>
                    </Box>
                </Stack>
                </Box>
                <Box sx={{ display: { md: "none", sm: "block",xs:"block" } }}>
                <Stack direction={'row'} sx={{ display: "flex", justifyContent: "space-between" }} >
                    <h3 id='navitem1'>HIRE ME</h3>
                    <MenuIcon id="menuicon" onClick={e => (setfun(true))} />
                </Stack>
                </Box>
            </AppBar>

            <Drawer anchor={'left'}
                open={fun}
                onClose={e => (setfun(false))}>
                    <CloseIcon id="closeicon" onClick={e => (setfun(false))} />
                <Stack direction={'column'} sx={{marginTop:"30%"}} >
                <a href="#About"><h3 id='navitem2'>about me</h3></a>
                        <a href="#Skills"><h3 id='navitem2'>Skills</h3></a>
                        <a href="#Exp"><h3 id='navitem2'>Experience</h3></a>
                        <a href="#Project"><h3 id='navitem2'>Projects</h3></a>
                        <a href="#Art"><h3 id='navitem2'>Art works</h3></a>
                        <a href="#Contact"><h3 id='navitem2'>Contact</h3></a>
                    <h3 id='navitem3' >HIRE ME</h3>
                </Stack>
            </Drawer>
        </>

    )
}
