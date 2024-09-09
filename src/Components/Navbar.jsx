import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NightlightRound from '@mui/icons-material/NightlightRound';//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

const Navbar = () => {

  return (
  <Box sx={{
    flexGrow: 1,
    bgcolor: 'background.default',
    color: 'text.primary'
    }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={routes.home}>
            DH Odonto
          </Link>
        </Typography>

        <div>
        <Link to={routes.home}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to={routes.contact}>
          <Button color="inherit">Contact</Button>
        </Link>
        <Link to={routes.fav}>
          <Button color="inherit">Fav</Button>
        </Link>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NightlightRound />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
