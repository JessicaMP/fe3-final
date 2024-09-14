import React from 'react'
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import NightlightRound from '@mui/icons-material/NightlightRound';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { useCharStates } from "../Context/Context";

const Navbar = () => {
  const { state, dispatch } = useCharStates();
  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME"});
  }

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
                onClick={changeTheme}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {state.theme ? <NightlightRound /> : <Brightness5Icon />}

              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Navbar
