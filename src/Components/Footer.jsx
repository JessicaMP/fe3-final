import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const Footer = () => {
  return (
    <footer>

      <Stack
        direction="row"
        spacing={12}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' width="200" />
        </div>

        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="/images/ico-facebook.png" alt='DH-logo'  width="20" />
          </IconButton>
        </div>
      </Stack>
    </footer>
  )
}

export default Footer
