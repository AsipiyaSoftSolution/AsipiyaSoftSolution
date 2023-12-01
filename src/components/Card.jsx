import React from "react";

export const Card = ({ title, des, icon }) => {
  return (
    <div className=" flex flex-col gap-2 rounded-[20px] bg-[#F8F8F8] border-[#F8F8F8] p-[30px] items-start justify-start cursor-pointer border-2 hover:border-theme-color">
         <img src={icon} className=" md:w-[53px] w-[53px]" alt="" />
           
      <div className=" font-SatoshiBold text-[20px] leading-[30px] text-[#000000]">
        {title}
      </div>
      <div className=" font-SatoshiRegular text-[18px] leading-[30px] text-[#000000]">
        {des}
      </div>
    </div>
  );
};
