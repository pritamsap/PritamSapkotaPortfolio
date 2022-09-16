import React from 'react';


export default function Contact(props) {
    return (
        <div className='contact'>
          

                <div className='contact-side'>
                    <h3 className='contact-heading'>SEND EMAIL</h3>
                    <form className='form-box' name='contact' action="/contact" method='post'>
                        <input type="hidden" name="form-name" value="contact"/>

                        <div className='name-email-section'>
                            <input required class='name' type="text" name="name" placeholder='Name' />
                            <input required className='email' type="email" name="email" placeholder='Email' />
                        </div>
                       
                        <textarea className='message' name="message" placeholder='Message' cols="30" rows="10"></textarea>
                        <button className='submit-button' type='submit'>Submit</button>
                    </form>

                 </div>
       
        </div> 
    )
    
}