const Demo = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:mt-40 lg:flex-row pb-32 md:px-16">
      <img src="/img/keyboard.jpeg" alt="" className="w-3/4 lg:w-1/3" />
      <div className="mt-5 lg:flex lg:flex-col px-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Now, Set up and grow your company
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl lg:my-5 ">
          We offers many products that optimize your company, setup now and grow
          up your business
        </p>
        <button
          className="h-10 px-10 mt-4 font-semibold rounded-sm bg-[#050038] text-white sm:px-12 mx-auto md:mx-0 md:w-1/4"
          type="submit"
        >
          Demo
        </button>
      </div>
    </div>
  );
};

export default Demo;
