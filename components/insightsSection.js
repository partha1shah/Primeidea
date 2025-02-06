'use client'
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpAnimationDelay from "@/animations/FadeUpAnimationDelay";
import FadeUpAnimation from "@/animations/FadeUpAnimation";
import moment from "moment";

const InsightsSection = (props) => {
  const blogsListing = props.blogsListing;
  // console.log(props);
  const insightsItems = [
    {
      imageUrl: "/images/home/insights/1.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/2.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/3.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
  ];
  return (
    <section className={`${props.bgColor ? props.bgColor : ""}`}>
      <div className="py-6 sm:py-12 2xl:py-16">
        <div className="border-b border-b-[#222222]">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto md:px-4 ">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[38%] pt-4 px-4 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-medium mb-3 md:mb-5">
                  <FadeUpOneByOneAnimation>
                    Insights & Innovations
                  </FadeUpOneByOneAnimation>
                </h2>
                <FadeUpOneByOneAnimation>
                <p className="text-base md:text-lg mb-6">
                    Stay ahead with our latest articles on financial trends,
                    investment strategies, and wealth management tips. Discover
                    insights and strategies to keep your financial game strong and
                    up-to-date.
                </p>
                <a
                  href="/blogs"
                  className="bg-[#293C7D] text-base md:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                  >
                  Read All
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Read All"
                    className="ml-2"
                    />
                </a>
                </FadeUpOneByOneAnimation>

                <Image
                  src="/images/home/insights/insights.png"
                  width={320}
                  height={450}
                  alt="Insights & Innovations"
                  className="mx-auto mt-6"
                />
              </div>
              <div className="w-full md:w-[62%] md:border-l md:border-l-[#222222]">
                <ul >
                  {blogsListing?.slice(0, 3).map((item, index) => {
                    return (
                      <li className="border-b border-b-[#222222] pb-4 pt-4 px-4 md:pr-0 md:pl-4 last:border-b-0" key={index}>
                        <FadeUpOneByOneAnimation className="flex flex-wrap lg:flex-nowrap">
                          <div className="w-[85px] md:w-[132px] mr-[10px] md:mr-4">
                            <Image
                              // src={item.author.node.avatar.url}
                              src={item.featuredImage?.node.sourceUrl ? item.featuredImage?.node.sourceUrl : '/images/blogs/single-blog.jpg'}
                              width={132}
                              height={88}
                              alt={item.title}
                              className="object-contain rounded"
                            />
                            <h3 className="flex flex-col justify-center items-center mt-3 leading-[100%] text-sm md:text-base">
                              Written by{" "}
                              <span className="text-base md:text-xl font-bold capitalize">
                                {item.author.node.name}
                              </span>
                            </h3>
                          </div>
                          <div className="w-[calc(100%-95px)] md:w-[calc(100%-148px)] lg:w-[calc(100%-168px)]">
                            <div className="top-section flex items-center ">
                              <div className="bg-[#BCE4FF] text-[#000] px-3 py-1 rounded-md font-normal text-sm md:text-base">
                                {item.categories.nodes[0].name}
                              </div>{" "}
                              <span className="w-[16px] h-[2px] rounded-[5px] bg-[#222222] mx-2 md:mx-4"></span>{" "}
                              <div className="text-sm md:text-lg">{moment(item.date).format('MMMM D, YYYY')}</div>
                            </div>
                            <div className="pt-2 md:pt-3">
                              <h2 className="line-clamp-2 text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-0 leading-[130%]">
                                {item.title}
                              </h2>
                              <div dangerouslySetInnerHTML={{ __html: item.excerpt}} className="line-clamp-3 text-sm sm:text-base mb-2 md:mb-0">
                              {item.description}
                              </div>
                            </div>
                          </div>
                          <a href={`/blogs/${item.slug}`} className="ml-auto inline-flex justify-end items-baseline w-full lg:w-[36px]">
                            <Image src="/images/blogs/right-arrow.png" width={36} height={36} alt="Arrow" 
                            className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px]"
                            />
                          </a>
                        </FadeUpOneByOneAnimation>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
