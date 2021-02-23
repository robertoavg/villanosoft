import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Pdf from './Pdf';
import ruta from '../../src/img/cv.pdf';

export default class Curriculum extends Component{

    // constructor(props) {
	// 	super(props);
	// }
    
    render(){
        return(
            <div>
                <Pdf/>
                    <Button href={ruta} target = "_blank" variant="contained" color="primary" disableElevation>
                        Abrir CV
                    </Button>
            </div>
        );
    }
}