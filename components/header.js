"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  // { name: "About Us", href: "/about-us", current: false },  
  {
    name: "Financial Planning",
    href: "financial-planning-and-investment-advisory",
    current: true,
  },
  {
    name: "Investment Planning",
    href: "#",
    current: false,
    submenus: [
      // { name: "Bonds", href: "#" },
      // { name: "Savings Accounts", href: "#" },
      // { name: "Insurance", href: "#" },
    ],
  },
  { name: "Insurance", href: "/insurance", current: false },
  { name: "Blogs", href: "/blogs", current: false },
  {
    name: "Company",
    href: "#",
    current: false,
    submenus: [
      { name: "About Us", href: "about-us" },
      { name: "Become a Partner", href: "become-a-partner" },
      { name: "Careers", href: "careers" },
    ],
  },
  { name: "Contact Us", href: "/contact-us ", current: false },
  { name: "Login", href: "https://login.primeidea.in ", current: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveWealthCreationMenu, setIsActiveWealthCreationMenu] =
    useState(false);
  const [isActiveWealthPreservationMenu, setIsActiveWealthPreservationMenu] =
    useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [activeMainMenu, setActiveMainMenu] = useState(null);
  const [showInvestmentSubmenu, setShowInvestmentSubmenu] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmenuClick = (item) => {
    if (item.submenus) {
      setActiveSubmenu(item.name);
      setBreadcrumb([...breadcrumb, item.name]);
    } else {
      setActiveSubmenu(null);
      setBreadcrumb([]);
    }
  };

  const handleBackClick = () => {
    setBreadcrumb(breadcrumb.slice(0, -1));
    setActiveSubmenu(breadcrumb[breadcrumb.length - 2] || null);
  };

  const handleMobileMenuClick = (item) => {
    if (item.name === "Investment Planning") {
      setShowInvestmentSubmenu(true);
      setActiveMainMenu("investment");
    } else if (item.name === "Company") {
      setActiveMainMenu("company");
    } else {
      setActiveMainMenu(null);
      setShowInvestmentSubmenu(false);
    }
  };

  return (
    <header className="absolute top-0 left-[50%] translate-x-[-50%] w-[calc(100%-32px)] my-[20px] mx-auto 2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] z-[9]">
      <div className="flex h-16 items-center justify-between px-2 lg:px-4 xl:px-6 2xl:px-8 bg-[#ABDDFF] shadow-[0_0px_6.034px_0px_rgba(0,0,0,0.25)] rounded-md">
        <div className="flex flex-1 items-center justify-items-start sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/">
              <Image
                src="/images/logo-black.png"
                width={184}
                height={40}
                alt="Primeidea Ventures"
                className="h-10 w-[140px] sm:w-[160px] sm:w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-auto mr-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Desktop menu */}
          {/* <nav className="hidden lg:flex lg:space-x-8 ml-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="text-black hover:text-[#E40115] px-3 py-2 text-sm font-medium">
                  {item.name}
                </button>
                {item.submenus && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.submenus.map((submenu) => (
                        <a
                          key={submenu.name}
                          href={submenu.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {submenu.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav> */}
          <div
            id="mega-menu-full-cta"
            className="hidden w-full lg:block md:w-auto md:order-1 mx-auto	 "
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              
              <li className="!ml-2">
                <a
                  href="/financial-planning-and-investment-advisory"
                  className="block py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115]"
                >
                  Financial Planning
                </a>
              </li>
              {/* <li className="!ml-2 group">
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className={`flex items-center justify-between w-full py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115] ${
                      isActiveWealthCreationMenu ? "active" : ""
                    }`}
                    onMouseEnter={() => setIsActiveWealthCreationMenu(true)}
                    onMouseLeave={() => setIsActiveWealthCreationMenu(false)}
                  >
                    Financial Planning{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="mega-menu-full-cta-dropdown"
                    className="mt-1 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] bg-[#abddff] p-5 absolute top-[50px] left-0 w-full shadow-[0_7px_6.034px_0px_rgba(0,0,0,0.25)] rounded-b-md transition hidden group-hover:block group-hover:transition"
                  >
                    <div className="flex justify-between">
                      <div className="w-1/2 px-2">
                        <a href="/financial-planning-and-investment-advisory" className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer">
                          <Image
                            src="/images/header/wealth-creation/financial-investment-advisory.png"
                            width={621}
                            height={322}
                            alt="Financial Investment Advisory"
                            className="rounded-[12px] w-full"
                          />
                          <div className="absolute top-0 left-0 p-5">
                            <h2 className="font-bold mb-3 text-[#171717]">
                              Financial Investment Advisory
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                              Financial advisors provides expert guidence on
                              investing your money. They analyze market trends,
                              asssess your risk tolerance, and recommend
                              suitable investment options to help you grow your
                              wealth.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="w-1/2 px-2">
                        <a href="/financial-planning-and-investment-advisory" className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer">
                          <Image
                            src="/images/header/wealth-creation/financial-investment-planning.png"
                            width={621}
                            height={322}
                            alt="Financial Investment Planning"
                            className="rounded-[12px] w-full"
                          />
                          <div className="absolute top-0 left-0 p-5">
                            <h2 className="font-bold mb-3 text-[#171717]">
                              Financial Investment Planning
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                              Financial advisors provides expert guidence on
                              investing your money. They analyze market trends,
                              asssess your risk tolerance, and recommend
                              suitable investment options to help you grow your
                              wealth.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li> */}
              <li className="!ml-2 group">
                <button
                  id="mega-menu-full-cta-dropdown-button"
                  data-collapse-toggle="mega-menu-full-cta-dropdown"
                  data-dropdown-placement="bottom"
                  className={`flex items-center justify-between w-full py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115] ${
                    isActiveWealthPreservationMenu ? "active" : ""
                  }`}
                  onMouseEnter={() => setIsActiveWealthPreservationMenu(true)}
                  onMouseLeave={() => setIsActiveWealthPreservationMenu(false)}
                >
                  Investment Planning{" "}
                  {/* <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg> */}
                </button>
                <div
                  id="mega-menu-full-cta-dropdown"
                  className="mt-1 2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] bg-[#abddff] p-5 absolute top-[50px] left-0 w-full shadow-[0_7px_6.034px_0px_rgba(0,0,0,0.25)] rounded-b-md transition hidden group-hover:block group-hover:transition"
                >
                  <div className="flex justify-between">
                    <div className="w-1/4 px-2">
                      <a
                        href="/research-based-wealth-management"
                        className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                      >
                        <Image
                          src="/images/header/wealth-preservation/RBWM.png"
                          width={425}
                          height={329}
                          alt="Research Based Wealth Management"
                          className="rounded-[12px] w-full h-full"
                        />
                        <div className="absolute top-0 left-0 p-5">
                          <h2 className="font-bold mb-3 text-[#171717]">
                            Research Based Wealth Management
                          </h2>
                          <p className="max-w-[240px] text-[14px]">
                            Our research-driven approach helps you develop a personalized investment strategy that optimizes growth and secures your financial future.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/4 px-2">
                      <a
                        href="/retirement-planning"
                        className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                      >
                        <Image
                          src="/images/header/wealth-preservation/Retirement_PLANING.png"
                          width={282}
                          height={253}
                          alt="Dream Retirement Planning"
                          className="rounded-[12px] w-full h-full"
                        />
                        <div className="absolute top-0 left-0 p-5">
                          <h2 className="font-bold mb-3 text-[#171717]">
                            Dream Retirement Planning
                          </h2>
                          <p className="max-w-[240px] text-[14px]">
                            We craft retirement plans that align with your aspirations, ensuring peace of mind in your golden years.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/4 px-2">
                      <a
                        href="/legacy-inheritance-planning"
                        className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                      >
                        <Image
                          src="/images/header/wealth-preservation/legacy.png"
                          width={289}
                          height={253}
                          alt="Legacy & Inheritance Planning"
                          className="rounded-[12px] w-full h-full"
                        />
                        <div className="absolute top-0 left-0 p-5">
                          <h2 className="font-bold mb-3 text-[#171717]">
                            Legacy & Inheritance Planning
                          </h2>
                          <p className="max-w-[240px] text-[14px]">
                            Protect your legacy and ensure a smooth transition of wealth to your loved ones, preserving your values for generations to come.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/4 px-2">
                      <a
                        href="/tax-planning-savings"
                        className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                      >
                        <Image
                          src="/images/header/wealth-preservation/tax-planning.png"
                          width={284}
                          height={254}
                          alt="Tax Planning & Savings"
                          className="rounded-[12px] w-full h-full"
                        />
                        <div className="absolute top-0 left-0 p-5">
                          <h2 className="font-bold mb-3 text-[#171717]">
                            Tax Planning & Savings
                          </h2>
                          <p className="max-w-[240px] text-[14px]">
                            Maximize your savings through proactive tax strategies, minimizing liabilities while growing your wealth efficiently.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="!ml-2">
                <a
                  href="/insurance"
                  className="block py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115]"
                >
                  Insurance
                </a>
              </li>
              <li className="!ml-2 relative group">
                <button className="flex items-center justify-between w-full py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115] " >
                  Company
                  {/* <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg> */}
                <div className="absolute top-[50px] left-0 mt-2 w-48 rounded-md shadow-lg bg-[#abddff] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                    <div className="py-1 text-left" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a
                          href="/about-us"
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:text-[#E40115]"
                          role="menuitem"
                        >
                          About Us
                        </a>
                        <a
                          href="/become-a-partner"
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:text-[#E40115]"
                          role="menuitem"
                        >
                          Become a Partner
                        </a>
                        <a
                          href="/careers"
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:text-[#E40115]"
                          role="menuitem"
                        >
                          Careers
                        </a>
                      
                    </div>
                </div>
                </button>
              </li>             
              <li className="!ml-2">
                <a
                  href="/blogs"
                  className="block py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115]"
                >
                  Blogs
                </a>
              </li>
               <li className="!ml-2">
                <a
                  href="/contact-us"                  
                  className="block py-4 2xl:py-5 px-2 2xl:px-3 text-[15px] 2xl:text-base font-medium md:w-auto hover:text-[#E40115]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact button */}
        <div className="lg:flex items-center">
          <a
            href="https://login.primeidea.in"
            target="_blank"
            className="rounded-[10px] py-1.5 px-[18px] border border-solid border-[#1F1F1F] text-[#171717] hover:text-white hover:bg-[#E40115] hover:border-[#E40115]"
          >
            Login
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-2 bg-white rounded-md shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 relative">
          {showInvestmentSubmenu ? (
            <>
              <button
                onClick={() => {
                  setShowInvestmentSubmenu(false);
                  setActiveMainMenu(null);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                ← Back
              </button>
              <div className="flex justify-between flex-wrap">
                <div className="w-[calc(50%-8px)] mb-4">
                  <a
                    href="/research-based-wealth-management"
                    className="block relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                  >
                    <Image
                      src="/images/header/wealth-preservation/RBWM.png"
                      width={425}
                      height={329}
                      alt="Research Based Wealth Management"
                      className="rounded-[12px] w-full h-full"
                    />
                    <div className="absolute top-0 left-0 p-3">
                      <h2 className="font-bold mb-2 text-[#171717] text-sm">
                        Research Based Wealth Management
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="w-[calc(50%-8px)] mb-4">
                  <a
                    href="/retirement-planning"
                    className="block relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                  >
                    <Image
                      src="/images/header/wealth-preservation/Retirement_PLANING.png"
                      width={282}
                      height={253}
                      alt="Dream Retirement Planning"
                      className="rounded-[12px] w-full h-full"
                    />
                    <div className="absolute top-0 left-0 p-3">
                      <h2 className="font-bold mb-2 text-[#171717] text-sm">
                        Dream Retirement Planning
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="w-[calc(50%-8px)] mb-4">
                  <a
                    href="/legacy-inheritance-planning"
                    className="block relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                  >
                    <Image
                      src="/images/header/wealth-preservation/legacy.png"
                      width={289}
                      height={253}
                      alt="Legacy & Inheritance Planning"
                      className="rounded-[12px] w-full h-full"
                    />
                    <div className="absolute top-0 left-0 p-3">
                      <h2 className="font-bold mb-2 text-[#171717] text-sm">
                        Legacy & Inheritance Planning
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="w-[calc(50%-8px)] mb-4">
                  <a
                    href="/tax-planning-savings"
                    className="block relative rounded-[12px] shadow-[0_0_5px_0_#00000040] cursor-pointer"
                  >
                    <Image
                      src="/images/header/wealth-preservation/tax-planning.png"
                      width={284}
                      height={254}
                      alt="Tax Planning & Savings"
                      className="rounded-[12px] w-full h-full"
                    />
                    <div className="absolute top-0 left-0 p-3">
                      <h2 className="font-bold mb-2 text-[#171717] text-sm">
                        Tax Planning & Savings
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </>
          ) : activeMainMenu === "company" ? (
            <>
              <button
                onClick={() => setActiveMainMenu(null)}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                ← Back
              </button>
              <a href="/about-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About Us
              </a>
              <a href="/become-a-partner" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Become a Partner
              </a>
              <a href="/careers" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Careers
              </a>
            </>
          ) : (
            (activeSubmenu
              ? navigation.find((item) => item.name === activeSubmenu).submenus
              : navigation
            ).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.submenus) {
                    e.preventDefault();
                    handleMobileMenuClick(item);
                  }
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
                {item.submenus && <span className="float-right">→</span>}
              </a>
            ))
          )}
        </div>
      </div>
    </header>
  );
}
