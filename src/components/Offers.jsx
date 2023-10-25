import { FaKeyboard, FaPaperPlane } from "react-icons/fa";

const Offers = () => {
  return (
    <div className="mt-16 sm:mt-20 md:mt-40 flex flex-col md:flex-row items-center mx-auto max-w-xs md:max-w-4xl md:gap-32 ">
      <div className="flex flex-col justify-center items-center">
        <FaKeyboard size={60} className="text-[#050038] " />
        <h5 className="mt-2 text-xl sm:text-2xl md:text-3xl ">
          Easy to implement
        </h5>
        <p className="mt-2 text-md sm:text-lg md:text-xl font-thin text-center">
          Easy to implement in your company with powerful platform
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaPaperPlane size={60} className="text-[#050038] mt-10 md:mt-0" />
        <h5 className="mt-2 text-xl sm:text-2xl md:text-3xl ">
          Optimize systems
        </h5>
        <p className="mt-2 text-md sm:text-lg md:text-xl font-thin text-center">
          More than 1000 company using this products
        </p>
      </div>
    </div>
  );
};

export default Offers;
