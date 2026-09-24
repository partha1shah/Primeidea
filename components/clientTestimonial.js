"use client";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Slider from "react-slick";

const ClientTestimonial = () => {
  const sliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [activeSlides, setActiveSlides] = useState([]);

  const updateActiveSlides = useCallback((currentIndex, slidesToShow) => {
    const active = [];
    for (let i = currentIndex; i < currentIndex + slidesToShow; i++) {
      active.push(i);
    }
    setActiveSlides(active);
  }, []);

  const settings = {
    afterChange: (current) => {
      const slidesToShow = sliderRef.current?.props.slidesToShow || 3;
      updateActiveSlides(current, slidesToShow);
    },
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      setNav1(sliderRef.current);
      const slidesToShow = sliderRef.current.props.slidesToShow || 3;
      updateActiveSlides(0, slidesToShow);
    }
  }, [updateActiveSlides]);

  const sliderItem = [
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mr. Ravi Patel",
      subtitle: "IT Professional · Vadodara",
      description:
        "The portfolio review mapped overlap across my SIPs before suggesting any change. Clear process, written next steps, and no pressure to buy a product.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Ms. Priya Shah",
      subtitle: "Entrepreneur · Gujarat",
      description:
        "They walked through allocation, cost, and tax impact on schemes I already held. I finally understood what each holding was meant to do in the book.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mr. Anand Desai",
      subtitle: "Senior Manager · Gujarat",
      description:
        "Office and video reviews followed the same research checklist. Suitability came first — not a pitch list or a promise of performance.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Dr. Neha Joshi",
      subtitle: "Doctor · Vadodara",
      description:
        "Insurance and investments were reviewed together against goals and cash needs. Practical, research-led guidance I could verify and follow.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mr. Manish Kumar",
      subtitle: "Business Owner · Gujarat",
      description:
        "For a multi-product family book, the review brought one clear picture — concentration, liquidity, and what to keep versus revisit later.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Ms. Kavita Mehta",
      subtitle: "Pre-retiree · Vadodara",
      description:
        "Retirement planning focused on corpus, withdrawal needs, and risk, without guaranteed-income language.The framework made the conversation calmer.",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mr. Suresh Iyer",
      subtitle: "NRI investor · Video review",
      description:
        "Joining from outside India was straightforward.India holdings were reviewed for fit and documentation clarity,with the Vadodara team on a structured call.",
    },
  ];

  return (
    <section aria-labelledby="testimonials-heading">
      <div className="bg-[#F6FDFF] pt-10 pb-14 md:pt-12 md:pb-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <FadeUpOneByOneAnimation className="text-center max-w-[640px] mx-auto mb-8 md:mb-10">
            <h2
              id="testimonials-heading"
              className="text-2xl font-medium tracking-tight text-[#04102A] sm:text-3xl mt-0 mb-3"
            >
              What clients say about the process
            </h2>
            <p className="text-base text-[#4D4D4D] m-0 leading-relaxed">
              Process-led feedback on portfolio review and planning conversations —
              not return promises.
            </p>
          </FadeUpOneByOneAnimation>
          <div className="bg-[#C6E8FF] flex rounded-lg">
            <div className="w-full md:w-[78%] 2xl:w-[82%] md:border-r border-r-[#B2B2B2] px-6 md:py-6 py-10 lg:py-12 lg:px-10">
              {/* <div className="flex justify-between mx-[-3%]"> */}
              <Slider
                {...settings}
                asNavFor={nav1}
                // ref={(slider) => {setSlider1(slider);sliderRef}}
                // ref={(slider) => {
                //   setSlider1(slider);
                //   sliderRef.current = slider;
                // }}
                ref={sliderRef}
                // ref={sliderRef}
              >
                {sliderItem.map((item, index) => {
                  return (
                    <div
                      key={index}
                      // className={currentSlide === index ? "active" : null}
                    >
                      <FadeUpOneByOneAnimation
                        className={`px-[10px] sm:px-[30px] ${
                          activeSlides.includes(index) ? "sm:border-r " : ""
                        } border-r-[#B2B2B2]`}
                      >
                        <Image
                          src={item.imageUrl}
                          width={61}
                          height={43}
                          alt="Commas"
                          className="mb-6"
                        />
                        <p className="mb-10 text-lg">{item.description}</p>
                        <div>
                          <h3 className="font-bold text-2xl mb-1">
                            {item.title}
                          </h3>
                          <h4 className="font-normal text-lg">
                            {item.subtitle}
                          </h4>
                        </div>
                      </FadeUpOneByOneAnimation>
                    </div>
                  );
                })}
              </Slider>
              {/* </div> */}
            </div>
            <div className="hidden md:inline-block w-[22%] 2xl:w-[18%] p-10 text-center">
              <FadeUpOneByOneAnimation className="text-[22px] font-normal">Average Rating</FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="my-3 text-6xl font-semibold block">4.9</FadeUpOneByOneAnimation>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/icons/stars.png"
                  width={100}
                  height={22}
                  alt="Ratings"
                />
              </div>
              <FadeUpOneByOneAnimation className="mt-2 max-w-[80%] mx-auto block text-sm text-[#4D4D4D]">
                Based on client feedback
              </FadeUpOneByOneAnimation>
              <span className="bg-[#B2B2B2] h-[1px] w-full block my-[30px] "></span>

              <div className="flex">
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="p-4 m-2 rounded-full bg-[#E3E3E3] hover:bg-[#A0CDEC] outline-0"
                >
                  <Image
                    src="/images/icons/arrow-s-left.png"
                    width={31}
                    height={31}
                    alt="Left"
                  />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="p-4 m-2 rounded-full bg-[#E3E3E3] hover:bg-[#A0CDEC] outline-0"
                >
                  <Image
                    src="/images/icons/arrow-s-right.png"
                    width={31}
                    height={31}
                    alt="Right"
                  />
                </button>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[#6B7C8A] leading-relaxed max-w-[720px] mx-auto">
            Individual experiences vary. Investments in the securities market are subject to
            market risks. PrimeIdea Ventures does not guarantee returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
