import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "../images/icon.png";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 400,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className={classes.root}>
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Show"
    />
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root}>
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
    </Grow>
    </div>
  );
}
