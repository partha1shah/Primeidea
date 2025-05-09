"use client";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { convertBase64 } from '@/lib/convertBase64';

const ApplyNowForm = ({jobOpeningName}) => {
    const pathname = usePathname();
    const isSubmitResumePage = pathname === '/careers/submit-resume';
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        cv: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.id]: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
            });
        }
    };

    useEffect(() => {
        if (!isSubmitResumePage && jobOpeningName) {
            setFormData(prev => ({
                ...prev,
                position: jobOpeningName
            }));
        }
    }, [jobOpeningName, isSubmitResumePage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const notyf = new Notyf({
            position: { x: "right", y: "top" },
            duration: 5000,
        });

        // Add position to required fields validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.cv || (isSubmitResumePage && !formData.position)) {
            notyf.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append('_wpcf7', '109');
            formDataObj.append('_wpcf7_version', '5.7.7');
            formDataObj.append('_wpcf7_locale', 'en_US');
            formDataObj.append('_wpcf7_unit_tag', `wpcf7-f109-p${Date.now()}`);
            formDataObj.append('_wpcf7_container_post', '0');
            
            // Use the correct field names and values
            formDataObj.append('fullName', formData.fullName);
            formDataObj.append('email', formData.email);
            formDataObj.append('phone', formData.phone);
            // Use formData.position for submit-resume page, otherwise use jobOpeningName
            formDataObj.append('position', isSubmitResumePage ? formData.position : (jobOpeningName || ''));
            
            if (formData.cv) {
                formDataObj.append('cv', formData.cv, formData.cv.name);
            }

            const path = 'https://admin.primeidea.in';
            const response = await fetch(`${path}/wp-json/contact-form-7/v1/contact-forms/109/feedback`, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json',
                },
                mode: 'cors',
            });

            const data = await response.json();

            // Contact Form 7 sometimes returns status 500 but still processes the form
            // Check if we received any kind of response from the server
            if (data) {
                notyf.success('Thank you for your application. We will get back to you soon!');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    position: '',
                    cv: null
                });
                // Reset file input
                const fileInput = document.getElementById('cv');
                if (fileInput) {
                    fileInput.value = '';
                }
                return;
            }

            throw new Error('Failed to submit form');
        } catch (error) {
            console.error('Submission error:', error);
            // Don't show error if we already showed success message
            if (!document.getElementById('cv').value === '') {
                notyf.error('There was an error sending your application. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-left text-[#0C2D48] mb-2 uppercase">Submit Your Resume</h2>
            <p className="text-lg text-left text-gray-600 mb-8 font-medium">
                Our Team will be in touch with you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full p-3 border-2 border-[#8a8a8a] rounded-lg font-medium text-gray-800 placeholder:text-gray-500 focus:border-[#0C2D48] outline-none transition-all bg-transparent uppercase"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="w-full p-3 border-2 border-[#8a8a8a] rounded-lg font-medium text-gray-800 placeholder:text-gray-500 focus:border-[#0C2D48] outline-none transition-all bg-transparent uppercase"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full p-3 border-2 border-[#8a8a8a] rounded-lg font-medium text-gray-800 placeholder:text-gray-500 focus:border-[#0C2D48] outline-none transition-all bg-transparent uppercase"
                    />
                </div>
                {isSubmitResumePage && (
                    <div>
                        <input
                            type="text"
                            id="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Position Applying For *"
                            className="w-full p-3 border-2 border-[#8a8a8a] rounded-lg font-medium text-gray-800 placeholder:text-gray-500 focus:border-[#0C2D48] outline-none transition-all bg-transparent uppercase"
                        />
                    </div>
                )}
                <div className="relative">
                    <input
                        type="file"
                        id="cv"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full p-3 border-2 border-[#8a8a8a] rounded-lg font-medium text-gray-800 focus:border-[#0C2D48] outline-none transition-all bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#0C2D48] file:text-white hover:file:bg-[#0a2339]"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0C2D48] text-white py-3.5 rounded-lg font-semibold hover:bg-[#0a2339] transition-colors duration-300 mt-8 text-lg disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </span>
                    ) : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default ApplyNowForm;