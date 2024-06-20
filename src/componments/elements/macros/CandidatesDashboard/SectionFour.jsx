import React from "react";
import Footer from "../../micros/Footer";
import Form from "../../micros/Form";

const SectionFive = () => {
  return (
    <>
      <div className="bg-white md:h-[647px] w-screen flex flex-col gap-12 md:mt-[100px] mt-16  ">
        <div className="h-230px flex flex-col md:gap-4  gap-[40px] justify-center items-center px-16">
          <h1 className="md:text-[58px] text-[33px] font-poppins font-bold">Register Now!</h1>
          <p className="font-poppins text-[16px]  text-center">
            We invite you to take the next step in your career by submitting
            your CV to our team of expert consultants. With our in-depth
            knowledge and experience in the nuclear sector, we are well-equipped
            to assist you in securing your next career opportunity! 
          <div>  Apply Today</div>
          </p>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default SectionFive;
