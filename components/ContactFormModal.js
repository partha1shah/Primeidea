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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-lg" onClick={handleModalClick}>
        <div className="flex justify-between items-center pb-0 p-4 relative">
          <h2 className="text-[1.5rem] font-untitled text-black font-medium uppercase">{formTitle ? formTitle : 'Contact Us'}</h2>
          <button onClick={onClose} className="text-[72px] text-gray-500 hover:text-gray-700 leading-[100%] absolute right-3 top-[-10px]">
            &times;
          </button>
        </div>
        <div className="p-4">
          <p className="text-[#14606E] text-lg text-left">
            Fill out the form below and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-12 px-4 py-2 mt-4 text-black border border-[#14606E] rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-12 px-4 py-2 mt-4 text-black border border-[#14606E] rounded-md focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-12 px-4 py-2 mt-4 text-black border border-[#14606E] rounded-md focus:outline-none"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-32 px-4 py-2 mt-4 text-black border border-[#14606E] rounded-md focus:outline-none"
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 mt-4 text-white bg-[#479ad2] rounded-md disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
