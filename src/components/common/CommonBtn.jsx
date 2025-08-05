// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react'; // or your icon lib

// const CommonBtn = ({ btnName, btnStyling, path , show = true, isExternal = false }) => {
//   if (!show) return null;

//   const classes = `group secondary_bg hover:brightness-110 transition-all text-white font-semibold px-6 py-2 rounded-full flex whitespace-nowrap items-center gap-2 shadow-md text-xs sm:text-[15px] capitalize ${btnStyling}`;

//   return isExternal ? (
//     <a href={path} target="_blank" rel="noopener noreferrer" className={classes}>
//       {btnName}
//       <span className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 -rotate-45 group-hover:rotate-0">
//         <ArrowRight />
//       </span>
//     </a>
//   ) : (
//     <Link to={path} className={classes}>
//       {btnName}
//       <span className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 -rotate-45 group-hover:rotate-0 capitalize">
//         <ArrowRight />
//       </span>
//     </Link>
//   );
// };

// export default CommonBtn;



import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CommonBtn = ({ btnName, path, onClick, type = 'button', btnStyling = '', show = true }) => {
  if (!show) return null;

  const classes = `
    group secondary_bg hover:brightness-110 transition-all 
    text-white font-semibold px-6 py-3 rounded-full 
    flex items-center gap-2 shadow-md 
    text-xs sm:text-[15px] capitalize whitespace-nowrap ${btnStyling}
  `;

  const icon = (
    <span className=" transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0">
      <ArrowRight size={16} />
    </span>
  );

  if (path) {
    return (
      <Link to={path} className={classes}>
        {btnName} {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {btnName} {icon}
    </button>
  );
};

export default CommonBtn;
