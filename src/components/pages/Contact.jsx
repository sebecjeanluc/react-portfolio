import {Ract, useState } from 'react';


function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  function handleChange(event){
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
    alert(`Thank you ${formData.name} but unfortunately the form is not working. Please contact via my email: tkawamura11@gmail.com or social media`)
  }
  return (
    <section className='general__wrapper'>
      <h3>CONTACT</h3>
      <div className="subSection__wrapper">
        <form onSubmit={handleSubmit} className="container mt-5">
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
              <button className="contact-button" type="submit">
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
