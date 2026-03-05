import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    // Initialize EmailJS (replace with your actual Service ID)
    emailjs.init('YOUR_PUBLIC_KEY_HERE');

    emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', formData)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('Message sent successfully!');
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus(''), 5000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setSubmitStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return ( 
        <div className="contact-wrapper">
                <div className="contact">
                <h2 className="title">~ contact</h2>
                    <div className='contact-texts'>
                        <span className="main-title" style={{fontWeight: '700'}}>contact me!</span>
                        <span className='subtitle' style={{fontSize: '27px'}}>Let's <span className="orange">create</span> something together.</span>
                        
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                          <div className="form-group">
                            <input
                              type="text"
                              name="user_name"
                              placeholder="Your Name"
                              value={formData.user_name}
                              onChange={handleChange}
                              required
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="email"
                              name="user_email"
                              placeholder="Your Email"
                              value={formData.user_email}
                              onChange={handleChange}
                              required
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              className="form-textarea"
                              rows="5"
                            />
                          </div>

                          <button type="submit" disabled={isLoading} className="contact-button">
                            {isLoading ? 'Sending...' : 'Send Message'}
                          </button>

                          {submitStatus && (
                            <span className={`submit-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}>
                              {submitStatus}
                            </span>
                          )}
                        </form>
                    </div>
                </div>
        </div>
     );
}
 
export default Contact;
