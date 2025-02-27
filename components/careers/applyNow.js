const ApplyNow = () => {
    const emailAddress = 'jobs@primeidea.in';
    
    return (
        <section className="bg-gradient-to-br from-[#232D63] to-[#1a2142] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0  opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[36px] xl:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Join Our  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Team</span>
                    </h2>
                    <p className="text-gray-300 text-xl mb-4 leading-relaxed">
                        Are you ready to take your career to the next level? Join our team and be part of an innovative and passionate workplace – apply today!
                    </p>
                    <p className="text-gray-300 text-lg mb-10">
                        Send your resume to: <a href={`mailto:${emailAddress}`} className="text-blue-400 hover:text-blue-300 underline">{emailAddress}</a>
                    </p>
                    <a 
                    // href={`mailto:${emailAddress}`} 
                    href="/careers/submit-resume"
                       className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#232D63]"
                       target="_blank"
                       >
                        <span className="relative">
                            Apply Now
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ApplyNow;