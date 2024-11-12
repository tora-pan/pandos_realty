const Hero = () => {
  return (
    <div>
      <div className="pt-0 mx-auto relative">
        <img
          src="/images/house_1.jpg"
          alt="Luxury Home"
          className="h-screen w-screen bg-cover bg-no-repeat"
        />

        {/* <!-- Grid overlay --> */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent text-white grid grid-cols-4 grid-rows-[1fr_0.5fr] gap-0 p-4">
          {/* <!-- Title row spanning all columns --> */}
          {/* <div className="col-span-4 flex items-center justify-start text-[99px] leading-none font-medium font-roboto">
            Midcentury <br /> Masterpiece
          </div> */}

          {/* <!-- Property details on the left --> */}
          {/* <div className="col-span-2 flex space-x-4">
            <div className="grid-cols-5 row-start-2">Beds</div>
            <div className="grid-cols-5 row-start-2">4</div>
            <div className="col-span-1 row-start-2">Baths: 5</div>
            <div className="detail_3">Living Area: 4000 sq ft</div>
            <div className="detail_4">Lot Size: 9,500 sq ft</div>
          </div> */}
          {/* <div className="grid grid-cols-6 grid-rows-4 gap-0"> */}
            <div className="col-span-6 row-span-2 items-center justify-start text-[99px] leading-none font-medium font-roboto">Div 1</div>
            <div className="col-span-1 row-start-4 bg-red-500">Div 2</div>
            <div className="col-span-1 col-start-2 row-start-4 bg-green-500">
              Div 3
            </div>
            <div className="col-span-1 col-start-3 row-start-4 bg-yellow-500">
              Div 4
            </div>
            <div className="col-span-1 col-start-4 row-start-4 bg-purple-500">
              Div 5
            </div>
            <div className="col-span-1 col-start-6 row-start-4 bg-pink-500">
              Div 6
            </div>
          {/* </div> */}

          {/* <!-- Price on the right --> */}
          {/* <div className="col-span-2 flex justify-end items-center font-bold text-lg">
            Offered At: $2,200,000
          </div> */}
        </div>
      </div>

      {/* <div className="absolute bottom-0 w-full p-8 space-y-8 bg-white bg-opacity-20">
          <div className="text-center">
            <span className="text-3xl font-semibold text-gray-900">
              $2,200,000
            </span>
            <p className="text-gray-600">Offered at</p>
          </div>

          <div className="flex justify-between text-gray-800 text-lg">
            <div>
              <span className="block font-medium">Beds</span>
              <span className="font-bold">4</span>
            </div>
            <div>
              <span className="block font-medium">Baths</span>
              <span className="font-bold">5</span>
            </div>
            <div>
              <span className="block font-medium">Living Area</span>
              <span className="font-bold">4,000 sq ft</span>
            </div>
            <div>
              <span className="block font-medium">Lot Size</span>
              <span className="font-bold">9,500 sq ft</span>
            </div>
          </div>
        </div> */}

      <div className="bg-gray-200 py-8">
        <h2 className="text-center text-2xl font-bold mb-4">Video Tour</h2>
        <div className="max-w-3xl mx-auto">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/sample_video_id"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">Schedule a Viewing</h3>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
