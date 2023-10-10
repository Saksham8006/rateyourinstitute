// import React, { useState, useEffect } from 'react'
// import bgReview from '../assets/bgReview'
// // import { a } from 'react-router-dom'
// import Navbar from '../shared/Navbar'
// import Footer from '../shared/Footer'
// import { MdLocationPin } from 'react-icons/md'
// import { TbEdit } from 'react-icons/tb'
// import { NavLink } from 'react-router-dom'
// import { FaStar } from "react-icons/fa";


// const AddReview = () => {

//     const [reviews, setReviews] = useState([])

//     const [educationRating, setEducationRating] = useState(0);

//     const [infrastructureRating, setInfrastructureRating] = useState(0);

//     const [locationRating, setLocationRating] = useState(0);

//     const [facultyRating, setFacultyRating] = useState(0);

//     useEffect(() => {
//         // const url = config.baseUrl
//         // console.log("url", url)

//         fetch("http://localhost:5000/api/reviews/read")
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data)
//                 setReviews(data)
//             })

//     }, [])


//     const eduUpdate = (rating) => {
//         const eduStars = [];

//         for (let i = 1; i <= 5; i++) {
//             eduStars.push(
//                 <FaStar
//                     key={i}
//                     color={i <= (rating) ? "#ffc107" : "#e4e5e9"}
//                     size={25}
//                     style={{ marginRight: 10, cursor: "pointer" }}

//                 />
//             );
//         }
//         return (
//             eduStars
//         )
//     }

//     const infraUpdate = (rating) => {
//         const infStars = [];

//         for (let i = 1; i <= 5; i++) {
//             infStars.push(
//                 <FaStar
//                     key={i}
//                     color={i <= (rating) ? "#ffc107" : "#e4e5e9"}
//                     size={25}
//                     style={{ marginRight: 10, cursor: "pointer" }}

//                 />
//             );
//         }
//         return (
//             infStars
//         )
//     }


//     const facUpdate = (rating) => {
//         const facStars = [];

//         for (let i = 1; i <= 5; i++) {
//             facStars.push(
//                 <FaStar
//                     key={i}
//                     color={i <= (rating) ? "#ffc107" : "#e4e5e9"}
//                     size={25}
//                     style={{ marginRight: 10, cursor: "pointer" }}

//                 />
//             );
//         }
//         return (
//             facStars
//         )
//     }


//     const locUpdate = (rating) => {
//         const locStars = [];

//         for (let i = 1; i <= 5; i++) {
//             locStars.push(
//                 <FaStar
//                     key={i}
//                     color={i <= (rating) ? "#ffc107" : "#e4e5e9"}
//                     size={25}
//                     style={{ marginRight: 10, cursor: "pointer" }}

//                 />
//             );
//         }
//         return (
//             locStars
//         )
//     }


//     const eduStars = [];

//     for (let i = 1; i <= 5; i++) {
//         eduStars.push(
//             <FaStar
//                 key={i}
//                 color={i <= (educationRating) ? "#ffc107" : "#e4e5e9"}
//                 size={25}
//                 style={{ marginRight: 10, cursor: "pointer" }}

//             />
//         );
//     }

//     const infraStars = [];

//     for (let i = 1; i <= 5; i++) {
//         infraStars.push(
//             <FaStar
//                 key={i}
//                 color={i <= (infrastructureRating) ? "#ffc107" : "#e4e5e9"}
//                 size={25}
//                 style={{ marginRight: 10, cursor: "pointer" }}

//             />
//         );
//     }

//     const facStars = [];

//     for (let i = 1; i <= 5; i++) {
//         facStars.push(
//             <FaStar
//                 key={i}
//                 color={i <= (facultyRating) ? "#ffc107" : "#e4e5e9"}
//                 size={25}
//                 style={{ marginRight: 10, cursor: "pointer" }}

//             />
//         );
//     }
//     const locStars = [];

//     for (let i = 1; i <= 5; i++) {
//         locStars.push(
//             <FaStar
//                 key={i}
//                 color={i <= (locationRating) ? "#ffc107" : "#e4e5e9"}
//                 size={12}
//                 style={{ marginRight: 10 }}

//             />
//         );
//     }

//     return (
//         <>
//             <Navbar />
//             <div className=''>
//                 <div className="bg-center bg-cover bg-no-repeat bg-black top-0  right-0 left-0 w-full 
//          min-h-[200px] flex items-end justify-between p-7 text-gray-100  "
//                     style={{ backgroundImage: `url(${bgReview})` }}>
//                     <div className='text-4xl font-bold'>
//                         <span>Institute Name Change</span>
//                     </div>


//                 </div>

//                 <div className=' flex justify-between p-3'>

//                     <span className='text-blue-500 justify-start hover:underline'>All Reviews</span>

//                     <NavLink to="/writeReview">
//                         <button className='flex  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium 
//           rounded-full text-sm px-5 py-2.5 text-center mr-2 gap-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>

//                             <span>Write a Review</span>
//                             <span>< TbEdit /></span>
//                         </button>
//                     </NavLink>

//                 </div>
//                 {reviews.map((review, index) => (
//                     <div className='mt-12 '>
//                         <div className="  rounded-xl shadow sm:flex flex-col gap-y-3  mx-8 ">
//                             {/* 1st comment */}
//                             <div className="p-5 flex bg-gray-100 flex-row gap-3">
//                                 {/* overall rating */}
//                                 <div className='bg-green-400 p-3 rounded-xl flex flex-col items-center w-[80px] h-[90px]'>
//                                     <span className='font-bold'>overall</span>
//                                     <span className='text-lg font-bold'> {(parseInt(review.educationRating) + parseInt(review.infrastructureRating) + parseInt(review.facultyRating) + parseInt(review.locationRating)) / 4}</span>
//                                 </div>

//                                 {/* review content */}
//                                 <div>

//                                     <p> {review.paragraph}</p>


//                                     <div className='flex flex-row gap-x-7 mt-2 font-semibold items-center '>
//                                         <div className='w-[140px]'>
//                                             Education:
//                                         </div>

//                                         <div className='flex w-[400px] items-end'>
//                                             {eduUpdate(review.educationRating)}
//                                         </div>
//                                     </div>



//                                     <div className='flex flex-row gap-x-7 mt-2 font-semibold items-center '>
//                                         <div className='w-[140px]'>
//                                             Infrastructure:
//                                         </div>
//                                         <div className='flex w-[400px] items-end'>
//                                             {infraUpdate(review.infrastructureRating)}
//                                         </div>
//                                     </div>


//                                     <div className='flex flex-row gap-x-7 mt-2 font-semibold items-center '>
//                                         <div className='w-[140px]'>
//                                             faculty:
//                                         </div>
//                                         <div className='flex w-[400px] items-end'>
//                                             {facUpdate(review.facultyRating)}
//                                         </div>
//                                     </div>


//                                     <div className='flex flex-row gap-x-7 mt-2 font-semibold items-center '>
//                                         <div className='w-[140px]'>
//                                             location:
//                                         </div>
//                                         <div className='flex w-[400px] items-end'>
//                                             {locUpdate(review.locationRating)}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 ))}
//             </div>


//             <div className='w-full bg-gray-300 mb-4 flex p-6 justify-center items-center gap-x-16 my-4'>
//                 <div className='flex flex-col'>
//                     <span className='text-3xl font-bold'>Cant find your institute?</span>
//                     <span>Submit a review for a institute for not listing here</span>
//                 </div>
//                 <a href='#'>
//                     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Institute</button>
//                 </a>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default AddReview