import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "../images/flower.jpeg";



const useStyles = makeStyles({
  root: {

  },
});

const CardEx = () => {
  return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Default Image"
            height="150"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Card
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              color="textSecondary"
              component="p"
            >
              This is a card
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default CardEx;