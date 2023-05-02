import React, { useState } from 'react'
import { Send } from 'emailjs-com';
import { send } from '@emailjs/browser';
import { Bar } from './appBar';
import Box from '@mui/material/Box';
import { useNavigate, Link } from 'react-router-dom'

export const Contact = () => {

    const navigate = useNavigate()

    const [sender_name, set_sender_name] = useState('');        //Form variables
    const [sender_email, set_sender_email] = useState('');
    const [message, set_message] = useState('');

    const handleName = (e) => {                                 //Sets form variables once changed by user
        set_sender_name(e.target.value)
    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value)
    }
    const handlemessage = (e) => {
        set_message(e.target.message)
    }

    const sendMail = (e) => {                                   //Sends the email via emailjs
        e.preventDefault();
        send(
            'service_7hxu4sx',
            'template_4f334xh',
            { sender_name, sender_email, message },
            '8hcyxsITAWp7mPuc2'
        )
        alert("Success! A message has been sent to the email provided");
        navigate('/LandingPage'); //navigate back to landing page
            //.then((response) => {
             //   console.log('Message sent successfully', response.status, response.text)

           // })
           // .catch((err) => {
           //     console.log('Failed', err)
           // })


    }
    return (
        <div className = "App">
            <Bar/>

            <Box textAlign={'center'} sx = {{backgroundColor: 'whitesmoke', width: 'auto', padding: 2}}>

            <h1>Email</h1>
            <form onSubmit={sendMail}>
                <div>
                <input type='text' name='sender_name' value={sender_name} onChange={handleName} required placeholder='Your name' />
                </div>
                <div>
                <input type='email' name='sender_email' value={sender_email} onChange={handleEmail} required placeholder='Your email' />
                </div>
                <div>
                <input type='message' value={message} onChange={handlemessage} required placeholder='Your message' />
                </div>
                <div>
                <button type='submit'>Send Mail</button>
                <button onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>

            </Box>

        </div>

    )
}

export default Contact;