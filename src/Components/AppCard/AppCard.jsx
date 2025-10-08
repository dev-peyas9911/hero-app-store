import { Download, Star } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  const { title, companyName, image, ratingAvg, downloads } = app;
  return (
    <div className="w-[320px] bg-white shadow-sm rounded-xl p-4 space-y-2 hover:scale-105 transition ease-in">
      <div className="w-[50]">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <h2 className=" font-bold">
        {title}: By {companyName}
      </h2>
      <div className="flex justify-between">
        <div className="flex bg-[#F1F5E8] text-[#00D390]  px-2.5 py-2 rounded-xl font-bold">
          <div className="mr-1.5">
            <Download></Download>
          </div>
          <div>{downloads}</div>
        </div>
        <div className="flex bg-[#FFF0E1] text-[#FF8811]  px-2.5 py-2 rounded-xl font-bold">
          <div className="mr-1.5">
            <Star></Star>
          </div>
          <div>{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
