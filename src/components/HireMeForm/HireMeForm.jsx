import './HireMeForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const HireMeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'user_Zxb68D2yMnS5UBIAhLTOK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="hiring-form-page">
          <div className="hiring-form">
            <form ref={form} onSubmit={sendEmail} className="hireme-inputs">
                <input type="text" name="company_name" placeholder="Your Company Name" className="companyname-field"/>
                <input type="email" name="company_email" placeholder="Your Company Email Address" className="companyemail-field" />
                <textarea name="message" placeholder="Write Your Message Here..." rows="8" cols="100" className="message-field"/>
                <button type="submit" value="Send" className="sendinquiry-button">Send Hiring Inquiry</button>
            </form>
          </div>
      </div>
    
  );
};

export default HireMeForm;