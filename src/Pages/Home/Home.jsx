import React from "react";
import Banner from "../../Components/Header/Banner";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps } = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <>
      <div className="px-2 md:px-4 lg:px-20"></div>
      <Banner></Banner>

      <div className="bg-[#F1F5E8] p-[1px]">
        <h3 className="text-center text-5xl font-bold mt-2 md:mt-5 lg:mt-15">
          Trending Apps
        </h3>
        <p className="text-center text-[#627382] mt-2 mb-2 md:mb-5 lg:mb-12">
          Explore All Trending Apps on the Market developed by us
        </p>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        }
        <p className=" text-center my-10">
          <span className="btn btn-primary"><Link to="/allapp">Show All</Link></span>
        </p>
      </div>
    </>
  );
};

export default Home;
