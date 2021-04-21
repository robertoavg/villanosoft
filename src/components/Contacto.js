import React, {useState} from 'react';
import { Button,TextField,TextareaAutosize } from '@material-ui/core';
import './Contacto.css';
import axios from 'axios';

const ContactForm = (props) => {
    const [state, setState] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    var m = "";
    var L1 = "";
    var L2 = "";
    var L3 = "";
    var L4 = "";
    var L5 = "";
    if(props.i === "Español"){
      m = 'Algo salió mal. Favor de intentar de nuevo mas tarde.';
      L1 = "Nombre";
      L2 = "Email";
      L3 = "Asunto";
      L4 = "Mensaje*";
      L5 = "Enviar";
    }
    if(props.i === "English"){
      m = 'Something went wrong. Try again later.';
      L1 = "Name";
      L2 = "Email";
      L3 = "Subject";
      L4 = "Message*";
      L5 = "Send";
    }
  
    const [result, setResult] = useState(null);

    const submitEmail = event =>{
        event.preventDefault();
        axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: m,
        });
      });
    };

    const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };

        return(
            <div>
            {result && (
              alert(
                result.message
            ))}
                <form id="contact-form" onSubmit= {submitEmail} className="contacto-forma">
                    <TextField style={{color: 'white'}} className="datos" label={L1} variant="outlined"
                    name="name" type="text" required inputProps={{style: {color: 'white'}}}
                    value={state.name} onChange={onInputChange}/> <br />
                    <TextField style={{color: 'white'}} className="datos" label={L2} variant="outlined"
                    name="email" type="email" required inputProps={{style: {color: 'white'}}}
                    value={state.email} onChange={onInputChange}/> <br />
                    <TextField className="datos" label={L3} variant="outlined"
                    name="subject" type="text" required inputProps={{style: {color: 'white'}}}
                    value={state.subject} onChange={onInputChange}/> <br />
                    <TextareaAutosize
                    style={{backgroundColor: 'transparent', borderColor: 'black', fontFamily: 'Roboto' ,fontSize: '18px', color: 'white'
                        }}
                        className="mensaje"
                        placeholder={L4}
                        rowsMax={5}
                        name="message"
                        cols="40"
                        rows="10"
                        required
                        value={state.message} onChange={onInputChange}
                        /> <br />
                        <Button type="submit" variant="contained" color="primary" style={{margin: "15px"}} disableElevation>
                            {L5}
                        </Button>
                    </form>
                </div>

        );
};

export default ContactForm;