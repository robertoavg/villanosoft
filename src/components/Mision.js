import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Mision(props) {
  if (props.i === "Español") {
    return (
      <div className="valores">
        <h4 className="valor">
          <Typography gutterBottom variant="h6" component="h3">
            Misión:
          </Typography>
        </h4>
        <p className="texto">
          Ofrecer mis servicios de forma confiable e innovadora para facilitar y
          mejorar en la calidad de las actividades de pequeñas y medianas
          empresas.
        </p>
      </div>
    );
  }
  if (props.i === "English") {
    return (
      <div className="valores">
        <h4 className="valor">
          <Typography gutterBottom variant="h6" component="h3">
            Mision:
          </Typography>
        </h4>
        <p className="texto">
          Offer my services as trusted, innovative and good quality to comply
          with the small and middle businesses demands to effectively benefit
          their work.
        </p>
      </div>
    );
  }
}
