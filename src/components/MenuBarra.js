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

export default function MenuBarra() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <ListItemText primary="Información"/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#valores"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary="Valores"/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#proyectos"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary="Proyectos"/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#cv"  style={{ textDecoration: 'none' , color: 'black'}}>
           <ListItemText primary="Currículum"/>
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#contacto"  style={{ textDecoration: 'none' , color: 'black'}}>
            <ListItemText primary="Contacto"/>
          </a>
        </StyledMenuItem>
        </StyledMenu>
        </div>
    );
  }