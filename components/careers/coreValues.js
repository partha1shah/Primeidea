const CoreValues = () => {
    const values = [
        {
            title: "Client Excellence",
            description: "We are dedicated to understanding our clients' unique needs and goals, providing personalized solutions that drive long-term success and financial peace of mind."
        },
        {
            title: "Integrity First",
            description: "We hold ourselves to the highest ethical standards, ensuring that trust and transparency are at the heart of every relationship we build."
        },
        {
            title: "Ongoing Growth",
            description: "We are committed to lifelong learning and to careful, documented work for investors. Outcomes in the securities market are not guaranteed."
        },
        {
            title: "Teamwork & Respect",
            description: "We believe in the power of teamwork, where diverse ideas are encouraged, and mutual respect creates a positive and inclusive environment."
        },
        {
            title: "Responsibility",
            description: "We take full responsibility for our actions and results, always striving to exceed expectations and maintain a standard of excellence in everything we do."
        },
        {
            title: "Purposeful Innovation",
            description: "We embrace creative solutions and new technologies, always focusing on ways to improve our services and make a lasting impact for our clients."
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-4">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className="bg-[#cfe7ff] p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;