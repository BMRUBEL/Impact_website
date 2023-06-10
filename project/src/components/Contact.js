import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const com = () => {
    axios({
      method: 'post',
      url: 'http://localhost/reactApi/contact.php',
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message

      }
    })
      .then(function (response) {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
  }

  return (
    <>
    
    <section id='contact' className='contact'>
      <div className='container' data-aos='fade-up'>

        <div className='section-header'>
          <h2>Contact</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>

        <div className='row gx-lg-0 gy-4'>

          <div className='col-lg-4'>

            <div className='info-container d-flex flex-column align-items-center justify-content-center'>
              <div className='info-item d-flex'>
                <i className='bi bi-geo-alt flex-shrink-0'></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className='info-item d-flex'>
                <i className='bi bi-envelope flex-shrink-0'></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className='info-item d-flex'>
                <i className='bi bi-phone flex-shrink-0'></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className='info-item d-flex'>
                <i className='bi bi-clock flex-shrink-0'></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className='col-lg-8'>
            <form action=''  className='php-email-form'>
              <div className='row'>
                <div className='col-md-6 form-group'>
                  <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' onChange={(e) => setName(e.target.value)}
                   value={name} required />
                </div>
                <div className='col-md-6 form-group mt-3 mt-md-0'>
                  <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} 
                  value={email} required />
                </div>
              </div>
              <div className='form-group mt-3'>
                <input type='text' className='form-control' name='subject' id='subject' placeholder='Subject' onChange={(e) => setSubject(e.target.value)} 
                value={subject} required />
              </div>
              <div className='form-group mt-3'>
                <textarea className='form-control' name='message' rows='7' placeholder='Message' onChange={(e) => setMessage(e.target.value)} 
                value={message} required></textarea>
              </div>
              <div className='my-3'>
                <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>Your message has been sent. Thank you!</div>
              </div>
              <div className='text-center'><button type='submit' onClick={com}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
   
    </>
  );
};

export default Contact;