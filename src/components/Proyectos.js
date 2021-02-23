import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '25px 0px 0px 10px',
  },
  media: {
      width: 100,
    height: 110,
    margin: '0px 0px 0px 120px',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="Card">
        <Card className={classes.root}
        style={{backgroundColor: "#6441a5",
        backgroundImage: "linear-gradient(0deg, #6441a5 0%, #B5FFFC 100%)"
        }}
        >
        <CardActionArea
            href={props.ruta}
            target = "_blank">
            <CardMedia
            className={classes.media}
            image={props.imagen}
            title="Proyecto"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.descripcion}
            </Typography>
            </CardContent>
            <Link href={props.ruta} onClick={preventDefault}>
            </Link>
        </CardActionArea>
        <CardActions>
            {/* <Button size="small" color="primary">
            Conoce más
            </Button> */}
        </CardActions>
        </Card>
    </div>
  );
}