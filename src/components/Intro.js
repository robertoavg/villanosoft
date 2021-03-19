import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./Intro.css";
import Typography from "@material-ui/core/Typography";

const FadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 7s ${FadeInAnimation};
`;

export default function Intro(props) {
  if (props.i === "Español") {
    return (
      <div className="speech-bubble">
        <FadeInDiv>
          <h4>
            <Typography
              className="texto"
              gutterBottom
              variant="h5"
              component="h3"
            >
              Soluciones informáticas a problemas administrativos
            </Typography>
          </h4>
          <p className="texto1">
            ¡Hola! Mi nombre es Roberto Villanueva, bajo el pseudónimo de
            Villanosoft, ofrezco mis servicios como desarrollador de software
            con el enfoque de otorgar soluciones prácticas por medio de mi
            conocimiento contable, administrativo y de sistemas.
          </p>
        </FadeInDiv>
      </div>
    );
  }
  if (props.i === "English") {
    return (
      <div className="speech-bubble">
        <FadeInDiv>
          <h4>
            <Typography
              className="texto"
              gutterBottom
              variant="h5"
              component="h3"
            >
              Software solutions to administrative problems.
            </Typography>
          </h4>
          <p className="texto1">
            Hey! My name is Roberto Villanueva, by the alias of Villanosoft I
            offer my services as Software Developer with focus on practical
            solutions by applying my accounting, administrative and software
            knowledge.
          </p>
        </FadeInDiv>
      </div>
    );
  }
}
