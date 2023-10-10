import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import SuccessImage from "../../assets/successimg.png"
import './Review.css'
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import baseUrl from '../../config';

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


const index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Get the current URL
        const url = new URL(window.location.href);

        // Get the value of the "institute" parameter from the URL
        const params = new URLSearchParams(url.search);
        const institute = params.get('institute');
        setInstiName(institute)

        console.log('Institute:', institute);
    }, []);

    const [step, setStep] = useState(0)

    //Step 1
    const [facultyRatings, setFacultyRatings] = useState(0)
    const [educationRatings, setEducationRatings] = useState(0)
    const [infrastructureRatings, setInfrastructureRatings] = useState(0)
    const [locationRatings, setLocationRatings] = useState(0)
    const [instiLocation, setInstiLocation] = useState("")
    const [email, setEmail] = useState("")
    const [joiningYear, setJoiningYear] = useState("")
    const [experience, setExperience] = useState("")
    const [course, setCourse] = useState("")
    const [message, setMessage] = useState("")
    const [instiName, setInstiName] = useState("")
    const [showInput, setShowInput] = useState(false);
    const [otherEntranceExamValue, setOtherEntranceExamValue] = useState('');


    const [formData, setFormData] = useState({
        education: "",
        infrastructure: "",
        faculty: "",
        message: "",
        photo: "",
        joiningYear: "",
        experience: "",
        email: "",
        instiName: "",
        instiLocation: "",
        course: "",

    })


    const handleCourseChange = (e) => {
        const selectedCourse = e.target.value;
        setCourse(selectedCourse);
        console.log(selectedCourse);

        if (selectedCourse === "Other") {
            setShowInput(true);
        } else {
            setShowInput(false);
        }
    };




    const handleOtherInputChange = (event) => {
        setOtherEntranceExamValue(event.target.value);
        console.log(event.target.value);
    };



    const handleJoiningYearChange = (event) => {
        setJoiningYear(event.target.value);
        console.log(event.target.value)
    };
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
        console.log(event.target.value)
    };


    const notifyError = (text) => { toast.error(text) }

    const handleEducationRatingChange = (i) => {

        const value = i.target.value;
        setEducationRatings(value)

        console.log(value)
        setFormData((formData) => ({
            ...formData,
            education: value,
        }));
    };

    const handleInfrastructureRatingChange = (i) => {
        setInfrastructureRatings(i.target.value)
        localStorage.setItem("infrastructureRatings", i)
    }

    const handleNext = (e) => {

        if (step === 0) {
            // if (emailRegex.test(email) && instiName.length > 5 && message.length > 20) {
            //     setStep(step + 1);
            // } else {
            //     toast.error("Please provide valid email, institution name (at least 5 characters), and a message (at least 21 characters).");
            // }

            if (!emailRegex.test(email)) {
                toast.error("Please provide a valid email.");
            } else if (instiName.length < 5) {
                toast.error("Institution name  will atleast 5 characters.");
            } else if (instiLocation.length < 2) {
                toast.error("Institute location is required");
                // } else if (message.length <= 20) {
                //     toast.error("Review will at least 20 characters.");
           
            } else {
                setStep(step + 1);
            }
        }
        else if (step === 1) {
            if (educationRatings > 0 && infrastructureRatings > 0 && locationRatings > 0 && facultyRatings > 0) {
                setStep(step + 1);
            } else {
                toast.error("Please provide ratings for all categories.");
            }
        } else if (step === 2) {
            // Check if at least one radio button is selected
            const isRadioButtonSelected = experience !== '' && joiningYear !== '';
            if (isRadioButtonSelected) {
                setStep(step + 1);
            } else {
                toast.error("Please select at least one option.");
            }
        } else if (step === 3) {
            handleInfo(e);
        } else {
            setStep(step + 1);
            toast.error("All fields are mandatory!");
        }
    };






    const handlePrev = () => {
        setInfrastructureRatings(i.target.value)
        localStorage.setItem("infrastructureRatings", i)
    }

    const handleLocationRatingChange = (i) => {
        setLocationRatings(i.target.value)
        localStorage.setItem("locationRatings", i)
    }

    const handleFacultyRatingChange = (i) => {
        setFacultyRatings(i.target.value)
        localStorage.setItem("facultyRatings", i)
    }

    const handleMessageChange = (i) => {
        const value = i.target.value;
        setMessage(value);

        localStorage.setItem('message', value);


    }

    const handleInstiName = (event) => {
        const value = event.target.value;
        setInstiName(value);

        localStorage.setItem('instiName', value); // Set the value in localStorage

    };

    const handleInstiLocation = (event) => {
        const value = event.target.value;
        setInstiLocation(value);
        console.log(value);

        localStorage.setItem('instiLocation', value); // Set the value in localStorage

    };


    const handleEmail = (i) => {
        setEmail(i.target.value)
        localStorage.setItem("email", i.target.value)
    }


    const eduStars = [];

    for (let i = 1; i <= 5; i++) {
        eduStars.push(
            <FaStar
                key={i}
                color={i <= (educationRatings) ? "#ffc107" : "#e4e5e9"}
                size={17}
                style={{ marginRight: 2, cursor: "pointer" }}

            />
        );
    }

    const infStars = [];

    for (let i = 1; i <= 5; i++) {
        infStars.push(
            <FaStar
                key={i}
                color={i <= (infrastructureRatings) ? "#ffc107" : "#e4e5e9"}
                size={17}
                style={{ marginRight: 2, cursor: "pointer" }}

            />
        );
    }

    const facStars = [];

    for (let i = 1; i <= 5; i++) {
        facStars.push(
            <FaStar
                key={i}
                color={i <= (facultyRatings) ? "#ffc107" : "#e4e5e9"}
                size={17}
                style={{ marginRight: 2, cursor: "pointer" }}

            />
        );
    }
    const locStars = [];

    for (let i = 1; i <= 5; i++) {
        locStars.push(
            <FaStar
                key={i}
                color={i <= (locationRatings) ? "#ffc107" : "#e4e5e9"}
                size={17}
                style={{ marginRight: 2, cursor: "pointer" }}

            />
        );
    }


    async function handleInfo(event) {
        event.preventDefault();

        var url = `${baseUrl}/api/review/add`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // req body ||  || className
                education: educationRatings,
                infrastructure: infrastructureRatings,
                faculty: facultyRatings,
                location: locationRatings,
                message: message,
                experience: experience,
                joiningYear: joiningYear,
                course: course,
                otherEntranceExamValue: otherEntranceExamValue,
                // year: localStorage.getItem("year"),
                email: email,
                instiName: instiName,
                instiLocation: instiLocation

            }),
        });

        if (response.ok) {
            toast.success("Congratulations! ")
            setStep(step + 1);
            // navigate("/")
        } else {
            toast.error(" You review is not save ")
            setStep(0)
        }
    }


    const totalRating = Number(educationRatings) + Number(infrastructureRatings) + Number(locationRatings) + Number(facultyRatings);
    const averageRating = totalRating / 4;



    return (
        <>


            <div className="mx-auto min-h-screen max-w-screen-xl  px-4 py-32 sm:px-6 lg:px-8">

                <Toaster

                    toastOptions={{
                        success: {
                            style: {
                                background: 'green',
                            },
                        },
                        error: {
                            style: {
                                background: '#fff2f3',
                            },
                        },
                    }}
                />

                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Write a Review
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Complete these mini-steps to fill a review! It will help a lot of students like you!
                    </p>
                    <div className='progressbar mt-3 '>
                        <div style={{ width: step === 0 ? "0%" : step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%" }}>
                        </div>
                    </div>

                    <form
                        className="border-2 border-gray-300/20 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >



                        {step === 0 &&
                            <>
                                <p className="text-left text-lg font-semibold">
                                    Add your credentials
                                </p>

                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            value={email}
                                            onChange={handleEmail}
                                            type="email"
                                            className={`w-full rounded-lg border-2 focus:ring-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-slate-400/20 px-4 ${!emailRegex.test(email) ? 'border-slate-400/20 border-red-500 ' : 'border-green-500 focus:border-green-500'} py-3 pe-12 text-sm shadow-sm`}
                                            placeholder="Enter email"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Institute name
                                    </label>
                                    <div className="relative">
                                        <input
                                            id='searchItem'
                                            value={instiName}
                                            onChange={handleInstiName}
                                            type="text"
                                            className="w-full rounded-lg border-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-slate-400/20 px-4 py-3 pe-12 text-sm shadow-sm"
                                            placeholder="Enter institute name"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="locality" className="sr-only">
                                        Enter Your Institute Location
                                    </label>
                                    <div className="relative">
                                        <input
                                            id='searchItem'
                                            value={instiLocation}
                                            onChange={handleInstiLocation}
                                            type="text"
                                            className={`w-full rounded-lg border-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-slate-400/20 px-4 py-3 pe-12 text-sm shadow-sm ${instiLocation > 2 ? 'border-green-500' : ' border-red-500'}`}
                                            placeholder="Enter institute Location"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                        </span>
                                    </div>
                                </div>


                                <select id="courses" value={course} onChange={handleCourseChange} placeholder="choose a course" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-2 text-gray-600 ">
                                    <option selected>Select Your Entrance Exam</option>
                                    <option value="JEE Mains (IIT)">JEE Mains (IIT)</option>
                                    <option value="JEE Advanced (IIT)">JEE Advanced (IIT)</option>
                                    <option value="NEET">NEET</option>
                                    <option value="CAT">CAT</option>
                                    <option value="CLAT">CLAT</option>
                                    <option value="GATE">GATE</option>
                                    <option value="GRE (Graduate Record Examination)">GRE (Graduate Record Examination)</option>
                                    <option value="GATE (Graduate Aptitude Test in Engineering)">GATE (Graduate Aptitude Test in Engineering)</option>
                                    <option value="SAT (Scholastic Aptitude Test)">SAT (Scholastic Aptitude Test)</option>
                                    <option value="TOEFL (Test of English as a Foreign Language)">TOEFL (Test of English as a Foreign Language)</option>
                                    <option value="CAT (Common Admission Test)">CAT (Common Admission Test)</option>
                                    <option value="NET (National Eligibility Test)">NET (National Eligibility Test)</option>
                                    <option value="Civil Services IAS Exam">Civil Services IAS Exam</option>
                                    <option value="Combined Defense Services Exam">Combined Defense Services Exam</option>
                                    <option value="Combined Matric Preliminary Exam">Combined Matric Preliminary Exam</option>
                                    <option value="Engineering Services Exam">Engineering Services Exam</option>
                                    <option value="National Defense Academy Exam">National Defense Academy Exam</option>
                                    <option value="Nationalised Banks Probationary Officers Exam">Nationalised Banks Probationary Officers Exam</option>
                                    <option value="State Bank Of India Probationary Officers Exam">State Bank Of India Probationary Officers Exam</option>
                                    <option value="Reserve Bank Officers' Grade 'A' / 'B' Exam">Reserve Bank Officers' Grade 'A' / 'B' Exam</option>
                                    <option value="Bank Clerical Exam">Bank Clerical Exam</option>
                                    <option value="GMAT (Graduate Management Admission Test)LIC">GMAT (Graduate Management Admission Test)LIC</option>
                                    <option value="Officers Exam">Officers Exam</option>
                                    <option value="WBJEE">WBJEE</option>
                                    <option value="UPSEE">UPSEE</option>
                                    <option value="MHT CET">MHT CET</option>
                                    <option value="JET Rajasthan">JET Rajasthan</option>
                                    <option value="KCET">KCET</option>
                                    <option value="VITEEE">VITEEE</option>
                                    <option value="BITSAT">BITSAT</option>
                                    <option value="CUSAT">CUSAT</option>
                                    <option value="NDA">NDA</option>
                                    <option value="AIEEE">AIEEE</option>
                                    <option value="CA">CA</option>
                                    <option value="AIIMS">AIIMS</option>
                                    <option value="XAT	Xavier School of Management (XLRI)">XAT	Xavier School of Management (XLRI)</option>
                                    <option value="Other">Other</option>
                                </select>






                                {showInput && (<div>
                                    <label htmlFor="entranceExamValue" className="sr-only">
                                        Enter Your Entrance Exam
                                    </label>
                                    <div className="relative">
                                        <input
                                            id='otherInput'
                                            value={otherEntranceExamValue}
                                            onChange={handleOtherInputChange}
                                            type="text"
                                            className="w-full rounded-lg border-2 focus:outline-none border-slate-400/20 px-4 py-3 pe-12 text-sm shadow-sm "
                                            placeholder="Enter Your Entrance Exam"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                        </span>
                                    </div>
                                </div>

                                )}
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Enter Descriptive Review
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            value={message}
                                            onChange={handleMessageChange}
                                            type="text"
                                            className={`w-full rounded-lg border-2 focus:outline-none border-slate-400/20 p-4 pe-12 text-sm shadow-sm ${message.length > 20 ? 'border-green-500' : 'border-red-500'}`}
                                            placeholder="Enter detailed review"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                        </span>
                                    </div>
                                </div>
                                <div className='pl-[15px] pt-[30px]'>
                                    <p className='text-sm  text-slate-400'>We won’t show your email address publicly, your review will still be anonymous!</p>

                                </div>

                            </>
                        }
                        {step === 1 &&
                            <>
                                <p className="text-start text-lg font-semibold">
                                    Give ratings by selecting stars
                                </p>

                                <div className='flex justify-between text-left items-center w-full mb-8'>
                                    <div className='flex items-center'>
                                        <img className='w-12 inline-block mr-2' src="../assets/education.webp" alt="Faculty" />
                                        <p className='text-left'>Rate Education </p>
                                    </div>

                                    <Rating
                                        name="educationRatings"
                                        value={educationRatings}
                                        onChange={(event, newValue) => {
                                            setEducationRatings(newValue);
                                        }}
                                        onClick={(i) => handleEducationRatingChange(i)}
                                    />
                                </div>

                                <div className='flex justify-between text-left items-center w-full mb-8'>
                                    <div className='flex items-center'>
                                        <img className='w-12 inline-block mr-2' src="../assets/faculty.png" alt="Faculty" />
                                        <p className='text-left'>Rate Faculty </p>
                                    </div>

                                    <Rating
                                        name="facultyRatings"
                                        value={facultyRatings}
                                        onChange={(event, newValue) => {
                                            setFacultyRatings(newValue);
                                        }}
                                        onClick={(i) => handleFacultyRatingChange(i)}

                                    />
                                </div>

                                <div className='flex justify-between text-left items-center w-full mb-8'>
                                    <div className='flex items-center'>
                                        <img className='w-12 inline-block mr-2' src="../assets/college.webp" alt="Faculty" />
                                        <p className='text-left'>Rate Infrastructure </p>
                                    </div>

                                    <Rating
                                        name="infrastructureRatings"
                                        value={infrastructureRatings}
                                        onChange={(event, newValue) => {
                                            setInfrastructureRatings(newValue);
                                        }}
                                        onClick={(i) => handleInfrastructureRatingChange(i)}
                                    />
                                </div>

                                <div className='flex justify-between text-left items-center w-full mb-12'>
                                    <div className='flex items-center'>
                                        <img className='w-12 inline-block mr-2' src="../assets/location.webp" alt="Faculty" />
                                        <p className='text-left'>Rate Location</p>
                                    </div>

                                    <Rating
                                        name="locationRatings"
                                        value={locationRatings}
                                        onChange={(event, newValue) => {
                                            setLocationRatings(newValue);
                                        }}
                                        onClick={(i) => handleLocationRatingChange(i)}

                                    />
                                </div>
                                <div className='flex justify-end items-center'><span className='mr-[8px]'>Your Rating: {averageRating.toFixed(2)}</span>
                                    <span className='text-[20px] ml-[-8px] '><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "26px", height: "26px", color: "goldenrod" }}>

                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span>
                                </div>
                            </>
                        }


                        {step === 2 &&
                            <>
                                <p className="text-left text-xl tracking-tighter font-bold">
                                    Which <span className='text-blue-600'>year</span> did you join the <span className='text-blue-600'>institute</span>?
                                </p>
                                <div>





                                <input value={joiningYear} onChange={handleJoiningYearChange} type="date" id="year" name="year" min="1900" max="2099" step="1" class="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" />

                                    <p className="mt-6  mb-4 text-left text-xl tracking-tighter font-bold">
                                        How many <span className='text-blue-600'>years</span> did you study at this <span className='text-blue-600'>institute</span>?
                                    </p>


                                    <input value={experience} onChange={handleExperienceChange} type="number" id="experience" name="experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " />


                                </div>
                            </>
                        }




                        {step === 3 &&
                            <>
                                <div className='flex justify-between p-2'>
                                    {/* Rating Components */}
                                    <div className='flex flex-row items-center gap-x-4'>
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='flex flex-col gap-x-4 ml-[10px]'>

                                                <div className='text-black flex text-xl gap-x-2'>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">

                                                        <path fill="#f1df6f" d="M.1 22.8h47.8v25.1H.1z" />
                                                        <path fill="#f26963" d="m24 4.6 11.7 11.7h4.5L24 .1 7.8 16.3h4.5z" />
                                                        <path fill="#eac84c" d="M35.6 22.8v-6.6L24 4.6 12.4 16.2v6.6z" />
                                                        <circle cx="24" cy="15.1" r="4.7" fill="#fff" /><path fill="#525b7a" d="M24 29.6c-3.4 0-6.2 2.8-6.2 6.2V48h12.3V35.8c.1-3.5-2.7-6.2-6.1-6.2z" />
                                                        <path fill="#fff" d="M34.4 30.7h4.4v4.4h-4.4zM39.5 30.7h4.4v4.4h-4.4zM34.4 35.7h4.4v4.4h-4.4zM39.5 35.7h4.4v4.4h-4.4zM4.2 30.7h4.4v4.4H4.2zM9.2 30.7h4.4v4.4H9.2zM4.2 35.7h4.4v4.4H4.2zM9.2 35.7h4.4v4.4H9.2z" />
                                                        <path fill="#303c64" d="M23.8 10.8h.4v.5h-.4zM23.8 18.8h.4v.5h-.4z" /><path fill="#303c64" d="M26.5 12.1h.5v.4h-.5z" transform="rotate(-44.992 26.812 12.268)" />
                                                        <path fill="#303c64" d="M21 17.6h.4v.5H21z" transform="rotate(-135.016 21.191 17.885)" /><path fill="#303c64" d="M27.7 14.9h.5v.4h-.5zM19.8 14.9h.5v.4h-.5z" /><g><path fill="#303c64" d="M26.5 17.7h.5v.4h-.5z" transform="rotate(44.976 26.81 17.883)" />
                                                            <path fill="#303c64" d="M21 12h.4v.5H21z" transform="rotate(-45.017 21.19 12.27)" /></g><path fill="#e2e3e5" d="m24 15.2 2.1.2.3-.3-.3-.3-2.1.1z" /><path fill="#e2e3e5" d="m24.2 15.3.1-2.8-.3-.4-.3.4.1 2.8z" />
                                                        <path fill="#f26963" d="M24.1 14.9H24l-2.3 2.3v.1h.1l2.3-2.3v-.1z" />
                                                        <circle cx="24" cy="15.1" r=".6" fill="#525b7a" /></svg>

                                                    <span className='font-bold text-2xl'>{localStorage.getItem('instiName')}, {localStorage.getItem('instiLocation')}</span>
                                                </div>
                                                <div className='text-slate-600 text-sm pt-2 '>
                                                    <p>{localStorage.getItem('message')}</p>
                                                </div>

                                            </div>

                                            <hr class="h-px my-5 bg-gray-200 border"></hr>

                                            <div className='flex gap-x-2 items-center'>

                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" width="40" height="40">
                                                    <path fill="#ffe236" d="M458.31 242.318a7.27 7.27 0 0 0-2.09 6.42l10.63 61.97a7.248 7.248 0 0 1-10.52 7.64l-55.65-29.25a6.777 6.777 0 0 0-6.5 0l-40.86 21.47-14.8 7.78a7.25 7.25 0 0 1-10.52-7.64l10.63-61.97a7.236 7.236 0 0 0-2.08-6.42l-45.03-43.88a7.252 7.252 0 0 1 4.02-12.37l16.64-2.42 19.83-2.88-.02-.03 25.53-3.71a7.282 7.282 0 0 0 5.46-3.97l27.82-56.38a7.452 7.452 0 0 1 13.25 0l27.83 56.38a7.265 7.265 0 0 0 5.46 3.97l25.52 3.71-.01.03 36.46 5.3a7.25 7.25 0 0 1 4.02 12.37Z" /><path fill="#ffd00b" d="M503.33 198.438a7.25 7.25 0 0 0-4.02-12.37l-36.46-5.3.01-.03-25.52-3.71a7.265 7.265 0 0 1-5.46-3.97l-27.83-56.38a7.452 7.452 0 0 0-13.25 0l-2.166 4.39a7.47 7.47 0 0 1 .416.71l27.83 56.38a7.265 7.265 0 0 0 5.46 3.97l25.52 3.71-.01.03 36.46 5.3a7.25 7.25 0 0 1 4.02 12.37l-45.02 43.88a7.27 7.27 0 0 0-2.09 6.42l10.63 61.97c.012.067.01.13.02.196l4.46 2.344a7.248 7.248 0 0 0 10.52-7.64l-10.63-61.97a7.27 7.27 0 0 1 2.09-6.42Z" /><path fill="#ffe236" d="M175.45 242.318a7.236 7.236 0 0 0-2.08 6.42l10.63 61.97a7.25 7.25 0 0 1-10.52 7.64l-16.96-8.91-38.7-20.34a6.777 6.777 0 0 0-6.5 0l-55.65 29.25a7.248 7.248 0 0 1-10.52-7.64l10.63-61.97a7.27 7.27 0 0 0-2.09-6.42l-45.02-43.88a7.25 7.25 0 0 1 4.02-12.37l36.46-5.3-.01-.03 25.52-3.71a7.265 7.265 0 0 0 5.46-3.97l27.83-56.38a7.452 7.452 0 0 1 13.25 0l27.82 56.38a7.282 7.282 0 0 0 5.46 3.97l25.53 3.71-.02.03 17.1 2.49 19.37 2.81a7.252 7.252 0 0 1 4.02 12.37Z" /><path fill="#ffd00b" d="m416.2 229.038-62.1 60.52a10.018 10.018 0 0 0-2.87 8.86l2.09 12.15-14.8 7.78a7.25 7.25 0 0 1-10.52-7.64l10.63-61.97a7.236 7.236 0 0 0-2.08-6.42l-45.03-43.88a7.252 7.252 0 0 1 4.02-12.37l16.64-2.42 5.13 10.39a10.014 10.014 0 0 0 7.53 5.47l85.82 12.47a10.003 10.003 0 0 1 5.54 17.06zm-240.75 13.28a7.236 7.236 0 0 0-2.08 6.42l10.63 61.97a7.25 7.25 0 0 1-10.52 7.64l-16.96-8.91 2.19-12.75a10.01 10.01 0 0 0-2.87-8.85l-62.1-60.53a10.005 10.005 0 0 1 5.54-17.06l85.82-12.46a9.993 9.993 0 0 0 7.52-5.48l4.47-9.05 19.37 2.81a7.252 7.252 0 0 1 4.02 12.37z" /><path fill="#ffe236" d="m263.936 120.048 38.377 77.76a10 10 0 0 0 7.53 5.47l85.813 12.47a10 10 0 0 1 5.542 17.057l-62.095 60.527a10 10 0 0 0-2.876 8.852l14.658 85.466a10 10 0 0 1-14.51 10.542l-76.753-40.352a10 10 0 0 0-9.306 0l-76.754 40.352a10 10 0 0 1-14.51-10.542l14.66-85.466a10 10 0 0 0-2.877-8.852l-62.095-60.527a10 10 0 0 1 5.543-17.057l85.813-12.47a10 10 0 0 0 7.529-5.47l38.377-77.76a10 10 0 0 1 17.934 0Z" /></svg>
                                                <span className=' font-semibold text-lg'>Ratings</span>
                                            </div>
                                            <div className='flex justify-between gap-y-3 gap-x-9 w-full grid-cols-2'>
                                                <div className=' grid grid-cols-1 md:grid-cols-2 gap-x-4'>
                                                    <div className='flex items-center gap-x-8'>
                                                        <p className='tracking-tight text-slate-600 text-sm'>Education</p>
                                                        <span className='flex'>{eduStars}</span>
                                                    </div>
                                                    <div className='flex items-center gap-x-6'>

                                                        <p className=' tracking-tight text-slate-600 text-sm'>Faculty</p>
                                                        <span className='flex tracking-tighter'>{facStars}</span>
                                                    </div>

                                                    <div className='flex items-center gap-x-2'>

                                                        <p className='tracking-tight text-slate-600 text-sm'>Infrastructure</p>
                                                        <span className='flex'>{infStars}</span>
                                                    </div>
                                                    <div className='flex items-center gap-x-[14px]'>

                                                        <p className='tracking-tight text-slate-600 text-sm'>Location</p>
                                                        <span className='flex'>{locStars}</span>
                                                    </div>

                                                </div>


                                            </div>


                                        </div>


                                    </div>


                                </div>
                                <div className='flex pl-[10px] items-center'><span className='pr-[15px] font-semibold text-base'>Average Rating: {averageRating.toFixed(2)}</span>
                                    <span className='text-[20px] ml-[-8px] '><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "28px", height: "28px", color: "#FFC107" }}>

                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span>
                                </div>


                                <div className='flex flex-col mt-[-30px]'>


                                    <div className='flex flex-col md:flex-row items-center text-start gap-x-4 ml-[10px]'>

                                        <span className='font-semibold text-base'>Reviewed By :</span>
                                        <span className=" text-blue-600 underline">
                                            {localStorage.getItem('email')}
                                        </span>
                                    </div>
                                    <div className='pl-[15px]'>
                                        <p className='text-sm  text-slate-400'>We won’t show your email address publicly, your review will still be anonymous!</p>

                                    </div>

                                </div>
                            </>

                        }

                        {step === 4 &&
                            <>
                                <div>
                                    <h3 className='text-center mb-6 text-green-400 font-semibold text-xl'> Your review has successfully registered!</h3>

                                    <img className=' mx-auto w-[300px]' src={SuccessImage} />
                                </div>

                            </>
                        }

                        {step === 99 &&
                            <>
                                <div>
                                    <h3 className='text-left mb-2 text-red-600 font-semibold text-xl'> Your review couldn't be saved. Please try again!</h3>

                                    <img className=' mx-auto w-[300px]' src={"https://cdn3d.iconscout.com/3d/premium/thumb/failed-message-5309096-4440432.png"} />
                                </div>

                            </>
                        }

                        {step >= 0 && step < 4 && (
                            <button
                                onClick={(e) => handleNext(e)}
                                type="button"
                                className="block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all px-5 py-3 text-sm font-medium text-white"
                            >


                                {step === 3 ? 'Submit' : 'Next'}
                            </button>
                        )}

                        {/* 
                        {step === 99 && (
                            <button
                                onClick={() => setStep(0)}
                                type="button"
                                className="block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all px-5 py-3 text-sm font-medium text-white"
                            >Go Back
                            </button>
                        )} */}

                        {step > 0 && step < 4 && (
                            <p className="text-center text-sm text-gray-500">
                                Want to change previously filled information?
                                <button
                                    type='button'
                                    onClick={() => setStep(step - 1)}
                                    className="underline text-blue-600 hover:placeholder:text-blue-800 transition-all font-semibold"
                                >
                                    &nbsp;Go Back
                                </button>
                            </p>
                        )}



                    </form>


                </div >
            </div >
        </>

    )
}

export default index