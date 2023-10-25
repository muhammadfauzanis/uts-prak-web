const Hero = () => {
  return (
    <div className="mt-24">
      <div className=" lg:flex lg:flex-row-reverse lg:items-center">
        <img src="/img/cover.png" alt="" className="h-1/2 lg:h-1/2 lg:w-3/4" />
        <div className="mt-5 px-7">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-8">
            Bring technology is in your hands
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl py-5">
            This technology will bring new things and experiences to your
            business and company
          </p>
          <div className="flex flex-col w-1/3 sm:w-full sm:flex-row mx-auto sm:mx-0 py-5 gap-4">
            <button
              className="h-10 px-6 font-semibold rounded-sm bg-[#050038] text-white sm:px-12"
              type="submit"
            >
              Buy
            </button>
            <button
              className="font-semibold bg-transparent border-b-2 border-gray-400"
              type="text"
            >
              See All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
