"use client"
import { Notyf } from "notyf";
import { useState } from 'react';
import TurnstileWidget from "@/components/TurnstileWidget";
import { CF7_FORM_IDS, submitCf7Form } from "@/lib/cf7Submit";
import { useTurnstile } from "@/lib/useTurnstile";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        email: '',
        phone: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    const turnstile = useTurnstile();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const notyf = new Notyf({
            position: {
                x: "right",
                y: "top",
            },
            duration: 5000,
        });
    
        if (!formData.fullName || !formData.email || !formData.description) {
            notyf.error('Please fill in all required fields');
            return;
        }

        if (!turnstile.token) {
            notyf.error('Please complete the security check before submitting.');
            return;
        }
    
        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });
    
        try {
            const result = await submitCf7Form(CF7_FORM_IDS.contact, formData, {
                turnstileToken: turnstile.token,
            });

            if (result.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Thank you for your message. We will get back to you soon!'
                });
                notyf.success('Thank you for your message. We will get back to you soon!');
                setFormData({ fullName: '', city: '', email: '', phone: '', description: '' });
                turnstile.reset();
            } else {
                turnstile.reset();
                setSubmitStatus({
                    success: false,
                    message: result.message || 'There was an error sending your message. Please try again.'
                });
                notyf.error(result.message || 'There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            turnstile.reset();
            setSubmitStatus({
                success: false,
                message: 'There was an error sending your message. Please try again.'
            });
            notyf.error('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>               
            <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter Your City" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone No" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                rows="4" 
                placeholder="Enter Your Message" 
                required
                className="mb-6 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]"
            ></textarea>
            <TurnstileWidget
                onToken={turnstile.onToken}
                resetKey={turnstile.resetKey}
                className="min-h-[65px]"
            />
            {submitStatus.message && (
                <div className={`p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                </div>
            )}
            <button 
                type="submit" 
                disabled={isSubmitting || !turnstile.token}
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 w-full text-center disabled:opacity-50"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}

export default ContactForm;
