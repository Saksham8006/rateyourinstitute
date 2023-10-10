import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      {/* Testimonials with Stats */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
          <div className="lg:col-span-5 lg:col-start-1">
            {/* Title */}
            <div className="mb-8">
              <h2 className="mb-2  text-left text-3xl  font-bold lg:text-4xl text-blue-600">
                It's All About the Seamless Experience
              </h2>
              <p className="text-gray-800 text-left">
                RateYourInstitute is the go-to platform for students seeking their ideal coaching institution. With our extensive database and reliable information, we have guided numerous students in finding the perfect institute for their educational journey. Our commitment to empowering students has garnered trust and belief in our services. Join us in revolutionizing the way students explore and select their educational path, as we continue to assist more students in their pursuit of excellence. Experience the difference at RateYourInstitute, where student's success is our priority.</p>        </div>

          </div>
          {/* End Col */}
          <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
            <div className="space-y-6 sm:space-y-8">
              {/* List */}
              <ul className="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden">
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">

                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn()}>
                      {counterOn && <CountUp start={0} end={700} duration={2} delay={0}>

                      </CountUp>} +
                    </ScrollTrigger>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 ">
                    Total Reviews
                  </p>
                </li>
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z"
                        fill="currentColor"
                      />
                    </svg>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn()}>
                      {counterOn && <CountUp start={0} end={130} duration={2} delay={0}>

                      </CountUp>}+
                    </ScrollTrigger>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 ">
                    Total institutes reviewed on our site
                  </p>
                </li>
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z"
                        fill="currentColor"
                      />
                    </svg>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn()}>

                      {counterOn && <CountUp start={0} end={320} duration={2} delay={0}>

                      </CountUp>} +
                    </ScrollTrigger>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 ">
                    Total visitors
                  </p>
                </li>
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn()}>

                      {counterOn && <CountUp start={0} end={400} duration={2} delay={0}>

                      </CountUp>} +
                    </ScrollTrigger>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 ">
                    students chooses right institute with seamless experience
                  </p>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Testimonials with Stats */}
    </>
  )
}

export default Stats