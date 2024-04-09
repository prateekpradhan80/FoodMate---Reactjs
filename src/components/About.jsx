import React from "react";

const About = () => {
  return (
    <div className="flex ">
      <div className="flex ml-4 flex-col justify-center">
        <h1 className="text-5xl tracking-wide leading-relaxed font-serif animate-bounce">
        “One cannot think well, love well, sleep well, if one has not dined
          well.”
        </h1>
      </div>

      <div className=" flex justify-end w-full p-6 flex-wrap">
        <div className=" w-[50vw] h-[90vh]  ">
          <div className="flex flex-wrap  bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block   absolute inset-0"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
            />
            <div className="text-center relative top-24 w-full">
              <h2 className="text-2xl text-gray-500 font-medium title-font  ">
                Mouth Watering Dishes
              </h2>

              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block   absolute inset-0"
                  src="https://w0.peakpx.com/wallpaper/390/240/HD-wallpaper-cheesy-burger-cheese-delicious-food-hotel-restaurant.jpg"
                />
                <div className="text-center relative top-20 w-full  ">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    Yummy Burgers
                  </h2>
                  <p className="leading-relaxed"></p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block   absolute inset-0"
                  src="https://hips.hearstapps.com/hmg-prod/images/hattieb1-1562135080.jpg"
                />
                <div className="text-center relative top-20 w-full">
                  <h2 className="text-2xl text-white font-medium font-serif  title-font mb-2">
                    Fast Foods
                  </h2>
                  <p className="leading-relaxed"></p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
