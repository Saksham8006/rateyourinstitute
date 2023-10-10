import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css'
import { HiOutlineLogout } from "react-icons/hi"
// import { useLocation } from 'react-router-dom';


// import { GrMenu } from 'react-icons/gr'

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState('');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setCurrentPath(location.pathname);
    checkLoginStatus();
  }, [location]);

  const checkLoginStatus = () => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Update isLoggedIn based on token existence
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    setIsMobileMenuOpen(false); // Close the mobile menu
    // Navigate to the signin page
    navigate('/login');
  };

  return (
    <>
      {currentPath === '/login' || currentPath === '/register' ? null : (
        <header className="flex flex-wrap sm:justify-start shadow-md shadow-gray-500/10 sm:flex-nowrap fixed z-50 w-full bg-white bg-opacity-20 backdrop-blur backdrop-saturate-160 backdrop-contrast-45 backdrop-brightness-140 border-b border-gray-200 text-sm py-3 sm:py-0">
          <nav className="relative w-full sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
              <NavLink className="flex-none text-xl pl-2 font-semibold text-blue-700" to="/" aria-label="RateYourInstitute">
                RateYourInstitute
              </NavLink>
              <div className="sm:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="hs-collapse-toggle mr-[10px] bg-blue-200 hover:scale-105 hover:bg-blue-400 p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-slate-800 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className={`hs-collapse-open:block ${isMobileMenuOpen ? 'hidden' : ''} w-4 h-4`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18V9H3v4zm0-9v2h18V4H3z" />
                  </svg>
                  <svg
                    className={`hs-collapse-open:hidden ${isMobileMenuOpen ? '' : 'hidden'} w-4 h-4`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M448 288H0v64h448v-64zm0-192H0v64h448V96zm0-96V0H0v64h448z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className={`hs-collapse px-5 ${isMobileMenuOpen ? 'block' : 'hidden'
                } overflow-hidden transition-all duration-300 text-black basis-full grow sm:block`}
            >
              <div className="flex flex-col sm:py-2 md:py-1 lg:py-4 text-blue-600 gap-y-4 gap-x-0  sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                <NavLink
                  className={`navlink ${currentPath === '/home' ? 'text-blue-500' : ''}`}
                  to="/"
                  aria-current="page"
                  onClick={closeMobileMenu} // Close the mobile menu on link click
                >
                  Home
                </NavLink>
                <NavLink className={`navlink ${currentPath === '/about' ? 'text-blue-500' : ''}`}
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
                <NavLink className={`navlink ${currentPath === '/blogs' ? 'text-blue-500' : ''}`}
                  to="/blogs"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
                <NavLink className={`navlink ${currentPath === '/reviews' ? 'text-blue-500' : ''}`}
                  to="/reviews"
                  onClick={closeMobileMenu}
                >
                  Reviews
                </NavLink>
                <NavLink className={`navlink ${currentPath === '/feature' ? 'text-blue-500' : ''}`}
                  to="/feature"
                  onClick={closeMobileMenu}
                >
                  Features
                </NavLink>
                <NavLink className={`navlink ${currentPath === '/contact' ? 'text-blue-500' : ''}`}
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
                <NavLink to="/rev"
                  onClick={closeMobileMenu}
                >
                  <button className="flex gap-x-2 font-medium  bg-blue-600 text-white px-[16px] py-[12px] rounded-[5px] hover:bg-blue-700 hover:scale-105 transition-all">
                    Write A Review
                  </button>
                </NavLink>


                <div className="flex items-center gap-x-2 sm:ml-auto">
                  {!isLoggedIn ? (
                    <NavLink to="/login">
                      <button className="flex  justify-center text-centerfont-medium bg-blue-600 text-white px-[16px] py-[12px] rounded-[5px] hover:bg-blue-700 hover:scale-105 transition-all">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          {/* Log in icon */}
                        </svg>
                        Log in
                      </button>
                    </NavLink>

                  ) : (
                    <button
                      onClick={handleLogout}
                      className="flex gap-x-2 font-medium bg-blue-600 text-white px-[16px] py-[12px] rounded-[5px] hover:bg-blue-700 hover:scale-105 transition-all"
                    >
                      <HiOutlineLogout size={"20px"} color="white" />
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};


export default Header


// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// // eslint-disable-next-line react/prop-types
// const Header = ({ activeNavLink }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollHeight = 100;
//       setIsScrolled(window.scrollY > scrollHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   return (

//     <div
//       className={`fixed z-10 w-screen shadow-lg ${isScrolled ? "bg-white" : "z-10"
//         }`}
//     >      <div className=" mx-auto max-w-screen-2xl text-white bg-white  px-4 md:px-8">

//         <header className={`${menuOpen ? "items-start" : "items-center"
//           } flex py-2   lg:items-center z-50   justify-between `}>
//           <NavLink
//             href="/"
//             className={`${menuOpen ? "hidden" : "inline-block"
//               }  text-black-800 inline-flex my-auto `}
//             aria-label="logo"
//           >
//             <p className=" text-center h- text-3xl sm:text-base font-semibold my-auto text-blue-600 px-3 md:px-6 ">RateYourInstitute</p>
//           </NavLink>

//           {menuOpen && (
//             <nav className=" flex flex-col pt-32  gap-4 lg:hidden items-center z-50 h-screen  bg-white">
//               <NavLink id="home" href="/"
//                 onClick={() => setMenuOpen(false)}>
//                 <div
//                   className={
//                     activeNavLink == "home"

//                       ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                       : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                   }
//                 >
//                   HOME
//                 </div>
//               </NavLink>

//               <NavLink href="/about"
//                 onClick={() => setMenuOpen(false)}>

//                 <div
//                   className={
//                     activeNavLink == "about"

//                       ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                       : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                   }
//                 >
//                   ABOUT
//                 </div>
//               </NavLink>

//               <NavLink href="/blogs"
//                 onClick={() => setMenuOpen(false)}>

//                 <div
//                   className={
//                     activeNavLink == "blogs"
//                       ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                       : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                   }
//                 >
//                   BLOGS
//                 </div>
//               </NavLink>

//               <NavLink href="/feature"
//                 onClick={() => setMenuOpen(false)}>

//                 <div
//                   className={
//                     activeNavLink == "feature"
//                       ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                       : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                   }
//                 >
//                   FEATURES
//                 </div>
//               </NavLink>




//               <NavLink href="/contact"
//                 onClick={() => setMenuOpen(false)}>

//                 <div
//                   className={
//                     activeNavLink == "contact"
//                       ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                       : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                   }
//                 >
//                   CONTACT
//                 </div>
//               </NavLink>
//             </nav>
//           )}

//           <nav className="nav-row hidden z-50 pt-8 lg:pt-0 gap-12 lg:flex lg:flex-row">
//             <NavLink id="home" href="/"
//               onClick={() => setMenuOpen(false)}>
//               <div
//                 className={
//                   activeNavLink == "home"

//                     ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                     : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                 }
//               >
//                 HOME
//               </div>
//             </NavLink>

//             <NavLink href="/about"
//               onClick={() => setMenuOpen(false)}>

//               <div
//                 className={
//                   activeNavLink == "about"

//                     ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                     : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                 }
//               >
//                 ABOUT
//               </div>
//             </NavLink>

//             <NavLink href="/blogs"
//               onClick={() => setMenuOpen(false)}>

//               <div
//                 className={
//                   activeNavLink == "blogs"
//                     ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                     : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                 }
//               >
//                 BLOGS
//               </div>
//             </NavLink>

//             <NavLink href="/feature"
//               onClick={() => setMenuOpen(false)}>

//               <div
//                 className={
//                   activeNavLink == "feature"
//                     ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                     : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                 }
//               >
//                 FEATURES
//               </div>
//             </NavLink>
         


//             <NavLink href="/contact"
//               onClick={() => setMenuOpen(false)}>

//               <div
//                 className={
//                   activeNavLink == "contact"
//                     ? "text-base py-2 md:py-0 font-medium bg-white lg:bg-none text-gray-700"
//                     : "text-base py-2 md:py-0 font-medium text-gray-800 transition duration-100 hover:text-gray-700"
//                 }
//               >
//                 CONTACT
//               </div>
//             </NavLink>
//           </nav>

//           <div className="flex">
//             <NavLink href={`/wishlist`}>
//               <div className=" h-12 w-12 flex sm:flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-orange-200
//               hover:bg-opacity-50 hover:backdrop-blur hover:backdrop-saturate-160 hover:backdrop-contrast-45 hover:backdrop-brightness-140
//                active:bg-orange-200 md:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-linecap="round"
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-linejoin="round"
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-width="2"
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>

//                 <span className="hidden sm:block text-xs font-semibold text-slate-800 md:block">
//                   Review
//                 </span>
//               </div>
//             </NavLink>


//             <NavLink href={`/login`}>
//               <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100
//                 active:bg-orange-200
//                 hover:bg-orange-200 
//                 hover:bg-opacity-50 hover:backdrop-blur hover:backdrop-saturate-160 hover:backdrop-contrast-45 hover:backdrop-brightness-140
//                 sm:h-20 sm:w-20 md:h-24 md:w-24">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-linecap="round"
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-linejoin="round"
//                     // eslint-disable-next-line react/no-unknown-property
//                     stroke-width="2"
//                     d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                   />
//                 </svg>

//                 <span className="hidden text-xs font-semibold text-gray-700 sm:block">
//                   Login
//                 </span>
//               </div>
//             </NavLink>

//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden z-[100]"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-800"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   // eslint-disable-next-line react/no-unknown-property
//                   fill-rule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   // eslint-disable-next-line react/no-unknown-property
//                   clip-rule="evenodd"
//                 />
//               </svg>

//               <span className="hidden text-xs font-semibold text-gray-700 sm:block">
//                 Menu
//               </span>
//             </button>
//           </div>


//         </header>
//       </div>
//     </div>
//   );
// };

// export default Header;



