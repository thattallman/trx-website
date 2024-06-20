import React from "react";
import sectors1 from "../../../../assets/icons/sectors1.svg";
import sectors2 from "../../../../assets/icons/sectors2.svg";
import sectors3 from "../../../../assets/icons/sectors3.svg";
import sectors4 from "../../../../assets/icons/secrtors4.svg";
import sectors5 from "../../../../assets/icons/sectors5.svg";

const SectionTwo = () => {
  const array = [
    {
      img: sectors1,
      name: "Large New Build",
    },
    {
      img: sectors2,
      name: "SMR/ MMR",
    },
    {
      img: sectors3,
      name: "Fusion",
    },
    {
      img: sectors4,
      name: "Decommissioning",
    },
    {
      img: sectors5,
      name: "Radioactive Waste Management",
    },
  ];
  return (
    <div className="bg-white  mt-12 xl:mt-0 h-[1391px] xl:h-[600px] w-screen flex flex-col  xl:items-center xl:justify-center gap-7 px-[60px]">
      <div>
        <h1 className="font-poppins text-[33px] xl:text-[47px] font-bold  text-center xl:leading-[70px]  ">
          Sectors We Support
        </h1>
      </div>

      <div className="xl:grid xl:grid-cols-5 xl:gap-[40px] w-full  h-[241px]  ">
        {array.map((data, index) => {
          return (
            <div
              key={index}
              className="rounded-[19px] h-[241px] w-full shadow-2xl flex flex-col gap-[35px] justify-center items-center px-3  xl:my-0  my-8"
            >
              <img src={data.img} alt="img" className="h-[129px] w-[129px]"/>
              <h1 className="font-poppins font-bold text-center text-[19px]  ">
                {data.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionTwo;
