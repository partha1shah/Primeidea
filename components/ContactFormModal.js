"use client"
import { useState } from "react";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const ContactFormModal = ({ isOpen, onClose, formTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 5000,
    });

    if (!formData.fullName || !formData.email || !formData.description) {
      notyf.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append('_wpcf7', '48');
    formDataObj.append('_wpcf7_version', '5.7.7');
    formDataObj.append('_wpcf7_locale', 'en_US');
    formDataObj.append('_wpcf7_unit_tag', `wpcf7-f48-p${Date.now()}`);
    formDataObj.append('_wpcf7_container_post', '0');
    formDataObj.append('fullName', formData.fullName);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('description', formData.description);

    try {
      const path = 'https://admin.primeidea.in';
      const response = await fetch(`${path}/wp-json/contact-form-7/v1/contact-forms/48/feedback`, {
        method: 'POST',
        body: formDataObj,
        headers: { 'Accept': 'application/json' },
        mode: 'cors',
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();

      if (data.status === 'mail_sent') {
        notyf.success('Thank you for your message. We will get back to you soon!');
        setFormData({ fullName: '', email: '', phone: '', description: '' });
        onClose();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      notyf.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300" onClick={onClose}>
      <div 
        className="rounded-2xl overflow-hidden w-full max-w-lg transform transition-all duration-500 scale-100 
          bg-gradient-to-r from-[#14568e] to-[#293c7d] shadow-[0_0_40px_rgba(20,96,110,0.3)]
          backdrop-blur-lg backdrop-filter relative"
        onClick={handleModalClick}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="flex justify-between items-center pb-0 p-8 relative ">
          <h2 className="text-[1.75rem] font-untitled text-white font-medium uppercase tracking-wide 
            bg-clip-text">{formTitle ? formTitle : 'Contact Us'}</h2>
          <button 
            onClick={onClose} 
            className="text-3xl text-white/80 hover:text-white leading-none transition-all duration-300 
              hover:rotate-90 transform p-2"
          >
            ×
          </button>
        </div>

        <div className="p-8 relative z-10">
          <p className="text-white/90 text-lg text-left font-light mb-8">
            Fill out the form below and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="relative group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="peer w-full h-12 px-5 text-white bg-white/10 border-2 border-white/30 rounded-xl
                  focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300
                  group-hover:border-white/50"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="peer w-full h-12 px-5 text-white bg-white/10 border-2 border-white/30 rounded-xl
                  focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300
                  group-hover:border-white/50"
              />
            </div>

            <div className="relative group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="peer w-full h-12 px-5 text-white bg-white/10 border-2 border-white/30 rounded-xl
                  focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300
                  group-hover:border-white/50"
              />
            </div>

            <div className="relative group">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Message"
                className="peer w-full h-32 px-5 py-4 text-white bg-white/10 border-2 border-white/30 rounded-xl
                  focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300
                  resize-none group-hover:border-white/50"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 mt-8 text-[#14606E] bg-white rounded-xl
                disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-medium text-lg
                hover:bg-opacity-90 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#14606E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
