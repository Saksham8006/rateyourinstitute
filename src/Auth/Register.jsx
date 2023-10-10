import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../config';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Validation checks
        let isValid = true;
        if (!name) {
            setNameError('Please enter your name');
            isValid = false;
        } else {
            setNameError('');
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!password || password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            try {
                const res = await fetch(`${baseUrl}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                if (res.ok) {
                    const responseData = await res.json({});
                    console.log('User registered successfully', responseData);



                    // Navigate to the login route
                    navigate('/login');
                } else {
                    console.log('Invalid Credentials');
                }
            } catch (error) {
                console.log('error :', error);
            }
        }
    };

    return (
        <>
            <html className=" w-full h-full">
                <body className=" bg-gray-100  min-h-screen items-center py-6">
                    <div >

                        <h1 className='flex justify-center items-center font-extrabold text-blue-700 text-2xl'>RateYourInstitute</h1>
                        <hr class="h-px my-4 bg-gray-400 border-0 "></hr>
                    </div>
                    <main className="w-full flex h-screen justify-center relative box-border pl-[100px] p-6">

                        <div className="mt-7 w-1/2 rounded-xl shadow-sm ">
                            <div className=" p-4 sm:p-7 w-[600px]">
                                <div className="text-center">
                                    <p className="block text-3xl font-bold text">
                                        Already have an account?
                                        <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/login">
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>

                                <div className="mt-5">


                                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6">Or</div>


                                    <form onSubmit={handleRegister}>
                                        <div className="grid gap-y-4">

                                            <div>
                                                {/* <label htmlFor="name" className="block text-sm mt-2">Your Name</label> */}
                                                <div className="relative">
                                                    <input


                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        type="text" id="name" name="name" placeholder='Enter Your full Name' className={`py-5 px-4 block w-full rounded-md text-sm bg-400 border border-blue-500 ring-blue-500 ${nameError ? 'input-error' : ''}`} required aria-describedby="name-error" />
                                                    {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
                                                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include Link valid email address so we can get back to you</p>
                                                <div className='pt-3'>
                                                    {/* <label htmlFor="email" className="block text-sm mt-2 ">Your Email</label> */}
                                                    <div className="relative">
                                                        <input
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            type="email" id="email" name="email" placeholder='Enter Your Email Address' className={`py-5 px-4 block w-full  rounded-md text-sm border border-blue-500 focus:ring-blue-500  ${emailError ? 'input-error' : ''}`} required aria-describedby="confirm-password-error" />

                                                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                                                </div>
                                                <div className='pt-3'>
                                                    {/* <label htmlFor="password" className="block text-sm mt-2">Password</label> */}
                                                    <div className="relative">
                                                        <input
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            type="password" id="password" name="password" placeholder='Enter Your Password' className={`py-5 px-4 block w-full rounded-md text-sm border border-blue-500 focus:ring-blue-500  ${passwordError ? 'input-error' : ''}`} required aria-describedby="password-error" />
                                                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}

                                                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                                </div>



                                                <div className="flex items-center">
                                                    <div className="flex">
                                                        <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <label for="remember-me" className="text-sm mt-[-5px]">I accept the <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="#">Terms and Conditions</Link></label>
                                                    </div>
                                                </div>


                                                <button type="submit" className="py-5 px-4 mt-[20px] w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">Sign up</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        {/* svg Part */}
                        <div className='w-1/2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={1000}
                                height={1000}
                                style={{
                                    width: "540px",
                                    height: "540px",
                                    transform: "translate3d(0,0,0)",
                                    contentVisibility: "visible"
                                }}
                                viewBox="0 0 1700 1819"

                            >
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h1700v1819H0z" />
                                    </clipPath>
                                    <clipPath id="d">
                                        <path d="M0 0h1700v2000H0z" />
                                    </clipPath>
                                    <clipPath id="c">
                                        <path d="M0 0h1700v2000H0z" />
                                    </clipPath>
                                    <clipPath id="b">
                                        <path d="M0 0h1700v2000H0z" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a)">
                                    <path
                                        fill="#E7E0FD"
                                        d="M277.503 0c0 153.261-124.242 277.503-277.503 277.503-153.261 0-277.503-124.242-277.503-277.503 0-153.261 124.242-277.503 277.503-277.503 153.261 0 277.503 124.242 277.503 277.503z"
                                        style={{ display: "block" }}
                                        transform="translate(472.884 1435)"
                                    />
                                    <g
                                        clipPath="url(#b)"
                                        style={{ display: "block" }}
                                        transform="matrix(1.03 0 0 1.03 -39.203 -125.666)"
                                    >
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1532.087 1027.599-57.289 79.469c-3.63 5.053-11.057 5.696-15.552 1.347-3.562-3.446-4.028-8.901-1.1-12.869l46.74-79.174"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1532.087 1027.599-57.289 79.469c-3.63 5.053-11.057 5.696-15.552 1.347 0 0 0 0 0 0-3.562-3.446-4.028-8.901-1.1-12.869l46.74-79.174"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1534.009 1061.267-57.289 79.469c-3.63 5.053-11.057 5.696-15.552 1.347-3.562-3.446-4.028-8.901-1.1-12.869l46.74-79.174"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1534.009 1061.267-57.289 79.469c-3.63 5.053-11.057 5.696-15.552 1.347 0 0 0 0 0 0-3.562-3.446-4.028-8.901-1.1-12.869l46.74-79.174"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1537.157 1089.593 1483 1171.122c-3.431 5.183-10.828 6.101-15.488 1.921-3.693-3.312-4.371-8.746-1.6-12.819l43.628-80.846"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1537.157 1089.593 1483 1171.122c-3.431 5.183-10.828 6.101-15.488 1.921 0 0 0 0 0 0-3.693-3.312-4.371-8.746-1.6-12.819l43.628-80.846"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1488.499 1200.498 57.807-96.149a44.545 44.545 0 0 0 3.749-7.846 44.013 44.013 0 0 0 2.176-8.378c.448-2.86.632-5.765.527-8.664l-2.847-87.299 45.139-71.869-60.73-36.539-45.717 85.565a40.882 40.882 0 0 0-4.429 24.931l10.212 72.966 7.27 64.04-30.532 58.775a9.756 9.756 0 0 0-1.54 5.827c.148 2.596 1.344 5.122 3.481 6.943 4.769 4.065 12.139 2.963 15.434-2.303z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1488.499 1200.498 57.807-96.149a44.545 44.545 0 0 0 3.749-7.846 44.013 44.013 0 0 0 2.176-8.378c.448-2.86.632-5.765.527-8.664l-2.847-87.299 45.139-71.869-60.73-36.539-45.717 85.565a40.882 40.882 0 0 0-4.429 24.931l10.212 72.966 7.27 64.04-30.532 58.775a9.756 9.756 0 0 0-1.54 5.827c.148 2.596 1.344 5.122 3.481 6.943 4.769 4.065 12.139 2.963 15.434-2.303zm48.3-218.542 13.112 10.206"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1453.999 614.32 89.356 131.174-45.62 185.559 91 78.182 75.29-251.058a127.961 127.961 0 0 0-18.233-105.151l-150.107-209.021c0-.01-11.669-14.375-11.669-14.375-.017-.011-14.764-10.88-29.267-17.08"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1453.999 614.32 89.356 131.174-45.62 185.559 91 78.182 75.29-251.058a127.961 127.961 0 0 0-18.233-105.151l-150.107-209.021c0-.01-11.669-14.375-11.669-14.375-.017-.011-14.764-10.88-29.267-17.08"
                                            />
                                            <path fill="#FFF" d="m1566.045 739.07-22.69 6.424" />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1566.045 739.07-22.69 6.424"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1356.944 242.049 2.538 11.385c3.464 15.541 18.145 25.925 33.952 24.013 12.84-1.553 24.879 6.547 28.277 19.027 3.813 14.003-4.548 28.422-18.594 32.072l-81.435 21.159-11.677-91.98 46.939-15.676z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1356.944 242.049 2.538 11.385c3.464 15.541 18.145 25.925 33.952 24.013 0 0 0 0 0 0 12.84-1.553 24.879 6.547 28.277 19.027 0 0 0 0 0 0 3.813 14.003-4.548 28.422-18.594 32.072l-81.435 21.159-11.677-91.98 46.939-15.676z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1252.422 387.183-17.464-157.05 97.13-13.832 26.958 168.754"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1252.422 387.183-17.464-157.05 97.13-13.832 26.958 168.754"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M1304.456 1827.757h103.67l22.57-111.14 54.96-270.66a1124.418 1124.418 0 0 0 22.49-223.74c0-154.56-26.147-260.217-48.8-327.32"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1304.456 1827.757h103.67l22.57-111.14 54.96-270.66a1124.418 1124.418 0 0 0 22.49-223.74c0-154.56-26.147-260.217-48.8-327.32"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1304.456 1716.617v111.14h103.67l22.57-111.14h-126.24z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1304.456 1716.617v111.14h103.67l22.57-111.14h-126.24z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1304.457 1777.177v109.01h43.4l.33-.42c7.41-9.27 18.15-13.89 28.89-13.89 10.91 0 21.82 4.78 29.22 14.31h120.42l-14.47-41.75a17.601 17.601 0 0 0-16.62-11.82h-16.12l-14.91-13.53-12.96-11.76-8.13-7.37-13.18-11.96-11.93-10.82h-113.94z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1304.457 1777.177v109.01h43.4l.33-.42c7.41-9.27 18.15-13.89 28.89-13.89 10.91 0 21.82 4.78 29.22 14.31h120.42l-14.47-41.75a17.601 17.601 0 0 0-16.62-11.82h-16.12l-14.91-13.53-12.96-11.76-8.13-7.37-13.18-11.96-11.93-10.82h-113.94z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1304.457 1855.347v30.84h43.4l.33-.42c7.41-9.27 18.15-13.89 28.89-13.89 10.91 0 21.82 4.78 29.22 14.31h120.42l-14.47-41.75c-1.09-3.13-3-5.8-5.44-7.81l-10.4 18.72h-191.95z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1304.457 1855.347v30.84h43.4l.33-.42c7.41-9.27 18.15-13.89 28.89-13.89 10.91 0 21.82 4.78 29.22 14.31h120.42l-14.47-41.75c-1.09-3.13-3-5.8-5.44-7.81l-10.4 18.72h-191.95zm147.766-48.675 3.604-30.335c.656-5.522 6.277-9.001 11.512-7.124 0 0 0 0 0 0 5.574 1.998 7.538 8.879 3.86 13.519l-18.976 23.94zm0 0 27.739-12.796c5.05-2.329 10.954.642 12.093 6.085 0 0 0 0 0 0 1.213 5.796-3.624 11.07-9.503 10.362l-30.329-3.651zm-40.387 2.055c2.42 4.19 13.59 2.27 24.95-4.29 2.45-1.42 4.71-2.93 6.72-4.48l-13.18-11.96c-.77.4-1.53.82-2.3 1.26-11.36 6.56-18.61 15.28-16.19 19.47zm20.001 20c2.42 4.19 13.59 2.27 24.95-4.29 2.9-1.68 5.54-3.5 7.81-5.35l-12.96-11.76c-1.2.59-2.4 1.23-3.61 1.93-11.36 6.56-18.61 15.28-16.19 19.47z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#121331"
                                                d="m1252.068 366.908 29.119-26.034-32.564-4.202 3.445 30.236z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1252.068 366.908 29.119-26.034-32.564-4.202 3.445 30.236z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1281.188 340.874-12.55 1.082c-18.508 1.596-36.994-4.733-50.11-17.889a63.134 63.134 0 0 1-15.664-63.036l2.389-7.814 6.266-23.745 16.106-60.743 97.48-10.977"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1281.188 340.874-12.55 1.082c-18.508 1.596-36.994-4.733-50.11-17.889a63.178 63.178 0 0 1-8.436-10.496s0 0 0 0a63.134 63.134 0 0 1-7.228-52.54l2.389-7.814 6.266-23.745 16.106-60.743 97.48-10.977"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1230.957 266.018c11.692.602 16.834-6.247 17.982-15.281 0 0 0 0 0 0"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M1239.63 231.348a1.424 1.424 0 1 0 2.846-.07 1.424 1.424 0 0 0-2.846.07z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1239.63 231.348a1.424 1.424 0 1 0 2.846-.07 1.424 1.424 0 0 0-2.846.07zm-11.606-9.556-7.278 25.054a7.385 7.385 0 0 0 3.43 8.544s0 0 0 0"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M1256.033 225.493c-1.028 1.028-4.652-.928-8.093-4.369s-5.397-7.065-4.37-8.093c1.029-1.028 4.653.928 8.094 4.369 3.44 3.441 5.397 7.065 4.369 8.093z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1256.033 225.493c-1.028 1.028-4.652-.928-8.093-4.369s-5.397-7.065-4.37-8.093c1.029-1.028 4.653.928 8.094 4.369 3.44 3.441 5.397 7.065 4.369 8.093z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1233.52 148.35a21.426 21.426 0 0 1 18.989-11.49h55.08c28.14 0 50.18 24.2 47.56 52.21l-3.74 39.97-45.15 3.41h-.01l-5.05.38c-18.34 0-33.2-14.86-33.2-33.19v-.049c.004-2.148-1.98-3.718-4.058-3.179a28.197 28.197 0 0 1-7.081.898c-15.61 0-29.235-12.971-29.235-28.581l5.895-20.379z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1233.52 148.35a21.426 21.426 0 0 1 18.989-11.49h55.08c28.14 0 50.18 24.2 47.56 52.21l-3.74 39.97-45.15 3.41h-.01l-5.05.38c-18.34 0-33.2-14.86-33.2-33.19v-.049c.004-2.148-1.98-3.718-4.058-3.179a28.197 28.197 0 0 1-7.081.898c-15.61 0-29.235-12.971-29.235-28.581l5.895-20.379z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1306.25 232.45c-1.65.25-3.33.38-5.05.38l5.05-.38z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1306.25 232.45c-1.65.25-3.33.38-5.05.38l5.05-.38z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1306.249 232.45 30.998-16.15c9.052-5.609 22.939-2.804 28.36 6.373a18.892 18.892 0 0 1 2.632 9.166 19.027 19.027 0 0 1-6.315 14.653l-36.553 30.247"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1306.249 232.45 30.998-16.15c9.052-5.609 22.939-2.804 28.36 6.373a18.892 18.892 0 0 1 2.632 9.166 19.027 19.027 0 0 1-6.315 14.653l-36.553 30.247m22.679-44.413-21.293 15.356"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M1151.548 895.487c12.82-42.25 28.18-83.85 46.03-124.59h216.02c17.85 40.74 33.21 82.34 46.03 124.59"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1151.548 895.487c12.82-42.25 28.18-83.85 46.03-124.59h216.02c17.85 40.74 33.21 82.34 46.03 124.59"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1457.322 567.855c-6.222 71.864-21.676 144.627-43.725 203.042h-211.764c-24.738-65.542-47.084-170.266-54.321-249.761m-76.085-73.339 80-33a194.922 194.922 0 0 1 21.844-7.463l78.196-21.637 1.03 8.56c3.17 28.62 28.35 49.64 57.07 47.65 29.91-2.08 51.98-28.11 49.83-57.41l83.926 24.265 11.087 3.875"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1310.7 469.551a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0zm0 20a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0zm0 19.999a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1310.7 469.551a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0zm0 20a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0zm0 19.999a5.112 5.112 0 1 1-10.225 0 5.112 5.112 0 0 1 10.225 0z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1306.562 896.397.155 931.36h-103.67l-22.57-111.14-54.96-270.66a1124.418 1124.418 0 0 1-22.49-223.74c0-154.56 20.473-251.217 48.55-326.32"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1306.562 896.397.155 931.36h-103.67l-22.57-111.14-54.96-270.66a1124.418 1124.418 0 0 1-22.49-223.74c0-154.56 20.473-251.217 48.55-326.32"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1306.717 1716.617v111.14h-103.67l-22.57-111.14h126.24z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1306.717 1716.617v111.14h-103.67l-22.57-111.14h126.24z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1306.717 1777.177v109.01h-43.4l-.33-.42c-7.41-9.27-18.15-13.89-28.89-13.89-10.91 0-21.82 4.78-29.22 14.31h-120.42l14.47-41.75a17.601 17.601 0 0 1 16.62-11.82h16.12l14.91-13.53 12.96-11.76 8.13-7.37 13.18-11.96 11.93-10.82h113.94z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1306.717 1777.177v109.01h-43.4l-.33-.42c-7.41-9.27-18.15-13.89-28.89-13.89-10.91 0-21.82 4.78-29.22 14.31h-120.42l14.47-41.75a17.601 17.601 0 0 1 16.62-11.82h16.12l14.91-13.53 12.96-11.76 8.13-7.37 13.18-11.96 11.93-10.82h113.94z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1306.717 1855.347v30.84h-43.4l-.33-.42c-7.41-9.27-18.15-13.89-28.89-13.89-10.91 0-21.82 4.78-29.22 14.31h-120.42l14.47-41.75c1.09-3.13 3-5.8 5.44-7.81l10.4 18.72h191.95z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1306.717 1855.347v30.84h-43.4l-.33-.42c-7.41-9.27-18.15-13.89-28.89-13.89-10.91 0-21.82 4.78-29.22 14.31h-120.42l14.47-41.75c1.09-3.13 3-5.8 5.44-7.81l10.4 18.72h191.95zm-147.767-48.675-3.604-30.335c-.656-5.522-6.277-9.001-11.512-7.124 0 0 0 0 0 0-5.574 1.998-7.538 8.879-3.86 13.519l18.976 23.94zm0 0-27.74-12.796c-5.05-2.329-10.953.642-12.092 6.085 0 0 0 0 0 0-1.213 5.796 3.624 11.07 9.503 10.362l30.329-3.651zm40.387 2.055c-2.42 4.19-13.59 2.27-24.95-4.29a61.749 61.749 0 0 1-6.72-4.48l13.18-11.96c.77.4 1.53.82 2.3 1.26 11.36 6.56 18.61 15.28 16.19 19.47zm-20 20c-2.42 4.19-13.59 2.27-24.95-4.29-2.9-1.68-5.54-3.5-7.81-5.35l12.96-11.76c1.2.59 2.4 1.23 3.61 1.93 11.36 6.56 18.61 15.28 16.19 19.47z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1281.253 876.881.938 1.653a34.27 34.27 0 0 0 24.526 16.951"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1281.253 876.881.938 1.653a34.27 34.27 0 0 0 24.526 16.951s0 0 0 0"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        clipPath="url(#c)"
                                        style={{ display: "block" }}
                                        transform="translate(0 -75)"
                                    >
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M814.654 1325.646 644.326 912.945V794.747l107.857-.004h.001a204.77 204.77 0 0 1 68.49 100.028l116.916 410.185"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M814.654 1325.646 644.326 912.945V794.747l107.857-.004h.001a204.77 204.77 0 0 1 68.49 100.028l116.916 410.185"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m813.891 1323.821-27.682 376.53-22.339 190.74 105.079.088 19.447-145.191s31.863-277.13 49.996-415.862c0 0 1.608-15.126-.642-25.376"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m813.891 1323.821-27.682 376.53-22.339 190.74 105.079.088 19.447-145.191s31.863-277.13 49.996-415.862c0 0 1.608-15.126-.642-25.376"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m786.206 1700.349 108.313-1.391-25.57 192.225-105.084-.087 22.341-190.747z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m786.206 1700.349 108.313-1.391-25.57 192.225-105.084-.087 22.341-190.747z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m773.426 1815.889-9.561 75.207 174.522.049c5.904 0 10.69-4.786 10.69-10.69 0-1.608-.357-3.169-1.031-4.575a10.637 10.637 0 0 0-2.889-3.698l-64.119-64.92c-10.093 22.054-27.51 37.289-53.349 37.289-21.062 0-42.61-12.955-54.263-28.662z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m773.426 1815.889-9.561 75.207 174.522.049c5.904 0 10.69-4.786 10.69-10.69 0-1.608-.357-3.169-1.031-4.575a10.637 10.637 0 0 0-2.889-3.698l-64.119-64.92c-10.093 22.054-27.51 37.289-53.349 37.289-21.062 0-42.61-12.955-54.263-28.662zm77.548-490.244-37.082-1.825"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M568.285 794.742a379.451 379.451 0 0 0-32.133 161.42l5.729 910.592h109.012l36.109-1072.012H568.285z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M568.285 794.742s0 0 0 0a379.451 379.451 0 0 0-32.133 161.42l5.729 910.592h109.012l36.109-1072.012H568.285z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M540.803 1695.382h115.862l-5.902 179.258h-109.96v-179.258z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M540.803 1695.382h115.862l-5.902 179.258h-109.96v-179.258z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m652.534 1818.036-1.097 73.62H469.34c-5.904 0-10.69-4.785-10.69-10.69 0-1.607.356-3.168 1.03-4.574a10.64 10.64 0 0 1 2.89-3.698l79.27-64.96c10.093 22.055 32.359 37.378 58.198 37.378 21.062 0 40.843-11.37 52.496-27.076z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m652.534 1818.036-1.097 73.62H469.34c-5.904 0-10.69-4.785-10.69-10.69 0-1.607.356-3.168 1.03-4.574a10.64 10.64 0 0 1 2.89-3.698l79.27-64.96c10.093 22.055 32.359 37.378 58.198 37.378 21.062 0 40.843-11.37 52.496-27.076z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M536.051 947.283a379.616 379.616 0 0 1 32.234-152.54h183.898a204.71 204.71 0 0 1 41.816 44.831 204.765 204.765 0 0 1 26.677 55.193l15.891 52.516"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M536.051 947.283a379.616 379.616 0 0 1 32.234-152.54h183.898a204.71 204.71 0 0 1 41.816 44.831 204.765 204.765 0 0 1 26.677 55.193l15.891 52.516"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M463.75 477.749c-20.5 3.75-46.75 15.25-55.78 53.26-19.296 81.222-57.988 245.807-57.988 245.807l88.248 38.611 96.058-251.06"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M463.75 477.749c-20.5 3.75-46.75 15.25-55.78 53.26-19.296 81.222-57.988 245.807-57.988 245.807l88.248 38.611 96.058-251.06"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m127.292 809.347-69.255-38.059c-5.495-3.043-7.484-9.965-4.441-15.46 3.043-5.495 9.965-7.484 15.46-4.44l69.133 38.278"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m127.292 809.347-69.255-38.059c-5.495-3.043-7.484-9.965-4.441-15.46 0 0 0 0 0 0 3.043-5.495 9.965-7.484 15.46-4.44l69.133 38.278"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m108.784 816.851-69.255-38.059c-5.495-3.043-7.484-9.965-4.441-15.46 3.043-5.495 9.965-7.484 15.46-4.441l69.133 38.279"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m108.784 816.851-69.255-38.059c-5.495-3.043-7.484-9.965-4.441-15.46 0 0 0 0 0 0 3.043-5.495 9.965-7.484 15.46-4.441l69.133 38.279"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M397.535 746.566 224.814 728.35l-7.297 56.924 164.248 55.892s35.1 6.981 55.242-26.377"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M397.535 746.566 224.814 728.35l-7.297 56.924 164.248 55.892s35.1 6.981 55.242-26.377"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m193.142 776.979-72.534 40.925a35.813 35.813 0 0 1-33.327.984l-65.042-31.797c-4.984-2.436-6.965-8.513-4.373-13.418a9.827 9.827 0 0 1 12.624-4.414l46.028 20.12a11.482 11.482 0 0 0 10.938-.947l81.608-54.027a51.905 51.905 0 0 1 34.098-8.339l94.954 10.015-11.953 72.553-93.021-31.655z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m193.142 776.979-72.534 40.925a35.813 35.813 0 0 1-33.327.984l-65.042-31.797c-4.984-2.436-6.965-8.513-4.373-13.418 0 0 0 0 0 0a9.827 9.827 0 0 1 12.624-4.414l46.028 20.12a11.482 11.482 0 0 0 10.938-.947l81.608-54.027a51.905 51.905 0 0 1 34.098-8.339l94.954 10.015-11.953 72.553-93.021-31.655zm92.817 33.605c-13.777 21.069-34.768 52.646-34.768 52.646-5.222 7.907-1.973 18.614 6.763 22.285 0 0 0 0 0 0 9.305 3.91 19.756-2.214 20.894-12.242 0 0 4.029-36.877 7.111-62.689zm1.001-1.237c18.021 15.308 26.34 22.315 26.34 22.315 3.904 3.307 3.922 9.322.039 12.654 0 0 0 0 0 0-4.286 3.678-10.914 2.104-13.088-3.109 0 0-3.997-9.901-13.291-31.86z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#121331"
                                                d="m508.114 364.729-7.797 80.135 179.404-43.596-43.335-106.223S608 251.999 549.137 279.762c-42.274 19.939-41.023 84.967-41.023 84.967z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m508.114 364.729-7.797 80.135 179.404-43.596-43.335-106.223S608 251.999 549.137 279.762c-42.274 19.939-41.023 84.967-41.023 84.967z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M644.865 464.337 548.5 486.124 507.813 230.44l95.853-1.039 41.199 234.937z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M644.865 464.337 548.5 486.124 507.813 230.44l95.853-1.039 41.199 234.937z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m640.451 438.277 99.137-21.937 5.016 106.678 5.027 106.934h-.009l2.561 164.79H568.285l-58.044-164.79-1.223-3.477-52.005-147.677 59.902-13.184 28.752-6.363"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m745.604 542.518 4.027 87.434h-.009l2.561 164.79H568.285l-75.044-213.29m147.21-143.175S708.5 421.5 739.588 416.34c25.396-4.215 56.912 6.159 79.412 33.659m-258.424 6.028S497.5 469.5 457.088 479.34"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m745.604 542.518 4.027 87.434h-.009l2.561 164.79H568.285l-75.044-213.29m147.21-143.175S708.5 421.5 739.588 416.34c25.396-4.215 56.912 6.159 79.412 33.659m-258.424 6.028S497.5 469.5 457.088 479.34"
                                            />
                                            <path fill="#FFF" d="M752.183 794.742 516.915 465.614" />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M752.183 794.742 516.915 465.614m154.199-32.354 6.081 62.797c.913 9.432 10.174 15.713 19.275 13.072 0 0 0 0 0 0 9.693-2.812 13.967-14.147 8.544-22.659l-33.9-53.21zm.001-1.59 34.512.782c5.115.116 8.913 4.781 7.99 9.814 0 0 0 0 0 0-1.019 5.555-7.163 8.499-12.132 5.814l-30.37-16.41zm-110.119 24.483-43.634 9.413 86.896 122.236 66.856-156.132-30.79 6.778"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m560.732 375.216-43.708 5.121a29.034 29.034 0 0 1-32.236-32.003l5.465-49.754 2.585-23.509 4.681-42.628 83.108-.769"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m560.732 375.216-43.708 5.121a29.033 29.033 0 0 1-23.831-8.23s0 0 0 0a29.034 29.034 0 0 1-8.405-23.773l5.465-49.754 2.585-23.509 4.681-42.628 83.108-.769"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M517.695 309.224a19.492 19.492 0 0 0 17.062-9.398s0 0 0 0"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M523.499 286.145a1.372 1.372 0 1 0 2.702-.474 1.372 1.372 0 0 0-2.702.474z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M523.499 286.145a1.372 1.372 0 1 0 2.702-.474 1.372 1.372 0 0 0-2.702.474zm-13.34-2.182-2.045 14.239 5.292 2.037"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M476.99 274h81.61l8.792-21.979L574.081 274h59.057c0-41.378-33.542-74.92-74.92-74.92h-.613c-30.7 0-58.294 18.729-69.628 47.261L476.99 274z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M476.99 274h81.61l8.792-21.979L574.081 274h59.057s0 0 0 0c0-41.378-33.542-74.92-74.92-74.92h-.613c-30.7 0-58.294 18.729-69.628 47.261L476.99 274z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m584.172 291.74 28.967-22.59c7.823-6.632 19.57-5.544 26.042 2.424a18.198 18.198 0 0 1 3.812 8.357 18.322 18.322 0 0 1-3.926 14.856l-30.507 34.017"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m584.172 291.74 28.967-22.59c7.823-6.632 19.57-5.544 26.042 2.424a18.198 18.198 0 0 1 3.812 8.357 18.322 18.322 0 0 1-3.926 14.856l-30.507 34.017m15.274-45.533-18.094 17.66"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        clipPath="url(#d)"
                                        style={{ display: "block" }}
                                        transform="translate(34 -70)"
                                    >
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1007.595 427.852-101.864-12.155 50.28-271.217 96.736 16.359-45.152 267.013z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1007.595 427.852-101.864-12.155 50.28-271.217 96.736 16.359-45.152 267.013z"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m689.113 1015.29-99.526-3.817c-6.072-.177-10.52-5.78-9.314-11.733v-.001a9.794 9.794 0 0 1 10.007-7.84l89.793-5.358"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m689.113 1015.29-99.526-3.817c-6.072-.177-10.52-5.78-9.314-11.733v-.001a9.794 9.794 0 0 1 10.007-7.84l89.793-5.358"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m674.911 1018.394-97.682 19.444c-5.946 1.24-11.576-3.173-11.788-9.244a9.794 9.794 0 0 1 7.907-9.954l86.082-26.104"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m674.911 1018.394-97.682 19.444c-5.946 1.24-11.576-3.173-11.788-9.244 0 0 0 0 0 0a9.794 9.794 0 0 1 7.907-9.954l86.082-26.104"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M652.923 993.016c-9.507 17.387-3.118 39.19 14.27 48.697 17.386 9.507 39.19 3.118 48.696-14.27 9.507-17.386 3.118-39.19-14.269-48.696-17.387-9.507-39.19-3.118-48.697 14.269z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M652.923 993.016c-9.507 17.387-3.118 39.19 14.27 48.697 17.386 9.507 39.19 3.118 48.696-14.27 9.507-17.386 3.118-39.19-14.269-48.696-17.387-9.507-39.19-3.118-48.697 14.269z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m716.657 1026.31 43.093-106.705 14.468-44.367h-71.492l-7.78 45.716-11.213 46.002-22.407 16.052"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m716.657 1026.31 43.093-106.705 14.468-44.367h-71.492l-7.78 45.716-11.213 46.002-22.407 16.052"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m706.486 1038.489-51.809 34.86c-3.627 2.642-8.556 3.05-12.486 1.032-6.592-3.385-7.5-11.827-1.795-16.675l21.905-26.432"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m706.486 1038.489-51.809 34.86c-3.627 2.642-8.556 3.05-12.486 1.032 0 0 0 0 0 0-6.592-3.385-7.5-11.827-1.795-16.675l21.905-26.432"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m669.942 1027.88-90.552 41.476c-5.499 2.58-11.997-.416-13.605-6.273a9.794 9.794 0 0 1 5.396-11.51l90.144-68.566"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m669.942 1027.88-90.552 41.476c-5.499 2.58-11.997-.416-13.605-6.273 0 0 0 0 0 0a9.794 9.794 0 0 1 5.396-11.51l90.144-68.566"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m760.681 917.284 46.717-145.156 10.167-31.59 45.446-141.204 33.17-103.05-.02-.01-125.86-33.65-18.05 110.22-26.204 160-30.206 184.44"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m760.681 917.284 46.717-145.156 10.167-31.59 45.446-141.204 33.17-103.05-.02-.01-125.86-33.65-18.05 110.22-26.204 160-30.206 184.44"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M1178.38 969.284s-98.57-285.06-104.006-309.048c-2.444-10.788-52.995-163.952-52.995-163.952l.02-.01 125.86-33.65s35.442 221.548 42.29 263.356l5.662 34.577c10.07 61.48 35.508 194.727 35.508 194.727"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1178.38 969.284s-98.57-285.06-104.006-309.048c-2.444-10.788-52.995-163.952-52.995-163.952l.02-.01 125.86-33.65s35.442 221.548 42.29 263.356l5.662 34.577c10.07 61.48 35.508 194.727 35.508 194.727"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M978.766 776.73h93.026v1109.992l-93.026.004V776.73z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M978.766 776.73h93.026v1109.992l-93.026.004V776.73z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M978.767 1664.186h93.026v222.537l-93.026.001v-222.538z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M978.767 1664.186h93.026v222.537l-93.026.001v-222.538z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M978.768 1664.186h93.026v19.094h-93.026v-19.094z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M978.768 1664.186h93.026v19.094h-93.026v-19.094z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M959.606 776.73h112.186l30.464 480.37-123.394-.386-19.256-479.983z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M959.606 776.73h112.186l30.464 480.37-123.394-.386-19.256-479.983z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M978.768 1792.414v94.31h182.392c2.35 0 4.469-1.4 6.01-3.67 1.543-2.26 2.494-5.4 2.494-8.85 0-4.69-1.787-8.99-4.626-11.13l-9.373-7.08-83.874-63.58a162.727 162.727 0 0 1-93.02 0h-.003z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M978.768 1792.414v94.31h182.392c2.35 0 4.469-1.4 6.01-3.67 1.543-2.26 2.494-5.4 2.494-8.85 0-4.69-1.787-8.99-4.626-11.13l-9.373-7.08-83.874-63.58s0 0 0 0a162.727 162.727 0 0 1-93.02 0h-.003z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="m1037.48 1256.897 34.312 23.216V1257.1l-34.312-.204z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1037.48 1256.897 34.312 23.216V1257.1l-34.312-.204zm-25.728 458.365v-31.96m30 31.96v-31.96m51.011 146.787 12.126-12.37"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="M940.14 776.753h-93.026v1109.99l93.026.004V776.753z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M940.14 776.753h-93.026v1109.99l93.026.004V776.753z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M940.14 1664.208h-93.026v222.537l93.026.001v-222.538z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M940.14 1664.208h-93.026v222.537l93.026.001v-222.538z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M940.139 1664.208h-93.026v19.094h93.026v-19.094z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M940.139 1664.208h-93.026v19.094h93.026v-19.094z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M959.301 776.753H847.115l-30.464 480.37 123.394-.387 19.256-479.983z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M959.301 776.753H847.115l-30.464 480.37 123.394-.387 19.256-479.983z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M940.139 1792.436v94.31H757.747c-2.35 0-4.469-1.4-6.011-3.67-1.542-2.26-2.493-5.4-2.493-8.85 0-4.69 1.787-8.99 4.626-11.13l9.373-7.08 83.874-63.58a162.727 162.727 0 0 0 93.02.001h.003z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M940.139 1792.436v94.31H757.747c-2.35 0-4.469-1.4-6.011-3.67-1.542-2.26-2.493-5.4-2.493-8.85 0-4.69 1.787-8.99 4.626-11.13l9.373-7.08 83.874-63.58s0 0 0 0a162.727 162.727 0 0 0 93.02.001h.003z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="m881.426 1256.919-34.312 23.216v-23.012l34.312-.204z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m881.426 1256.919-34.312 23.216v-23.012l34.312-.204z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m839.317 892.934 7.793-116.18h224.686l7.365 116.18"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m839.317 892.934 7.793-116.18h224.686l7.365 116.18"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m931.349 875.237.66 1.152a37.273 37.273 0 0 0 32.348 18.754"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m931.349 875.237.66 1.152a37.273 37.273 0 0 0 32.348 18.754s0 0 0 0m-86.605 820.119v-31.96m30 31.96v-31.96m-81.863 146.788-12.126-12.37"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1013.916 380.092 55.59 13.58c-18.65 37.75-57.55 63.7-102.5 63.7-45.81 0-85.32-26.95-103.55-65.85l48.9-11.43"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1013.916 380.092 55.59 13.58c-18.65 37.75-57.55 63.7-102.5 63.7-45.81 0-85.32-26.95-103.55-65.85l48.9-11.43"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1165.656 572.732-94.295.11H752.246l20.22-118.91c4.41-25.96 23.96-46.75 49.61-52.74l32.62-7.62 8.76-2.05 14.8-3.46c16.41 32.34 49.99 54.5 88.75 54.5 37.95 0 70.94-21.25 87.71-52.5l14.79 3.61 8.76 2.14 10.95 2.68c31.85 7.78 55.87 34 60.85 66.4l15.59 107.84z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1165.656 572.732-94.295.11H752.246l20.22-118.91c4.41-25.96 23.96-46.75 49.61-52.74l32.62-7.62 8.76-2.05 14.8-3.46c16.41 32.34 49.99 54.5 88.75 54.5 37.95 0 70.94-21.25 87.71-52.5l14.79 3.61 8.76 2.14 10.95 2.68c31.85 7.78 55.87 34 60.85 66.4l15.59 107.84z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1080.286 512.122-8.49 264.61h-112.11v.02h-112.58l-8.49-264.61"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1080.286 512.122-8.49 264.61h-112.11v.02h-112.58l-8.49-264.61"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M1078.266 395.812c-19.74 41.61-62.14 70.37-111.26 70.37-50 0-93.03-29.8-112.31-72.61l8.76-2.05 14.8-3.46c16.41 32.34 49.99 54.5 88.75 54.5 37.95 0 70.94-21.25 87.71-52.5l14.79 3.61 8.76 2.14z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1078.266 395.812c-19.74 41.61-62.14 70.37-111.26 70.37-50 0-93.03-29.8-112.31-72.61l8.76-2.05 14.8-3.46c16.41 32.34 49.99 54.5 88.75 54.5 37.95 0 70.94-21.25 87.71-52.5l14.79 3.61 8.76 2.14zm-97.978 160.483h68.362"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#121331"
                                                d="m923.153 329.285 36.724-16.468-33.018-7.741-3.706 24.209z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m923.153 329.285 36.724-16.468-33.018-7.741-3.706 24.209z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m969.431 314.435-71.919-16.421c-11.64-2.658-17.794-15.442-12.588-26.195l28.958-59.87 10.695-22.106 22.66-46.848 85.564 14.469"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m969.431 314.435-71.919-16.421c-11.64-2.658-17.794-15.442-12.588-26.195l28.958-59.87 10.695-22.106 22.66-46.848 85.564 14.469"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M924.838 242.509a20.241 20.241 0 0 0 19.41-5.692s0 0 0 0"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M939.45 214.86a1.425 1.425 0 1 0 2.81.477 1.425 1.425 0 0 0-2.81-.476z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M939.45 214.86a1.425 1.425 0 1 0 2.81.477 1.425 1.425 0 0 0-2.81-.476z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M948.05 199.95c-1.11.64-.249 4.21 1.923 7.973 2.172 3.762 4.833 6.292 5.943 5.65 1.11-.64.249-4.21-1.923-7.972-2.172-3.762-4.833-6.292-5.943-5.651z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M948.05 199.95c-1.11.64-.249 4.21 1.923 7.973 2.172 3.762 4.833 6.292 5.943 5.65 1.11-.64.249-4.21-1.923-7.972-2.172-3.762-4.833-6.292-5.943-5.651zm-19.353 8.3-11.878 22.607 4.47 3.83"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M958.918 152.226c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M958.918 152.226c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M991.028 137.627c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M991.028 137.627c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M1029.665 141.249c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1029.665 141.249c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M1062.367 167.37c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1062.367 167.37c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M989.603 167.37c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M989.603 167.37c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="M1029.665 174.312c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="M1029.665 174.312c0 13.462-10.913 24.375-24.375 24.375s-24.375-10.913-24.375-24.375 10.913-24.375 24.375-24.375 24.375 10.913 24.375 24.375z"
                                            />
                                            <path
                                                fill="#121331"
                                                d="m1008.16 193.63-4.29 46.318 46.042-15.35 11.242-49.922-52.994 18.954z"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1008.16 193.63-4.29 46.318 46.042-15.35 11.242-49.922-52.994 18.954z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1003.87 239.948 40.481-14.111c9.958-3.772 21.076 1.373 24.641 11.418a18.895 18.895 0 0 1 .828 9.5 19.024 19.024 0 0 1-9.003 13.174l-41.668 22.69"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1003.87 239.948 40.481-14.111c9.958-3.772 21.076 1.373 24.641 11.418a18.895 18.895 0 0 1 .828 9.5 19.024 19.024 0 0 1-9.003 13.174l-41.668 22.69m30.763-39.25-23.84 10.996"
                                            />
                                        </g>
                                        <g style={{ display: "block" }}>
                                            <path
                                                fill="#FFF"
                                                d="m1229.822 953.557 5.055 14.722 34.281 24.457-21.217 61.203-46.74-27.117-9.953-25.941-9.024-31.293 47.598-16.031z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1276.946 1014.041 51.026-2.568c6.072-.177 10.52-5.78 9.314-11.733v-.001a9.794 9.794 0 0 0-10.007-7.84l-67.543-3.608"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1276.946 1014.041 51.026-2.568c6.072-.177 10.52-5.78 9.314-11.733v-.001a9.794 9.794 0 0 0-10.007-7.84l-67.543-3.608"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1294.898 1028.144 45.432 9.694c5.946 1.241 11.576-3.173 11.788-9.244a9.794 9.794 0 0 0-7.907-9.954l-78.332-24.104"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1294.898 1028.144 45.432 9.694c5.946 1.241 11.576-3.173 11.788-9.244 0 0 0 0 0 0a9.794 9.794 0 0 0-7.907-9.954l-78.332-24.104"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1200.902 1026.31-21.31-52.072 52.491-14.75 1.743 7.468 22.407 16.052"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1177.363 968.704 24.12 59.054s2.266 5.743 9.266 10.493m20.114-82.797 2.963 11.502 22.407 16.052"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1211.432 1039.289 51.81 34.86c3.626 2.642 8.555 3.05 12.485 1.032 6.592-3.385 7.501-11.827 1.795-16.675l-21.905-26.432"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1211.432 1039.289 51.81 34.86c3.626 2.642 8.555 3.05 12.485 1.032 0 0 0 0 0 0 6.592-3.385 7.501-11.827 1.795-16.675l-21.905-26.432"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="m1247.617 1027.88 90.552 41.476c5.5 2.581 11.997-.416 13.605-6.273a9.794 9.794 0 0 0-5.396-11.51l-90.144-68.566"
                                            />
                                            <path
                                                fill="none"
                                                stroke="#121331"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5}
                                                d="m1247.617 1027.88 90.552 41.476c5.5 2.581 11.997-.416 13.605-6.273 0 0 0 0 0 0a9.794 9.794 0 0 0-5.396-11.51l-90.144-68.566"
                                            />
                                        </g>
                                    </g>
                                    <g style={{ mixBlendMode: "multiply", display: "block" }}>
                                        <path
                                            fill="#E7E0FD"
                                            d="M134.737 0c0 74.413-60.324 134.737-134.737 134.737S-134.737 74.413-134.737 0-74.413-134.737 0-134.737 134.737-74.413 134.737 0z"
                                            style={{ mixBlendMode: "multiply" }}
                                            transform="translate(1464.213 319.062)"
                                        />
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </main>
                </body>
            </html>
        </>
    )
}

export default Register