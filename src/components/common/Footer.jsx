// import React from 'react';
// import { Link } from 'react-router-dom';
// import AnimLine from './AnimLine';
// import { footerSections, socialLinks } from './Helper';
// import { Send } from 'lucide-react';



// const Footer = () => {
//   return (
//       <footer className="bg-[#0f0f1b] text-white relative overflow-hidden">
//              {/* Wave SVG at Bottom */}
//       <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
//         <svg
//           className="waves"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 24 150 28"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <path
//               id="gentle-wave"
//               d="M-160 44c30 0 58-18 88-18s 58 18 88 18
//               58-18 88-18 58 18 88 18 v44h-352z"
//             ></path>
//           </defs>
//           <g className="parallax">
//             <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
//             <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
//             <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
//             <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe" />
//           </g>
//         </svg>
//       </div>
//       {/* Wave Top */}
//       <div
//         className="w-full h-[105px] bg-no-repeat bg-cover -mt-1"
//         style={{ backgroundImage: `url('/images/new/wave-footer.svg')` }}
//       ></div>

//       {/* Vertical lines animation */}
//       <AnimLine />

//       {/* Main Grid */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {footerSections.map((section, index) => {
//           if (section.type === 'about') {
//             return (
//               <div key={index}>
//                 <img src={section.content.logo} alt="Logo" className="mb-4 w-36" />
//                 <p className="text-sm mb-6">{section.content.description}</p>
//                 {section.content.newsletter && (
//                   <form className="flex bg-white rounded overflow-hidden max-w-xs p-1">
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="flex-1 px-4 py-2 text-black outline-none"
//                     />
//                     <button type="submit" className="secondary_bg p-2 rounded text-white">
//                        <Send />
//                     </button>
//                   </form>
//                 )}
//               </div>
//             );
//           } else if (section.type === 'links') {
//             return (
//               <div key={index}>
//                 <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
//                 <ul className="space-y-2 text-sm">
//                   {section.content.map((item, i) => (
//                     <li key={i}>
//                       <Link to="#" className="hover:underline">
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           } else if (section.type === 'contact') {
//             return (
//               <div key={index}>
//                 <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
//                 <ul className="space-y-5">
//                   {section.content.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <img src={item.icon} alt="icon" className="w-6 h-6" />
//                       <div>
//                         <p className="text-sm">
//                           {item.label}{' '}
//                           {item.link ? (
//                             <a href={item.link} className="hover:underline">
//                               {item.detail}
//                             </a>
//                           ) : (
//                             <span className="block">{item.detail}</span>
//                           )}
//                         </p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-800 py-4">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
//           <p>© Copyrights 2023. All rights reserved.</p>
//           <ul className="flex space-x-4 my-3 md:my-0">
//             {socialLinks.map((item, i) => (
//               <li key={i}>
//                 <a href={item.url} className="hover:text-white">
//                   <i className={item.icon}></i>
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <p>
//             Design & developed by{' '}
//             <a
//               href="https://themeforest.net/user/kalanidhithemes"
//               className="hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Kalanidhi Themes
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Go To Top Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-4 right-4 secondary_bg text-white p-2 rounded-full shadow-md z-50"
//       >
//         <i className="icofont-arrow-up" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import AnimLine from './AnimLine';
import { footerSections, socialLinks } from './Helper';
import { Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1b] text-white relative overflow-hidden pt-12 md:pt-16 lg:pt-[105px]">

  
      {/* Vertical lines animation */}
      <AnimLine />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {footerSections.map((section, index) => {
          if (section.type === 'about') {
            return (
              <div key={index}>
                <img src={section.content.logo} alt="Logo" className="mb-4 w-36" />
                <p className="text-sm mb-6">{section.content.description}</p>
                {section.content.newsletter && (
                  <form className="flex bg-white rounded overflow-hidden max-w-xs p-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 text-black outline-none"
                    />
                    <button type="submit" className="secondary_bg p-2 rounded text-white">
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            );
          } else if (section.type === 'links') {
            return (
              <div key={index}>
                <h3 className="text-base lg:text-xl font-semibold text-white mb-5">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.content.map((item, i) => (
                    <li key={i}>
                      <Link to="#" className="text-sm md:text-[17px] text-white hover:translate-x-1">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else if (section.type === 'contact') {
            return (
              <div key={index}>
                <h3 className="text-base lg:text-xl font-semibold text-white mb-5">{section.title}</h3>
                <ul className="space-y-5">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <img src={item.icon} alt="icon" className="" />
                      <div>
                        <p className="text-sm md:text-[17px] text-[#fff]">
                          {item.label} <br />
                          {item.link ? (
                            <a href={item.link} className="text-sm md:text-[17px] text-[#fff]">
                              {item.detail}
                            </a>
                          ) : (
                            <span className="block text-sm md:text-[17px] text-[#fff]">{item.detail}</span>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/30 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="block text-xs md:text-[15px] text-[#fff]">© Copyrights 2023. All rights reserved.</p>
          <ul className="flex space-x-4 my-3 md:my-0">
            {socialLinks.map((item, i) => (
              <li key={i}>
                <Link to={item.url} className="text-white hover:bg-white hover:text-[#3B82F6] duration-300 border border-white/30 w-9 h-9 flex items-center justify-center rounded-full">
              {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          <p className="block text-xs md:text-[15px] text-[#fff]">
            Design & developed by{' '}
            <a
              href="https://themeforest.net/user/kalanidhithemes"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kalanidhi Themes
            </a>
          </p>
        </div>
      </div>

      {/* Go To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-white  text-black p-2 rounded-full go_top font-bold z-50"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
