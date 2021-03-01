import React, {useState} from 'react';
import { Button,TextField,TextareaAutosize } from '@material-ui/core';
import './Contacto.css';
import axios from 'axios';

const ContactForm = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [result, setResult] = useState(null);

    const submitEmail = event =>{
        event.preventDefault();
        axios
      .post('https://villanosoftmail.herokuapp.com/', { ...state })
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
          message: 'Algo salió mal. Favor de intentar de nuevo mas tarde.'
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
                    <TextField className="nombre" label="Nombre" variant="outlined"
                    name="name" type="text" required 
                    value={state.name} onChange={onInputChange}/> <br />
                    <TextField style={{color: 'white'}} className="mail" label="Email" variant="outlined"
                    name="email" type="email" required 
                    value={state.email} onChange={onInputChange}/> <br />
                    <TextField className="nombre" label="Asunto" variant="outlined"
                    name="subject" type="text" required 
                    value={state.subject} onChange={onInputChange}/> <br />
                    <TextareaAutosize
                    style={{backgroundColor: '#192737', borderColor: 'black', fontSize: '18px'
                        }}
                        className="mensaje"
                        placeholder=" Mensaje *"
                        rowsMax={5}
                        name="message"
                        cols="40"
                        rows="10"
                        required
                        value={state.message} onChange={onInputChange}
                        /> <br />
                        <Button type="submit" variant="contained" color="primary" disableElevation>
                            Enviar
                        </Button>
                    </form>
                </div>

        );
};

export default ContactForm;