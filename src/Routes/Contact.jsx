import React from 'react'
import Form from '../Components/Form'
import {
  Container,
  Typography
} from '@mui/material';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ padding: 5 }}>
      <Typography component="div" variant="h4" text="center">Want to know more?</Typography>
      <Typography component="div" variant="p">Send us your questions and we will contact you</Typography>
      <Form/>
    </Container>
  )
}

export default Contact
