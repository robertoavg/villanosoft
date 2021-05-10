import React from "react";
import Button from "@material-ui/core/Button";

export default function SwitchIdioma(props) {

  return (
    <div>
      <p style={ {fontSize:'16px', fontFamily: 'Roboto', margin: "15px", color: "white"} } >{'Seleccione idioma / Select language'}</p>
      <Button
        type="submit" 
        variant="contained" 
        color="primary" 
        size="small"
        style={{marginLeft: "65px",  alignSelf: "center"}}
        onClick={() => props.asignaIdioma("Español")}
      >
        Español
        </Button>
      <Button
        type="submit" 
        variant="contained" 
        color="primary" 
        size="small"
        style={{margin: "15px", alignSelf: "center"}}
        onClick={() => props.asignaIdioma("English")}
      >
        English
      </Button>
    </div>
  );
}
