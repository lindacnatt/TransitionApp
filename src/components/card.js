import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: '22vh',   
  },
  media: {
    minHeight: 30,
    maxHeight: 70,
  },
  text:{
    fontFamily: "Trebuchet MS",
    fontSize: '1.2rem',
    paddingTop: '1vh',
  }
});

const CardEx = (props) => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Default Image"
            image={props.imageSource}
          />
          <CardContent>
            <Typography gutterBottom className={classes.text} >
              Card
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default CardEx;