import React, {Component} from 'react';
import {AppBar,Toolbar,IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuBarra from './MenuBarra';
import logo from '../img/villanosoft.png';

//const logo  = 'https://drive.google.com/uc?export=view&id=1bTJxhZvUCSM1AY69kAmaQYTEJkrss_0Q';

const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      position: 'absolute',
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
                          <div className="logoCentrado">
                            <img src = {logo} className  = "logo" alt = "villanosoft"/>
                          </div>
                          <IconButton 
                            ref = {this.child} 
                            edge="start" 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="menu"
                            position="absolute"
                          >
                            <MenuBarra
                            color="inherit"
                            i={this.props.i}
                            />
                          </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
            );
    }
}

export default withStyles(styles) (Barra);