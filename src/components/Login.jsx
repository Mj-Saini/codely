


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft, Star } from 'lucide-react';
// import logo from '../assets/image/png/Logo.png'
// import userProfile from '../assets/image/png/testi_01.png'
// import googleIcon from '../assets/image/png/google_side.png'
// import yelpIcon from '../assets/image/png/yelp.png'
// import CommonBtn from './common/CommonBtn';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Submitted:', formData);
//         setFormData({
//         email: '',
//         password: '',
//     })
//     };

//     return (
//         <div className="signup_bgImg bg-cover bg-center bg-no-repeat min-h-screen flex flex-wrap items-center justify-center py-6 sm:py-12 px-4">
//             <div className='pb-16 w-full'>
//                 <Link to='/' className='flex items-center text-start justify-start gap-2 text-white capitalize'>
//                     <ArrowLeft size={16} />
//                     Back To Home
//                 </Link>
//             </div>
//             <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-4">
                
//                 {/* Profile Side */}
//                 <div className="bg-[#f5f5f5] primary_bg p-4 sm:p-8 lg:p-15 flex flex-col justify-between">
//                     <div>
//                         <Link to="/" className="inline-block mb-6">
//                             <img src={logo} alt="Logo" className="h-10" />
//                         </Link>
//                         <div className="flex items-center space-x-1 text-[#FCCA00] mb-4">
//                             {Array(5).fill(0).map((_, i) => (
//                                 <span key={i}><Star /></span>
//                             ))}
//                         </div>
//                         <p className="text-sm md:text-[17px] text-[#fff]">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         </p>
//                         <div className="flex items-center space-x-4 my-5">
//                             <img src={userProfile} alt="Avatar" className="w-12 h-12 rounded-full" />
//                             <div>
//                                 <h3 className='text-lg lg:text-xl text-white font-semibold'>Shyan John</h3>
//                                 <span className="text-xs md:text-[15px] text-[#fff]">Careative inc</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-8 space-y-4 lg:pt-16">
//                         <div className="flex items-center space-x-4">
//                             <img src={googleIcon} alt="Google" className="h-6" />
//                             <div>
//                                 <div className="flex text-[#FCCA00] space-x-1">
//                                     {Array(5).fill(0).map((_, i) => (
//                                         <span key={i}><Star /></span>
//                                     ))}
//                                 </div>
//                                 <span className="text-xs md:text-[15px] text-white pt-3 inline-block">4.8/5 - From over 220 reviews</span>
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <img src={yelpIcon} alt="Yelp" className="h-6" />
//                             <div>
//                                 <div className="flex text-[#FCCA00] space-x-1">
//                                     {Array(5).fill(0).map((_, i) => (
//                                         <span key={i}><Star /></span>
//                                     ))}
//                                 </div>
//                                 <span className="text-xs md:text-[15px] text-white pt-3 inline-block">4.8/5 - From over 220 reviews</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Login Form */}
//                 <div className="p-4 sm:p-8">
//                     <div className="mb-6 text-center">
//                         <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-[#3B82F6] mb-4">Welcome back</h2>
//                         <p className="text-sm md:text-[17px] text-[#3e3f66]">Please log in to access your account</p>
//                     </div>
//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
//                             placeholder="Email"
//                             required
//                         />
//                         <div>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
//                                 placeholder="Password"
//                                 required
//                             />
//                             <small className="mt-2 text-xs md:text-[15px] text-[#3e3f66] hover:underline cursor-pointer inline-flex">
//                                 Forgot Password?
//                             </small>
//                         </div>
//                         <div className="flex justify-center">
//                             <CommonBtn btnName="sign in" btnStyling="!uppercase" type="submit" />
//                         </div>
//                     </form>

//                     <div className="relative text-center my-7">
//                         <span className="bg-white px-2 text-gray-500">OR</span>
//                         <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 transform -translate-y-1/2"></div>
//                     </div>

//                     <div className="text-center space-y-4">
//                         <p className="text-sm md:text-[17px] text-[#3e3f66]">Sign In with your work email</p>
//                         <a
//                             href="#"
//                             className="inline-flex justify-center font-semibold items-center w-[300px] text-center py-4 border border-[#3e3f66]/50 rounded-full"
//                         >
//                             <img src={googleIcon} alt="Google" className="w-5 mr-2" />
//                             <span className="text-sm md:text-base text-[#3e3f66]">Sign In with Google</span>
//                         </a>
//                         <p className="text-sm md:text-[17px] text-[#3e3f66]">
//                             Don't have an account?{' '}
//                             <Link to="#" className="text-blue-600 hover:underline">
//                                 Sign Up
//                             </Link>
//                             &nbsp; here
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import logo from '../assets/image/png/Logo.png'
import userProfile from '../assets/image/png/testi_01.png'
import googleIcon from '../assets/image/png/google_side.png'
import yelpIcon from '../assets/image/png/yelp.png'
import CommonBtn from './common/CommonBtn';

const Login = ({ type = 'login' }) => {
    const isSignUp = type === 'signup';

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isSignUp ? 'Sign Up Submitted:' : 'Login Submitted:', formData);

        // Clear form
        setFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="signup_bgImg bg-cover bg-center bg-no-repeat min-h-screen flex flex-wrap items-center justify-center py-6 sm:py-12 px-4">
            <div className='pb-16 w-full'>
                <Link to='/' className='flex items-center text-start justify-start gap-2 text-white capitalize'>
                    <ArrowLeft size={16} />
                    Back To Home
                </Link>
            </div>
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-4">
                {/* Profile Side */}
                <div className="bg-[#f5f5f5] primary_bg p-4 sm:p-8 lg:p-15 flex flex-col justify-between">
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} alt="Logo" className="h-10" />
                        </Link>
                        <div className="flex items-center space-x-1 text-[#FCCA00] mb-4">
                            {Array(5).fill(0).map((_, i) => (
                                <span key={i}><Star /></span>
                            ))}
                        </div>
                        <p className="text-sm md:text-[17px] text-[#fff]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="flex items-center space-x-4 my-5">
                            <img src={userProfile} alt="Avatar" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className='text-lg lg:text-xl text-white font-semibold'>Shyan John</h3>
                                <span className="text-xs md:text-[15px] text-[#fff]">Careative inc</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4 lg:pt-16">
                        <div className="flex items-center space-x-4">
                            <img src={googleIcon} alt="Google" className="h-6" />
                            <div>
                                <div className="flex text-[#FCCA00] space-x-1">
                                    {Array(5).fill(0).map((_, i) => (
                                        <span key={i}><Star /></span>
                                    ))}
                                </div>
                                <span className="text-xs md:text-[15px] text-white pt-3 inline-block">4.8/5 - From over 220 reviews</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src={yelpIcon} alt="Yelp" className="h-6" />
                            <div>
                                <div className="flex text-[#FCCA00] space-x-1">
                                    {Array(5).fill(0).map((_, i) => (
                                        <span key={i}><Star /></span>
                                    ))}
                                </div>
                                <span className="text-xs md:text-[15px] text-white pt-3 inline-block">4.8/5 - From over 220 reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-4 sm:p-8">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#3B82F6] mb-4">
                            {isSignUp ? 'Sign up for free' : 'Welcome back'}
                        </h2>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                            {isSignUp ? "Fill all fields so we can get some info about you. We'll never send you spam" : 'Please log in to access your account'}
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {isSignUp && (
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                                placeholder="Username"
                                required
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                            placeholder="Password"
                            required
                        />
                        {!isSignUp && (
                            <small className="mt-2 text-xs md:text-[15px] text-[#3e3f66] hover:underline cursor-pointer inline-flex">
                                Forgot Password?
                            </small>
                        )}
                            <div className="flex justify-center">
                                <CommonBtn
                                    btnName={isSignUp ? 'sign up' : 'sign in'}
                                    btnStyling="!uppercase"
                                    type="submit"
                                />
                            </div>
                    </form>

                    <div className="relative text-center my-7">
                        <span className="bg-white px-2 text-gray-500">OR</span>
                        <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 transform -translate-y-1/2"></div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                            Sign {isSignUp ? 'Up' : 'In'} with your work email
                        </p>
                        <a
                            href="#"
                            className="inline-flex justify-center font-semibold items-center w-[300px] text-center py-4 border border-[#3e3f66]/50 rounded-full"
                        >
                            <img src={googleIcon} alt="Google" className="w-5 mr-2" />
                            <span className="text-sm md:text-base text-[#3e3f66]">
                                Sign {isSignUp ? 'Up' : 'In'} with Google
                            </span>
                        </a>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                            {isSignUp ? (
                                <>
                                    Already have an account?{' '}
                                    <Link to="/sign-in" className="text-blue-600 hover:underline">
                                        Sign In
                                    </Link>
                                </>
                            ) : (
                                <>
                                    Don't have an account?{' '}
                                    <Link to="/sign-up" className="text-blue-600 hover:underline">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
