import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import './Valores.css';

export default class Vision extends Component{
    render(){
        return(
            <div className="valores">
                <h4 className="valor">
            <Typography gutterBottom variant="h6" component="h3">
                Visión:
            </Typography>
                </h4>
                <p className="texto">
                    Ser reconocido como la empresa de confianza en materia de tecnologías, con servicios que cumplan con la calidad y exigencia demandada en el norte de México.
                </p>
            </div>
        );
    }
}