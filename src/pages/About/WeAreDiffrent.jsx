import React from 'react'
import aboutimg from '../../assets/about.png'
import about from '../../assets/about.gif'


const WeAreDifferent = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[87px] mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

          {/* End Col */}
            <div className="space-y-6 sm:space-y-8 ">
              {/* Title */}
              <div className="space-y-2 md:space-y-4 md:py-[45px] sm:pt-[20px]">
                <h2 className="text-left font-bold text-3xl lg:text-4xl text-blue-600 ">
                  About Us         
                    </h2>
                <p className="text-gray-600 text-left">
                  Welcome to our student review website! We provide a platform for students to share their honest feedback about their institutes anonymously. Our goal is to empower students and help them make informed decisions about their education. We understand the importance of honest reviews, which is why we prioritize the anonymity of our users.
                  <br />
                  <br />
                  With our platform, students can freely express their opinions and experiences while maintaining their privacy. Join our community today and discover valuable insights from fellow students that will guide you in choosing the right institute for your educational journey.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul role="list" className="text-left text-gray-100 space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-600">
                    Genuine student reviews from students studying from coaching institutes to prepare for entrance exams such as IIT, JEE, NEET, CLAT, GMAT, CAT etc.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-600">
                    Anonymous Feedback: Unbiased opinions. Real experiences. Transparent platform. Informed decisions.              </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-600">
                    Nationwide Reach: Diverse perspectives. Pan-India coverage. Valuable insights for aspiring students.   </span>         </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-600">
                    Empowering Futures: Helping student succeed in choosing their coaching institute wisely</span>
                </li>
              </ul>
              {/* End List */}
            </div>
         
          <div >
            <img
              className="rounded-xl"
              src={aboutimg}
              alt="Image Description"
            />
            {/* <img class="block  w-[7000px] mx-auto object-contain" src={about} alt="Einfach und Unverbindlich"></img> */}

          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  )
}

export default WeAreDifferent