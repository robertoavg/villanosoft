import React, {Component} from 'react';
import Pdf from './Pdf';

export default class Curriculum extends Component{

    // constructor(props) {
	// 	super(props);
	// }
    
    render(){
        return(
            <div className="CV-PDF">
                <Pdf/>
            </div>
        );
    }
}