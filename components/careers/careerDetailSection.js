"use client";

import ApplyNowForm from "./applyNowForm";

const CareerDetailSection = ({ jobOpeningDetail, jobOpeningName }) => {
    console.log(jobOpeningName);
    return (
        <section className="bg-white">
            <div className="py-16 mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
                <div className="mx-auto max-w-[650px] shadow-[0_0_14px_1px_#0000001c] rounded-[20px] bg-white">
                    <div className="roles-and-resposibility-section">
                        <div
                            dangerouslySetInnerHTML={{ __html: jobOpeningDetail?.content }}
                        ></div>
                    </div>
                    <ApplyNowForm jobOpeningName={jobOpeningName} />
                </div>
            </div>
        </section>
    )
}
export default CareerDetailSection;