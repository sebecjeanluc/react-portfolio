import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();
  function handleChange(event){
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();

    try {
       const docRef = await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      try {
        const emailResponse = await fetch('https://us-central1-tak-portfolio.cloudfunctions.net/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: formData.email,
            subject: `Thank you for your contact, ${formData.name}`,
            text: formData.message,
          }),
        });

        if(!emailResponse.ok) throw new Error('Failed to send email');
      } catch(emailError){
        console.error('Email sending error: ', emailError);
      }

      navigate(`/thank-you/${docRef.id}`, { state: {name: formData.name, email: formData.email, message: formData.message}})

    } catch(error){
      console.log("Error adding document: ", error);
    }
  };

  return (
    <section className='section__wrapper'>
      <h3>CONTACT</h3>
      <div className="subSection__wrapper">
        <form onSubmit={handleSubmit} className="container subSection__container mt-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="subSection__wrapper">
            <div className="contact-button__wrapper">
              <button
                className="contact-button g-recaptcha"
                data-sitekey={import.meta.env.VITE_RECAPCHA_SITE_KEY}
                data-callback='onSubmit'
                data-action='submit'
                type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      <Helmet>
        <script src ="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
    </section>
  )
}
export default Contact;
