import React, { useRef, useState } from 'react'
import './styles/Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {
    const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const { user_name, user_email, message } = formData;

  const onSumbit = (e) => {
    e.preventDefault();

    setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    emailjs.sendForm('service_vmbmwjq', 'template_vnbxvsj', form.current, '7GoIGkL9lyuKKRp-b')
    .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
            toast.success("Sent successfully");
        }
    }, (error) => console.log(error));
  }

  return (
    <div className='contact'>
        <div className='contact-inner projects-inner'>
            <h1>Contact</h1>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div className='form-container'>
                <form onSubmit={onSumbit} ref={form}>
                    <div className='input'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name' name='user_name' value={user_name} onChange={handleChange}/>
                    </div>
                    <div className='input'>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' name='user_email' value={user_email} onChange={handleChange}/>
                    </div>
                    <div className='input'>
                        <label>Message</label>
                        <textarea type='text' placeholder='Enter your message' name='message' value={message} onChange={handleChange}/>
                    </div>
                    <button className='projects-button' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
