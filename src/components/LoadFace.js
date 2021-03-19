import React, {Component} from 'react';
import  {fadeIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import goatie from '../img/Load.gif';

//const goatie = "https://drive.google.com/uc?export=view&id=1XBnqEgG0ddTfMUCCDjQB_fBeNLo3i2oH"

const FadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation:  7s ${FadeInAnimation};
`;

export default class LoadFace extends Component{
    render(){
        return(
            <div className = "Load">
                <FadeInDiv>
                        <img src = {goatie} className = "Face" alt = "Goatie"/>
                </FadeInDiv>
            </div>
        );
    }
}