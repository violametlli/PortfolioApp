import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import * as AiIcons from "react-icons/ai"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6w8y598', 'template_rw7kp8y', form.current, '2hy7Nin7o_PadDUNI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id="Contact" className="contact">
    <div className='container34'>
    <div className="contact-social"> 
    <h2 className='text'>Contact me!</h2>
    <ul className='social'>
     <AiIcons.AiFillGithub style={{ fontSize: 30, paddingRight:"10px" }} onClick={()=>window.open('https://github.com/violametlli','_blank')}/>   
    <AiIcons.AiFillLinkedin style={{ fontSize: 30, paddingRight:"10px" }} onClick={()=>window.open('https://al.linkedin.com/in/vjola-metlli-3b3570197?trk=public_profile_browsemap','_blank')}/>
    <AiIcons.AiFillInstagram style={{ fontSize: 30, paddingRight:"10px" }} onClick={()=>window.open('https://instagram.com/viola_metlli?igshid=YWJhMjlhZTc=','_blank')}/>
   </ul></div>
   <div className='form'>
     <form ref={form} onSubmit={sendEmail} >
     <input type="text" placeholder="Your name" name="user_name" className='input'/>
      <input type="email" placeholder="Your email" name="user_email" className='input'/>
      <textarea name="subject" placeholder="Subject" className='input'/>
      <textarea name="message" placeholder="Message" className='msg'/>
      <input type="submit" value="Send" className="btn" />
    </form>
    </div>
     </div>
    </div>
  );
};

export default Contact
