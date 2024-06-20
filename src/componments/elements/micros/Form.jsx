import React from "react";
import Vectorname from "../../../assets/icons/Vectorname.svg";
import Vectormessage from "../../../assets/icons/Vectormessage.svg";
import Vectorcall from "../../../assets/icons/Vectorcall.svg";
import Vectorsubject from "../../../assets/icons/Vectorsubject.svg";
import Vectorpen from "../../../assets/icons/Vectorpen.svg";

const Form = () => {
  return (
    <div className="w-full flex flex-col lg:gap-[35px] gap-[20px] lg:px-16 px-7">

      <div className="flex lg:flex-row flex-col lg:gap-[73px] gap-[20px]">
        <div className="relative lg:w-1/2 w-full px-[6px]">
          <input
            type="text"
            placeholder="Your name"
            className="font-poppins w-full h-[43px] bg-[#F4F6FA] border-[2px] border-[#F4F6FA]   py-4   rounded-lg pl-11"
            style={{
              background: `url(${Vectorname}) no-repeat 10px  center, #F4F6FA `,
              backgroundSize: "25px 25px",
            }}
          />
        </div>
        <div className="relative lg:w-1/2 w-full">
          <input
            type="text"
            placeholder="Your E-mail"
            className="font-poppins w-full h-[43px] bg-[#F4F6FA] border-[2px] border-[#F4F6FA] rounded-lg pl-11"
            style={{
              background: `url(${Vectormessage}) no-repeat 8px center, #F4F6FA`,
              backgroundSize: "25px 25px",
            }}
          />
        </div>
      </div>
      
      <div className="flex lg:flex-row flex-col   lg:gap-[73px] gap-[20px]">
        <div className="relative lg:w-1/2 w-full">
          <input
            type="text"
            placeholder="Enter your number"
            className="font-poppins w-full h-[43px]  border-[2px] border-[#F4F6FA] rounded-lg pl-12"
            style={{
              background: `url(${Vectorcall}) no-repeat 8px center, #F4F6FA`,
              backgroundSize: "25px 25px",
            }}
          />
        </div>
        <div className="relative lg:w-1/2 w-full">
          <input
            type="text"
            placeholder="Subject"
            className="font-poppins w-full h-[43px] bg-[#F4F6FA] border-[2px] border-[#F4F6FA] rounded-lg pl-11"
            style={{
              background: `url(${Vectorsubject}) no-repeat 8px center, #F4F6FA`,
              backgroundSize: "25px 25px",
            }}
          />
        </div>
      </div>

      <div className="mt-[-10px]">
        <img
          src={Vectorpen}
          alt="Vector Icon"
          className="relative top-[43px] left-3 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
        />
        <textarea
          className="w-full h-[130px] pl-10 font-poppins bg-[#F4F6FA] border-[2px] border-[#F4F6FA] rounded-lg py-2"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div className="flex justify-center items-center ">
        <button className="text-poppins text-white text-[14px]  bg-[#8A3DEF] lg:w-[155px] w-[127px] h-[42px] rounded-l-full rounded-r-full ">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Form;
