import React, { useEffect, useState } from "react";
import ApiService from "../services/api";
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const NOT_FOUND = "N/A"

const getAddress = ({street=null, suite=null, city=null}) => {
  if (!street && !suite && !city) return NOT_FOUND
  return `${street || ''}, ${suite || ''} ${city || ''}`
}

const Detail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await ApiService.getUserById(id)
      console.log(data);
      setUser(data)
    }
    fetchData();
  }, [id]);
  const theme = useTheme();


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Container maxWidth="md" sx={{ padding: 5 }}>
        <Card>
          <CardContent>
            <Typography component="div" variant="h4">
              {user?.name || "Loading..."} {/* Maneja caso donde user.name no esté definido */}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
              {user?.username || NOT_FOUND}
            </Typography>
          </CardContent>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={user?.email || NOT_FOUND} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Company" secondary={user?.company?.name || NOT_FOUND} /> {/* Asegúrate de acceder correctamente a user.company.name */}
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneIphoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={user?.phone || NOT_FOUND} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InsertLinkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Website" secondary={user?.website || NOT_FOUND} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PlaceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={getAddress(user?.address || {})} />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={5}>
              <CardMedia
                component="img"
                sx={{ width: '100%' }}
                image="/images/doctor.jpg" // Reemplaza con la imagen que quieras usar
                alt={user?.name || "User Image"}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  )
}

export default Detail
