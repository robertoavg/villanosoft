import React from 'react';
import Pdf from './Pdf';

export default function Curriculum(props) {

    return(
        <div className="CV-PDF">
            <Pdf
            i={props.i}/>
        </div>
    );
}