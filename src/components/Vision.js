import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Vision(props) {
    if (props.i === "Español") {
        return(
            <div className="valores">
                <h4 className="valor">
            <Typography gutterBottom variant="h6" component="h3">
                Visión:
            </Typography>
                </h4>
                <p className="texto">
                    Ser reconocido como un gran desarrollador bajo la confianza que brinden mis servicios en tecnología, cumpliendo con la calidad y exigencia demandada por mis clientes.
                </p>
            </div>
        );
    }
    if (props.i === "English") {
        return(
            <div className="valores">
                <h4 className="valor">
            <Typography gutterBottom variant="h6" component="h3">
                Vision:
            </Typography>
                </h4>
                <p className="texto">
                Be recognized as a great developer by the trust created from my technology services that I supply to my clients, by always achieving their quality demands.
                </p>
            </div>
        );
    }
}