import React from 'react'

const Blogs = () => {
  return (
    <>
      <div className="max-w-[85rem] min-h-screen px-4 py-[20px] sm:px-6 lg:px-8 lg:py-[6] mx-auto">
        <div className="grid pt-[85px] lg:grid-cols-2 gap-x-6 gap-y-4">
          <a className="group relative block" href="/blog1">
            <div className="flex-shrink-0 relative  rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img className="w-full h-full absolute top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" alt="Image Description" />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  {/* <div className="flex-shrink-0">
                    <img className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                  </div> */}
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-white">
                      RateYourInstitute
                    </h4>
                    <p className="text-xs text-white/[.8]">
                      Jan 09, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                RateYourInstitute: Empowering Students to Review and Rate their Educational Institutions                </h3>
                <p className="mt-2 text-white/[.8]">
                Transparent Feedback for IIT, NEET, and JEE Institutes: Anonymously Share Your Institute Experiences and Star Ratings                </p>
              </div>
            </div>
          </a>

          <a className="group relative block" href="/blog2">
            <div className="flex-shrink-0 relative  rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img className="w-full h-full absolute top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  {/* <div className="flex-shrink-0">
                    <img className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                  </div> */}
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-white">
                      RateYourInstitute
                    </h4>
                    <p className="text-xs text-white/[.8]">
                      May 30, 2023
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                Decoding Education: Unveiling the Power of Anonymous Reviews on RateYourInstitute
                </h3>
                <p className="mt-2 text-white/[.8]">
                Your Path to Informed Choices and Academic Success Starts Here
                </p>
              </div>
            </div>
          </a>
        </div>
       
      </div>
    </>
  )
}

export default Blogs