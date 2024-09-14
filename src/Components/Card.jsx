import React from "react";
import CardItem from '@mui/material/Card';
import {CardContent, CardMedia, Typography, CardActionArea, CardActions, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ item }) => {
  const { state, dispatch } = useCharStates();
  const { name, username, id } = item
  const isFavorite = state.favs.find((fav) => fav.id === item.id);

  const addFav = () => {
    dispatch({ type: isFavorite ? "REMOVE_FAV" : "ADD_FAV", payload: item });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <CardItem sx={{ width: "100%", height: "100%" }}>
          <Link to={"/dentista/" + id }>
            <CardActionArea>
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
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions
            onClick={addFav}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IconButton color="primary" aria-label="add to shopping cart">
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
        </CardItem>

    </div>
  );
};

export default Card;
