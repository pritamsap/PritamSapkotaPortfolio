import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact(props) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_54bw0es', 'template_0gb9dnt', form.current, 'zNsjj4ygRbNau1Tl4')
      .then((result) => {
          console.log(result.text);
          alert("Message sent");
      }, (error) => {
          console.log(error.text);
      });
    };


    return (
    <div className='contact' id="contact">
          

                <div className='contact-side'>
                    <h3 className='contact-heading'>SEND EMAIL</h3>

                    <form className='form-box' ref={form} onSubmit={sendEmail}>
                        <div className='name-email-section'>
                            <input className='name' type="text" name="user_name" placeholder='Name' />
                            <input className='email' type="email" name="user_email" placeholder='Email' />
                        </div>
                        <textarea className='message' name="message"  placeholder=' Message...'/>
                        <input className='submit-button' type="submit" value="Send" />
                    </form>

                    

                   

                 </div>
       
        </div> 
    )
    
}