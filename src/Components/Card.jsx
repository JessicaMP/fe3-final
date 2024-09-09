import React from "react";
import CardItem from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Card = ({ item }) => {
  const { name, username, id } = item
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <CardItem sx={{ width: "100%", height: "100%" }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="140"
              image="/images/doctor.jpg"
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {username} ({id})
              </Typography>
              {/* <button onClick={addFav} className="favButton">Add fav</button> */}
            </CardContent>
          </CardActionArea>
        </CardItem>

    </div>
  );
};

export default Card;
