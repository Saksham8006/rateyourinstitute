import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import baseUrl from '../config';
import { Link } from '@mui/material';
import loadingSvg from '../assets/loading.svg'

const Reviews = () => {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    fetch(`${baseUrl}/api/reviews/resolved`)
      .then(response => response.json())
      .then(data => {
        const resolvedReviews = data.reviews.filter(review => review.status === "resolved");
        setReviews(resolvedReviews);
        setIsLoading(false)
      });
  }, []);

  function handleView(review) {
    setSelectedReview(review);
    setShowModal(true);
  }

  function handleCloseModal() {
    setSelectedReview(null);
    setShowModal(false);
  }

  // const totalRating = Number(educationRatings) + Number(infrastructureRatings) + Number(locationRatings) + Number(facultyRatings);
  //   const averageRating = totalRating / 4;

  return (
    <>
      {selectedReview && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full"
        >
          <div className="absolute z-10 w-full h-full bg-gray-900 opacity-50"></div>
          <div className="relative z-20 bg-white rounded-lg shadow-lg w-96">
            <div className="p-6">
              <p className='flex my-[10px]'>Date : <span className='ml-[10px] tracking-[0.035em]'> {new Date(selectedReview.createdOn).toLocaleDateString()}</span></p>

              <h3 className="text-lg font-semibold mb-2 bg-blue-400 px-2 text-white">
                {selectedReview.instiName}
              </h3>
              <h3 className="text-lg font-semibold mb-2 bg-blue-400 px-2 text-white">
                {selectedReview.otherEntranceExamValue}
              </h3>
              <p className="text-gray-700 mb-4">{selectedReview.paragraph}</p>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 text-white mr-0 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[85rem] min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <h1 className="flex justify-center text-2xl font-semibold text-blue-600 mt-[80px]">
          All Reviews

        </h1>
        {!isLoading ?


          <div className="grid lg:grid-cols-2  lg:gap-y-16 gap-10 mt-[100px]">
            {reviews.map(review => (
              <div
                key={review._id}
                className="group rounded-xl overflow-hidden px-[9px] py-[12px] bg-gray-50 shadow-md"
              >
                <div className="sm:flex ">
                  <div className="flex-shrink-0 flex rounded-xl  w-full tracking-tighter sm:w-56 h-auto">
                    <div className='flex gap-x-2'>
                      <div className='flex flex-col gap-y-[2px]'>
                        <h3>
                          <span className='ml-[6px] text-[13px]'>Education</span> : <span className='ml-[6px] text-[13px]'>{review.educationRatings} / 5</span>
                        </h3>
                        <h3>
                          <span className='ml-[6px] text-[13px]'> Faculty</span> : <span className='ml-[9px] text-[13px]'>{review.facultyRatings} / 5 </span>
                        </h3>
                        <h3>
                          <span className='ml-[6px] text-[13px]'> Infrastructure</span> : <span className='ml-[7px] text-[13px]'>{review.infrastructureRatings} / 5 </span>
                        </h3>
                        <h3>
                          <span className='ml-[6px] text-[13px]'> Location</span> :  <span className='ml-[9px] text-[13px]'>{review.locationRatings} / 5</span>
                        </h3>

                        <h3 className=' pt-[15px]'>
                          <span className='ml-[6px] text-[13px] font-semibold'> Average Rating</span> :  <span className='ml-[6px] text-[13px] font-semibold'>{(Number(review.educationRatings) + Number(review.infrastructureRatings) + Number(review.locationRatings) + Number(review.facultyRatings)) / 4} / 5</span>
                        </h3>

                        <p className='flex ml-[6px] text-[13px] font-semibold'>Date : <span className='ml-[10px] tracking-[0.035em] text-[13px]'> {new Date(review.createdOn).toLocaleDateString()}</span></p>
                        <p className='flex ml-[6px] text-[13px] font-semibold'>
                          Your Random Id : <span className='ml-[10px] tracking-[0.035em] text-[13px]'>{review._id.slice(-4)}</span>
                        </p>
                      </div>

                      <div className='flex flex-col gap-y-[6px]'>

                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", color: "goldenrod" }}>

                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", color: "goldenrod" }}>

                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", color: "goldenrod" }}>

                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", color: "goldenrod" }}>

                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>

                      </div>

                    </div>
                  </div>
                  <div className="grow mt-4  sm:mt-0 sm:ml-6 px-4 sm:px-0">
                    <h3 className="text-[15px] font-bold text-slate-800">
                      {review.otherEntranceExamValue || review.course}
                   
                    </h3>
                    <h3 className="text-[15px] font-bold text-slate-800">
                      {review.instiName}, {review.instiLocation}
                    </h3>
                    <p className="mt-1 text-[13px] text-slate-600">
                      {review.paragraph.substr(0, 100) + '...'}
                    </p>
                    <button
                      onClick={() => handleView(review)}
                      className="mt-4 text-[13px] inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                    >
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          :
          // <p className="flex justify-center text-xl font-semibold text-blue-600 mt-[80px]">
          //   No reviews found! Be the first to review an institute! <Link className='text-blue-500 font-semibold' href="/rev">Click here</Link> to review.
          // </p>
          <>

            <p className='text-center mt-12 text-xl text-slate-800'>Loading reviews...</p>
            <img className=' block mx-auto w-32' src={loadingSvg} alt="Loading..." />
          </>
        }

      </div>
    </>
  );
};

export default Reviews;
