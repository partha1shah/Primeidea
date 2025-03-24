
const JobListingSection = ({ jobOpeningsList }) => {

    return (
        <section>
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-10 text-center">
                        Join Our Team
                    </h2>
                    <ul className="mx-auto max-w-[700px] shadow-[0_0_14px_1px_#0000001c] rounded-[10px] p-8 bg-white">
                        {jobOpeningsList.map((items, index) => {
                            return (
                                <li className="w-full" key={index}>
                                    <div className="group text-[12px] flex justify-between items-center sm:text-base border border-[#cfe7ff] text-[#666666] px-3 md:px-4 py-1 md:py-2 rounded-lg w-full inline-block leading-[1.2] mb-4 hover:bg-[#cfe7ff] hover:text-black duration-[0.3s] hover:duration-[0.3s]">
                                        <span className="opening uppercase">{items.title}</span>
                                        <a href={`/careers/${items.slug}`} className="px-5 py-1 bg-[#cfe7ff] text-black rounded border border-[#cfe7ff] group-hover:border-black duration-[0.3s] hover:duration-[0.3s] whitespace-nowrap">Apply Now</a>
                                    </div>
                                </li>
                            )
                        })}
                        {/* <li className="w-full">
                                <div className="group text-[12px] flex justify-between items-center sm:text-base border border-[#cfe7ff] text-[#666666] px-3 md:px-4 py-1 md:py-2 rounded-lg w-full inline-block leading-[1.2] mb-4 hover:bg-[#cfe7ff] hover:text-black duration-[0.3s] hover:duration-[0.3s]">
                                    <span className="opening uppercase">Brand Manager</span>
                                    <a href="/careers/brand-manager" className="px-5 py-1 bg-[#cfe7ff] text-black rounded border border-[#cfe7ff] group-hover:border-black duration-[0.3s] hover:duration-[0.3s]">Apply Now</a>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="group text-[12px] flex justify-between items-center sm:text-base border border-[#cfe7ff] text-[#666666] px-3 md:px-4 py-1 md:py-2 rounded-lg w-full inline-block leading-[1.2] mb-4 hover:bg-[#cfe7ff] hover:text-black duration-[0.3s] hover:duration-[0.3s]">
                                    <span className="opening uppercase">Brand Manager</span>
                                    <a href="/careers/brand-manager" className="px-5 py-1 bg-[#cfe7ff] text-black rounded border border-[#cfe7ff] group-hover:border-black duration-[0.3s] hover:duration-[0.3s]">Apply Now</a>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="group text-[12px] flex justify-between items-center sm:text-base border border-[#cfe7ff] text-[#666666] px-3 md:px-4 py-1 md:py-2 rounded-lg w-full inline-block leading-[1.2] mb-4 hover:bg-[#cfe7ff] hover:text-black duration-[0.3s] hover:duration-[0.3s]">
                                    <span className="opening uppercase">Brand Manager</span>
                                    <a href="/careers/brand-manager" className="px-5 py-1 bg-[#cfe7ff] text-black rounded border border-[#cfe7ff] group-hover:border-black duration-[0.3s] hover:duration-[0.3s]">Apply Now</a>
                                </div>
                            </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default JobListingSection;