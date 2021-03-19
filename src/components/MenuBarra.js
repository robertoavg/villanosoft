import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

const StyledMenu = withStyles({
  paper: {
    backgroundColor: '#192737' ,
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuBarra(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  var M1 = "";
  var M2 = "";
  var M3 = "";
  var M4 = "";
  var M5 = "";
  if(props.i === "Español"){
    M1 = "Información";
    M2 = "Valores";
    M3 = "Proyectos";
    M4 = "Currículum";
    M5 = "Contacto";
  }
  if(props.i === "English"){
    M1 = "Information";
    M2 = "Values";
    M3 = "Projects";
    M4 = "Resume";
    M5 = "Contact";
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        href="#text-buttons"
      >
        <MenuIcon
        >
        </MenuIcon>
      </Button>
      <StyledMenu
        backgroundColor="#000"
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <a href="#info" style={{textDecoration: 'none' , color: 'black'}} >
            <ListItemText primary={M1}/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#valores"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary={M2}/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#proyectos"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary={M3}/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#cv"  style={{ textDecoration: 'none' , color: 'black'}}>
           <ListItemText primary={M4}/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#contacto"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary={M5}/>
          </a>
        </StyledMenuItem>
        </StyledMenu>
        </div>
    );
  }