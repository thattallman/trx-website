import React from "react";
import trc_icon_2 from "../../../assets/icons/trc_icon_2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full lg:h-[155px] flex flex-col lg:gap-[30px]  gap-[20px] mb-28 lg:px-16 px-6 mt-10 lg:mt-0 ">
      <div className="flex gap-[34px] justify-start">
      <Link to={'/'}>  <h1 className="font-poppins  text-[14px] lg:text-[16px]  ">Home</h1></Link>
       <Link to={'/client'}> <h1 className="font-poppins text-[14px] lg:text-[16px]  ">Clients</h1></Link>
    <Link to={'/candidates'}>    <h1 className="font-poppins  text-[14px] lg:text-[16px] ">
          Candidates
        </h1></Link>
      </div>
      <div className="border-[0.1px] border-t  border-black " />

      <div className="lg:w-1/2 flex lg:flex-row flex-col justify-between gap-4  ">
        <h1 className="font-poppins  text-[14px] lg:text-[16px]  text-start ">
          © 2024 - TRX International
        </h1>
        <img
          src={trc_icon_2}
          className=" hidden lg:flex  lg:mr-[-35px] w-[61px]  h-[71px]  "
          alt="icon"
        />
        <div className="lg:hidden w-full flex justify-center items-center  ">
          <img
            src={trc_icon_2}
            className="    lg:mr-[-35px] w-[61px]  h-[71px]  "
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
