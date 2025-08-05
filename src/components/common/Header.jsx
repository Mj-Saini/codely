


import React, { useState } from 'react';
import logo from '../../assets/image/png/Logo.png';
import { navLinksList } from './Helper';
import { DownArrowIcons } from './Icons';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(prev => (prev === index ? null : index));
  };

  if (menuOpen) {
    document.body.style.overflow="clip"
  } else {
    document.body.style.overflow="auto"
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 primary_bg py-3">
      <div className="container custom_container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <img className='w-24 md:w-[165px]' width={165} height={34} src={logo} alt="Logo" />
        </a>

        {/* Hamburger toggle */}
        <button
          className="block lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1 flex flex-col items-end w-5 md:w-6 h-4 md:h-5 cursor-pointer ">
            <span className={`block w-full h-0.5 bg-white duration-300 ${menuOpen ? "rotate-45 translate-y-2.5":""}`}></span>
            <span className={`flex justify-end w-3/4 h-0.5 bg-white duration-300 ${menuOpen ? "opacity-0":""}`}></span>
            <span className={`block w-full h-0.5 bg-white duration-300 ${menuOpen ? "-rotate-45 -translate-y-0.5":""}`}></span>
          </div>
        </button>

        {/* Nav Menu */}
        <nav
          className={`max-lg:fixed max-lg:px-6 left-0 duration-300 ${menuOpen ? 'top-16 min-h-[50vh] bg-white py-6' : '-top-full h-1'
            } flex lg:items-center w-full lg:w-auto pt-4 lg:pt-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 w-full">
            {navLinksList.map((item, index) => (
              <li key={index} className="relative group content-center w-full lg:w-auto">
                {item.type === 'link' ? (
                  <a href={item.href} className="text-[#3e3f66] lg:text-white block w-full lg:ps-3">
                    {item.name}
                  </a>
                ) : (
                  <>
                    {/* Dropdown Tab */}
                    <div
                      onClick={() => toggleMobileDropdown(index)}
                      className={`
                        flex items-center justify-between w-full cursor-pointer 
                        text-[#3e3f66] lg:text-white dropdown_tabs 
                        lg:ps-3 py-2 rounded-t-2xl transition duration-300 
                        ${mobileDropdownOpen === index ? 'bg-white text-tertiary' : ''}
                        group-hover:text-[#DB2777] group-hover:bg-white
                      `}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`transition-transform duration-300 ${mobileDropdownOpen === index ? 'rotate-180' : ''
                          } lg:hidden`}
                      >
                        <DownArrowIcons />
                      </span>
                      <span className="hidden lg:inline-block">
                        <DownArrowIcons />
                      </span>
                    </div>

                    {/* Dropdown Content */}
                    <div
                      className={`
                     lg:absolute lg:left-0 lg:top-full lg:opacity-0 
    lg:pointer-events-none lg:-translate-y-2
    lg:transition-all lg:duration-300 lg:ease-in-out
    lg:group-hover:pointer-events-auto 
    lg:group-hover:opacity-100 
    lg:group-hover:translate-y-0
    bg-white lg:shadow-lg rounded-b-2xl rounded-r-2xl w-full lg:min-w-[180px]

                        max-lg:overflow-hidden max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out
                        ${mobileDropdownOpen === index
                          ? 'max-lg:max-h-[500px] max-lg:opacity-100 max-lg:translate-y-0 pointer-events-auto'
                          : 'max-lg:max-h-0 max-lg:opacity-0 max-lg:translate-y-2 pointer-events-none'}
                      `}
                    >
                      <ul className="flex flex-col p-2">
                        {item.subLinks.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-black transition hover:text-tertiary"
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}

            {/* CTA Button */}
            <span> <Link
              to="/contact-us"
              className="text-white secondary_bg px-6 py-2 rounded-full transition  max-lg:mt-4 inline-flex items-center gap-2 group font-semibold whitespace-nowrap lg:ms-3"
              onClick={() => setMenuOpen(false)}
            >
              TRY IT FREE  <span className="w-4 h-4  transition-transform duration-300 ease-in-out group-hover:-translate-y-1  -rotate-45 group-hover:rotate-0"><ArrowRight

              /></span>
            </Link></span>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
