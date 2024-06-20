import React from "react";
import GroupImage from "../../../../assets/icons/GroupImage.svg";

const SectionFour = () => {
  const nav = [
    {
      name: "Let Us Do the Work for You",
      description: `Securing the ideal career opportunity is often complex and
      daunting. That's why we recommend leveraging the expertise of
      our seasoned professionals, who will support you throughout the
      entire hiring process and greatly enhance your chances of
      landing your desired position within the industry.`,
    },
    {
      name: "Global Connection",
      description:
        "Our distinguished consulting services have a global reach, catering to clients across all continents of the world. No matter where you are, we can help you find your next career opportunity in the nuclear energy sector. Let us leverage our extensive network of global clients to ensure that your abilities are acknowledged and are utilised in the best way possible.",
    },
    {
      name: "Ongoing Support",
      description:
        "After identifying the most suitable position based on your requirements, our experts will stay in constant communication with you throughout the recruitment process.",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#2B1845] to-[#6B3BAB] xl:h-screen  w-screen flex xl:flex-row flex-col px-8 xl:px-0  py-12   xl:pb-0 pb-16 gap-4 xl:gap-0 ">
        <h1 className="  xl:hidden text-center  text-white   font-bold font-poppins  text-[33px]">
            Candidates
          </h1>
      <div className="xl:w-1/2 w-full  xl:h-full  flex justify-center items-center px-8 xl:px-0 mt-4 xl:mt-0 ">
        <img src={GroupImage} />
      </div>
      <div className="xl:w-1/2 w-full h-full flex justify-center items-center ">
        <div className="xl:w-[601px] xl:h-[582px] flex flex-col gap-8">
          <h1 className="text-white  hidden xl:flex  font-bold font-poppins  text-[33px]">
            Candidates
          </h1>
          <div className="flex flex-col gap-6">
            {nav.map((data, index) => {
                
              return (
                
                <div className="flex flex-col gap-4" key={index}>
                  <h1 className="text-white font-poppins text-[23px]  font-semibold">
                    {data.name}
                  </h1>
                  <p className="text-white  leading-[24px]    font-poppins  font-[350] text-start text-[16px] ">
                    {data.description}
                  </p>
                </div>
              );
            })}

     
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
