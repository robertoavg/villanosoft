import React, {Component} from 'react';
import  {fadeIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Intro.css';
import Typography from '@material-ui/core/Typography';

const FadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation:  7s ${FadeInAnimation};
`;

export default class Intro extends Component{
    render(){
        return(
            <div className="speech-bubble">
                <FadeInDiv>
                <h4>
            <Typography className="texto" gutterBottom variant="h5" component="h3">
                Soluciones informáticas a problemas administrativos
            </Typography>
                </h4>
                <p className="texto1">
                    ¡Hola!  Mi nombre es Roberto Villanueva, bajo el pseudónimo de Villanosoft, 
                    ofrezco mis servicios como desarrollador de software con
                    el enfoque de otorgar soluciones prácticas por medio de mi 
                    conocimiento contable, administrativo y de sistemas.
                </p>
                </FadeInDiv>
            </div>

        );
    }
}