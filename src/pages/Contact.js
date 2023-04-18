import React, { useState } from 'react'
import { Send } from 'emailjs-com';
import { send } from '@emailjs/browser';

export const Contact = () => {

    const [sender_name, set_sender_name] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [message, set_message] = useState('');
    const handleName = (e) => {
        set_sender_name(e.target.value)
    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value)
    }
    const handlemessage = (e) => {
        set_message(e.target.message)
    }
    const sendMail = (e) => {
        e.preventDefault();
        send(
            'service_7hxu4sx',
            'template_4f334xh',
            { sender_name, sender_email, message },
            '8hcyxsITAWp7mPuc2'
        )
            .then((response) => {
                console.log('Message sent successfully', response.status, response.text)

            })
            .catch((err) => {
                console.log('Failed', err)
            })
    }
    return (
        <>
            <h1>Contact Us</h1>
            <form onSubmit={sendMail}>
                <input type='text' name='sender_name' value={sender_name} onChange={handleName} required placeholder='your name' />
                <input type='email' name='sender_email' value={sender_email} onChange={handleEmail} required placeholder='your email' />
                <input type='message' value={message} onChange={handlemessage} required placeholder='your message' />
                <button type='submit'>Send Mail</button>
            </form>
        </>

    )
}

export default Contact;
