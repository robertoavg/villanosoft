import React, {Component} from 'react';
import {AppBar,Toolbar,IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuBarra from './MenuBarra';
import logo from '../../src/img/villanosoft.png';
import './Barra.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

class Barra extends Component{
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

      onClick = () =>{
        this.child = React.createRef();
      }

    render(){
        const { classes } = this.props;
            return(
                <div>
                    <AppBar style={{backgroundColor: '#000'}} position="fixed" color="primary">
                        <Toolbar className="barra">
                          <IconButton 
                            ref = {this.child} 
                            edge="start" 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="menu"
                          >
                            <MenuBarra
                            color="inherit"
                            />
                          </IconButton>
                          <div className="logoCentrado">
                            <img src = {logo} className  = "logo" alt = "villanosoft"/>
                          </div>
                        </Toolbar>
                    </AppBar>
                </div>
            );
    }
}

export default withStyles(styles) (Barra);