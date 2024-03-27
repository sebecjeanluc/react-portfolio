import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const navigate = useNavigate();

  function handleChange(event){
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const [errors, setErrors] = useState({});

  const validationForm = () =>{
    let formIsValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!regex.test(formData.email)){
        newErrors.email = "Please enter a valid email address."
        formIsValid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    } else if (formData.message.length > 300){
      newErrors.message = 'Message must not exceed 300 characters.'
      formIsValid = false;
    }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0){
        setErrors(newErrors)
        return false;
      }
      return true;
  }

  const onSubmit = async(event) =>{
    event.preventDefault();

    setErrors({}); // reset errors

    const sanitizedMessage = DOMPurify.sanitize(formData.message);

    if(!validationForm()){
      return;
    }

    // Sanitize the message

    setIsLoading(true); //loading start
    setIsComplete(false); // reset complete

    try {
       const docRef = await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: sanitizedMessage
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
            text: sanitizedMessage,
          }),
        });

      if(!emailResponse.ok) throw new Error('Failed to send email');

      setTimeout(() => {
        setIsLoading(false)
        setIsComplete(true)
      }, 5000)

    } catch(emailError){
      console.error('Email sending error: ', emailError);
    }

    // const docRef = 1234

    // setTimeout(() => {
      navigate(`/thank-you/${docRef.id}`, { state: {name: formData.name, email: formData.email, message: sanitizedMessage}})
    // }, 8000)


  } catch(error){
    console.log("Error adding document: ", error);
    setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='section__wrapper'>
      <h3>CONTACT</h3>
      <div className="subSection__wrapper">
        <form onSubmit={onSubmit} className="container subSection__container mt-5">
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
            {errors.name && <div className="validation--text">{errors.name}</div>}
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
            {errors.email && <div className="validation--text">{errors.email}</div>}
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
            {errors.message && <div className="validation--text">{errors.message}</div>}
          </div>
          <div className="subSection__wrapper">
            <div className="contact-button__wrapper">
              <button
                className={`contact-button ${isLoading ? 'loading' : ''} ${isComplete ? 'complete' : ''}`}
                // data-sitekey={import.meta.env.VITE_RECAPCHA_SITE_KEY}
                // data-callback='onSubmit'
                // data-action='submit'
                type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact;
