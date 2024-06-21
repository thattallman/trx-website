import React from "react";
import trxStar from "../../../../assets/icons/trxStar.png";

const SectionOne = () => {
  return (
    <>
      <div className=" md:flex w-[762px] absolute  h-[762px] top-[-354px] left-[-356px] bg-custom-colour  ">
  
      </div>

      <div className="bg-[#341845]  md:h-[800px] h-screen  w-screen    md:flex items-center justify-between px-4  py-20 md:px-0 ">

        <div className="w-full md:w-1/2 md:h-screen h-1/2 flex justify-center items-center px-5">
          <div className=" w-full  xl:w-[647px]">
            <div className="md:flex    ">
              <h1 className="  text-[48px]  text-center md:text-start  md:text-[72px] text-white font-poppins font-bold">
                TRX
              </h1>
              <span className=" text-[48px] hidden md:block  md:text-[72px] text-white font-poppins ml-3">
                International
              </span>
              <h1 className=" md:hidden text-[48px]  text-center md:text-start  md:text-[72px] text-white font-poppins ">
              International
              </h1>
            </div>
            <p className="   text-center md:text-start font-poppins text-[16px] text-white">
              TRX is a leading nuclear recruitment company with a core focus on
              helping shape and implement a zero carbon future. Our in-depth
              proficiencies, knowledge of the industry alongside our
              demonstrated experience provides us with a strategic edge to offer
              highly customised services.
            </p>
          </div>
        </div>

        <div className=" w-full  md:w-1/2 md:h-screen flex justify-center items-center  ">
          {/* <img src={trxStar} className="md:w-[791px] md:h-[781px] w-[360px]   " /> */}
          <img src={trxStar} className="md:w-auto md:h-auto w-[360px]    " />
        </div>

      </div>
    </>
  );
};

export default SectionOne;
