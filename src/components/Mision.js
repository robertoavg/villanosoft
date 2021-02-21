import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import './Valores.css';

export default class Mision extends Component{
    render(){
        return(
            <div className="valores">
                <h4 className="valor">
            <Typography gutterBottom variant="h6" component="h3">
                Misión:
            </Typography>
                </h4>
                <p className="texto">
                    Ofrecer productos y servicios confiables, innovadores y de calidad que faciliten y mejoren las  actividades administrativas de las pequeñas y medianas empresas de la región lagunera.
                </p>
            </div>
        );
    }
}