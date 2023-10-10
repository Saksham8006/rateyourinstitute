import React, { useEffect } from 'react'
import './Feature.css'
// import { Lordicon } from 'Lordicon';
import Search from './search.gif'
import Star from './star.gif'
import Reviews from './reviews.gif'
import Update from './update.gif'
import Institute from './institute.gif'
import ReviewSystem from './reviewSystem.gif'



const Feature = () => {

    // useEffect(() => {
    //     const svgElement = document.querySelector('.rotate-icon');
    //     svgElement.classList.add('animate-spin-once');
    //     return () => {
    //         svgElement.classList.remove('animate-spin-once');
    //     };
    // }, []);

    return (
        <div className='min-h-screen py-[20px] '>
            <section className="bg-white ">
                <div className="pt-[20px] pb-[20px] px-4 mx-auto max-w-screen-xl sm:py-16  lg:px-14">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-700 ">Discover the Power of Student Reviews</h2>
                        <p className="text-gray-500 sm:text-xl "> why choose our coaching institute review platform?</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                            <img class="block h-[70px] w-[70px] mx-auto object-contain" src={ReviewSystem} alt="Einfach und Unverbindlich"></img>
                           </div>
                            <h3 className="mb-2 text-xl font-bold ">Unbiased Student Reviews</h3>
                            <p className="text-gray-500 ">Get authentic insights from students who have firsthand experience at their coaching institutes. Our platform ensures anonymity, allowing students to express their honest opinions about the quality of education, faculty, facilities, and more.</p>
                        </div>
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                            <img class="block h-[70px] w-[70px] mx-auto object-contain" src={Institute} alt="Einfach und Unverbindlich"></img>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Institute Comparison</h3>
                            <p className="text-gray-500 ">Compare different institutes based on student reviews and ratings. Make informed decisions by exploring various aspects such as academic programs, extracurricular activities, campus life, and student support services.</p>
                        </div>
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                            <img class="block h-[70px] w-[70px] mx-auto object-contain" src={Star} alt="Einfach und Unverbindlich"></img>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Rating System</h3>
                            <p className="text-gray-500 ">Our platform provides a comprehensive rating system that allows students to evaluate their institutes across multiple categories. These ratings help future students gauge the overall quality and reputation of the institutes.</p>
                        </div>
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                            <img class="block h-[70px] w-[80px] mx-auto object-contain" src={Reviews} alt="Einfach und Unverbindlich"></img>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Helpful Comments and Feedback</h3>
                            <p className="text-gray-500 ">Engage in meaningful conversations with other students through our comment section. Share your experiences, ask questions, and receive valuable feedback from fellow students to make the most informed decisions.</p>
                        </div>
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                                
                                <img class="block h-[70px] w-[70px] mx-auto object-contain" src={Search} alt="Einfach und Unverbindlich"></img>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Filter and Search Options</h3>
                            <p className="text-gray-500 ">Effortlessly find institutes that match your preferences using our advanced filtering and search options. Narrow down your choices based on location, program of study, student satisfaction, and more.</p>
                        </div>
                        <div className='shadow-md bg-gray-50 p-[10px]'>
                            <div className="flex justify-center text-white items-center mb-4 w-7 h-7 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                            <img class="block h-[80px] w-[90px] mx-auto object-contain" src={Update} alt="Einfach und Unverbindlich"></img>


                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Stay Updated</h3>
                            <p className="text-gray-500 ">Stay up-to-date with the latest news and updates about your preferred institutes. Our platform keeps you informed about admission deadlines, new programs, faculty changes, and other relevant information.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature