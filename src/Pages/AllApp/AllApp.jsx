import React from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";

const AllApp = () => {
  const { apps } = useApps();
  return (
    <div className=" bg-[#F1F5E8] p-[1px]">
      <h3 className="text-center text-5xl font-bold mt-2 md:mt-5 lg:mt-15">
        Our All Applications
      </h3>
      <p className="text-center text-[#627382] mt-2 mb-2 md:mb-5 lg:mb-12">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto mb-4 md:mb-6 lg:mb-8">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApp;
