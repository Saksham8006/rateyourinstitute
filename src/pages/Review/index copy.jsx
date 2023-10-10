import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import SuccessImage from "../../assets/successimg.png"
import './Review.css'
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


const index = () => {

    const [step, setStep] = useState(0)

    //Step 1
    const [facultyRatings, setFacultyRatings] = useState(0)
    const [educationRatings, setEducationRatings] = useState(0)
    const [infrastructureRatings, setInfrastructureRatings] = useState(0)
    const [locationRatings, setLocationRatings] = useState(0)
    const [email, setEmail] = useState("")
    const [className, setClassName] = useState("")
    const [rooms, setRooms] = useState("")

    const [message, setMessage] = useState("")
    const [instiName, setInstiName] = useState("")

    const [formData, setFormData] = useState({
        education: "",
        infrastructure: "",
        faculty: "",
        location: "",
        message: "",
        photo: "",
        className: "",
        rooms: "",
        email: "",
        instiName: "",

    })

    const handleClassChange = (event) => {
        setClassName(event.target.value);
        console.log(event.target.value)
    };
    const handleRoomsChange = (event) => {
        setRooms(event.target.value);
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

    const handleNext = () => {
        if (step === 0) {
            if (educationRatings > 0 && infrastructureRatings > 0 && locationRatings > 0 && facultyRatings > 0) {
                setStep(step + 1)
            }
            else {
                notifyError("All ratings are mandatory")
            }
        }

        else if (step === 1) {
            if (emailRegex.test(email))
                console.log("object")
        }
        else {
            notifyError("All fields are mandatory")

        }
    }




}
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
    setMessage(i.target.value)

    localStorage.setItem("message", i.target.value)
}

const handleInstiName = (i) => {
    setInstiName(i.target.value)

    localStorage.setItem("instiName", i.target.value)
}
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
            size={25}
            style={{ marginRight: 10, cursor: "pointer" }}

        />
    );
}

const infStars = [];

for (let i = 1; i <= 5; i++) {
    infStars.push(
        <FaStar
            key={i}
            color={i <= (infrastructureRatings) ? "#ffc107" : "#e4e5e9"}
            size={25}
            style={{ marginRight: 10, cursor: "pointer" }}

        />
    );
}

const facStars = [];

for (let i = 1; i <= 5; i++) {
    facStars.push(
        <FaStar
            key={i}
            color={i <= (facultyRatings) ? "#ffc107" : "#e4e5e9"}
            size={25}
            style={{ marginRight: 10, cursor: "pointer" }}

        />
    );
}
const locStars = [];

for (let i = 1; i <= 5; i++) {
    locStars.push(
        <FaStar
            key={i}
            color={i <= (locationRatings) ? "#ffc107" : "#e4e5e9"}
            size={25}
            style={{ marginRight: 10, cursor: "pointer" }}

        />
    );
}


// useEffect(() => {
//     fetch(`http://localhost:5000/api/reviews/read`)
//         .then(response => response.json())
//         .then((data) => {
//             setFormData(data.reviews)
//             console.log(data.reviews)
//         })

// }, [])

async function handleInfo(event) {
    event.preventDefault();
    // console.log("hit")
    var url = "http://localhost:5000/api/review/add"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //req body ||  || className
            education: educationRatings,
            infrastructure: infrastructureRatings,
            faculty: facultyRatings,
            location: locationRatings,
            message: localStorage.getItem("message"),
            rooms: rooms,
            className: className,
            // year: localStorage.getItem("year"),
            email: localStorage.getItem("email"),
            instiName: localStorage.getItem("instiName"),

        }),
    })
}

const totalRating = Number(educationRatings) + Number(infrastructureRatings) + Number(locationRatings) + Number(facultyRatings);
// const averageRating = ratedCount === 4 ? totalRating / 4 : 0;
const averageRating = totalRating / 4;

// const stepDisplay = () => {
//     if (step === 0) {
//         return <Step0 formData={formData} setFormData={setFormData} />
//     } else if (step === 1) {
//         return <Step1 />
//     } else if (step === 2) {
//         return <Step2 />
//     } else if (step === 3) {
//         return <Step3 />
//     }
//     else if (step === 4) {
//         return <Step4 />
//     }
// }

return (
    <>

        <div className="mx-auto max-w-screen-xl h-[100vh] px-4 py-32 sm:px-6 lg:px-8">

            {/* <Toaster
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
            /> */}

            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Write a Review
                </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Complete these mini-steps to fill a review! It will help a lot of students like you!
                </p>
                <div className='progressbar mt-3'>
                    <div style={{ width: step === 0 ? "0%" : step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%" }}
                    > </div>

                </div>
                <form
                    action=""
                    className="border-2 border-gray-300/20 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >

                    {step === 0 &&
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
                                <span className='text-[20px] ml-[-8px] '><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "36px", height: "36px", color: "goldenrod" }}>

                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span>
                            </div>
                        </>
                    }

                    {step === 1 &&
                        <>
                            <p className="text-center text-lg font-semibold">
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
                                        className="w-full rounded-lg border-2 border-slate-400/20 px-4 py-3 pe-12 text-sm shadow-sm"
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
                                        value={instiName}
                                        onChange={handleInstiName}
                                        type="text"
                                        className="w-full rounded-lg border-2 border-slate-400/20  px-4 py-3 pe-12 text-sm shadow-sm"
                                        placeholder="Enter institute name"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Enter Descriptive Review
                                </label>
                                <div className="relative">
                                    <textarea
                                        value={message}
                                        onChange={handleMessageChange}
                                        type="text"
                                        className="w-full rounded-lg border-2 border-slate-400/20 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter detailed review"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                    </span>
                                </div>
                            </div>

                        </>
                    }

                    {step === 2 &&
                        <>
                            <p className="text-left text-xl tracking-tighter font-bold">
                                What className year(s) did you live here?
                            </p>
                            <div>




                                <div className="grid  grid-cols-3 gap-y-3 justify-center  flex-wrap">

                                    <div className="radio">
                                        <input checked={className === 'freshman'} onChange={handleClassChange} type="radio" id="freshman" name="className" value="freshman" />
                                        <label for="freshman" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 py-2 ">
                                                <div className="text-blue text-sm tracking-wide"><strong>Freshman</strong></div>

                                            </div>


                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={className === 'abc'} onChange={handleClassChange} type="radio" id="abc" name="className" value="abc" />
                                        <label for="abc" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>abc</strong></div>

                                            </div>


                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={className === 'pqr'} onChange={handleClassChange} type="radio" id="pqr" name="className" value="pqr" />
                                        <label for="pqr" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>pqr</strong></div>

                                            </div>

                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={className === 'fresher'} onChange={handleClassChange} type="radio" id="fresher" name="className" value="fresher" />
                                        <label htmlFor="fresher" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Fresher</strong></div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={className === 'junior'} onChange={handleClassChange} type="radio" id="junior" name="className" value="junior" />
                                        <label htmlFor="junior" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Junior</strong></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>


                                <p className="mt-6  mb-4 text-left text-xl tracking-tighter font-bold">
                                    What type of rooms did you live in?
                                </p>
                                <div className="grid mb-6 grid-cols-3 gap-y-3 justify-center  flex-wrap">

                                    <div className="radio">
                                        <input checked={rooms === 'huey'} onChange={handleRoomsChange} type="radio" id="huey" name="drone" value="huey" />
                                        <label for="huey" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 py-2 ">
                                                <div className="text-blue text-sm tracking-wide"><strong>Freshman</strong></div>

                                            </div>


                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={rooms === 'dewey'} onChange={handleRoomsChange} type="radio" id="dewey" name="drone" value="dewey" />
                                        <label for="dewey" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Junior</strong></div>

                                            </div>


                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={rooms === 'louie'} onChange={handleRoomsChange} type="radio" id="louie" name="drone" value="louie" />
                                        <label for="louie" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Senior</strong></div>

                                            </div>

                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={rooms === 'lorem'} onChange={handleRoomsChange} type="radio" id="lorem" name="drone" value="lorem" />
                                        <label for="lorem" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Lorem</strong></div>

                                            </div>

                                        </label>
                                    </div>

                                    <div className="radio">
                                        <input checked={rooms === 'ipsum'} onChange={handleRoomsChange} type="radio" id="ipsum" name="drone" value="ipsum" />
                                        <label for="ipsum" className="border-solid border-2 border-grey mx-4 bg-white block shadow-md rounded-lg">
                                            <div className="flex justify-between items-center px-4 pt-3">
                                                <div className="text-blue text-sm tracking-wide"><strong>Ipsum</strong></div>

                                            </div>

                                        </label>
                                    </div>
                                </div>
                            </div>
                        </>
                    }




                    {step === 3 &&
                        <>
                            <div className='flex justify-between p-2'>
                                {/* Rating Components */}
                                <div className='flex flex-row items-center gap-x-4'>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='flex justify-between gap-x-9 w-full'>
                                            <div className='flex flex-col justify-start'>
                                                <p className='text-left'>Rate Education</p>
                                                <p className='text-left'>Rate Faculty</p>
                                                <p className='text-left'>Rate Infrastructure</p>
                                                <p className='text-left'>Rate Location</p>

                                            </div>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    {eduStars}
                                                </div>
                                                <div className="flex items-center">
                                                    {facStars}
                                                </div>
                                                <div className="flex items-center">
                                                    {infStars}
                                                </div>
                                                <div className="flex items-center">
                                                    {locStars}
                                                </div>
                                            </div>

                                        </div>


                                    </div>


                                </div>


                            </div>


                            {/* email and institute */}
                            <div className='flex flex-col mt-[-30px]'>

                                {/* Rating Components */}
                                <div className='flex flex-row gap-x-4 ml-[10px]'>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-lg'>Your Email :</span>
                                    </div>

                                    <div className='flex flex-col gap-y-3'>
                                        <div className="flex text-red-400">
                                            {localStorage.getItem('email')}
                                        </div>

                                    </div>
                                </div>

                                {/* Checkboxes Coponents */}
                                <div className='flex flex-row gap-x-4 ml-[10px]'>
                                    <span className='font-bold text-lg'>Your Institute :</span>
                                    <span className='font-bold text-red-400'> " {localStorage.getItem('instiName')} " </span>

                                </div>

                                <div className='px-3 pt-2'>
                                    <p>{localStorage.getItem('message')}</p>
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

                    {step !== 4 && (
                        <button
                            onClick={() => handleNext()}
                            type="button"
                            className="block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all px-5 py-3 text-sm font-medium text-white"
                        >
                            {step === 3 ? 'Submit' : 'Next'}
                        </button>
                    )}

                    {step > 0 && step < 4 && (
                        <p className="text-center text-sm text-gray-500">
                            Want to change previously filled information?
                            <button
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


export default index