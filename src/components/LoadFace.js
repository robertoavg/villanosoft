import React, {Component} from 'react';
import  {fadeIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import goatie from 'C:/Users/ROBERTO_PC/Desktop/cvweb/src/img/Load.gif';

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