import React, {Component} from 'react';
import  {fadeIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import tarjeta from '../../src/img/tarjeta.png';
import './Tarjeta.css';

const FadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation:  7s ${FadeInAnimation};
`;

export default class Tarjeta extends Component{
    render(){
        return(
            <div className = "tarjeta">
                <FadeInDiv>
                        <img src = {tarjeta} className = "tarjeta-FUT" alt = "tarjeta FUT"/>
                </FadeInDiv>
            </div>
        );
    }
}