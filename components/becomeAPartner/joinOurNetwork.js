"use client"
import Image from "next/image";
import { useState } from "react";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const JoinOurNetwork = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const toggle = () => setModal(!modal);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
        setSubmitStatus({ success: false, message: '' });

        const formDataObj = new FormData();
        formDataObj.append('_wpcf7', '88');
        formDataObj.append('_wpcf7_version', '5.7.7');
        formDataObj.append('_wpcf7_locale', 'en_US');
        formDataObj.append('_wpcf7_unit_tag', `wpcf7-f88-p${Date.now()}`);
        formDataObj.append('_wpcf7_container_post', '0');
        formDataObj.append('fullName', formData.fullName);
        formDataObj.append('email', formData.email);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('description', formData.description);

        try {
            const path = 'https://admin.primeidea.in';
            const response = await fetch(`${path}/wp-json/contact-form-7/v1/contact-forms/88/feedback`, {
                method: 'POST',
                body: formDataObj,
                headers: { 'Accept': 'application/json' },
                mode: 'cors',
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();

            if (data.status === 'mail_sent') {
                setSubmitStatus({
                    success: true,
                    message: 'Thank you for your message. We will get back to you soon!'
                });
                notyf.success('Thank you for your message. We will get back to you soon!');
                setFormData({ fullName: '', email: '', phone: '', description: '' });
                toggle();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                success: false,
                message: 'There was an error sending your message. Please try again.'
            });
            notyf.error('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className="bg-gradient-to-br from-[#232D63] to-[#1a2142] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0  opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[36px] xl:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Network</span>
                    </h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        Ready to take your practice to the next level? Becoming a partner with us is easy. 
                        Fill out the form below to get started or contact us directly for more information.
                    </p>
                    <button 
                        onClick={toggle}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#232D63]"
                    >
                        <span className="relative">
                            Become a Partner
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                    </button>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300" onClick={toggle}>
                    <div className="rounded-2xl overflow-hidden w-full max-w-lg transform transition-all duration-500 scale-100 
                        bg-gradient-to-r from-[#14568e] to-[#293c7d] shadow-[0_0_40px_rgba(20,96,110,0.3)]
                        backdrop-blur-lg backdrop-filter relative" 
                        onClick={handleModalClick}>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        
                        <div className="flex justify-between items-center pb-0 p-8 relative">
                            <h2 className="text-[1.75rem] font-untitled text-white font-medium uppercase tracking-wide">
                                Become A Partner
                            </h2>
                            <button 
                                onClick={toggle} 
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
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default JoinOurNetwork;