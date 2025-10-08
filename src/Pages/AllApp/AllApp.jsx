import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";

const AllApp = () => {
  const { apps, loading } = useApps();

  console.log("Apps data:", apps);
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  if (loading || !apps) {
    return <p className="text-center py-10 text-xl">Loading apps...</p>;
  }

  const searchedApps = term
    ? apps.filter((app) => app?.title?.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <div className=" bg-[#F1F5E8] p-[1px]">
      <h3 className="text-center text-5xl font-bold mt-2 md:mt-5 lg:mt-15">
        Our All Applications
      </h3>
      <p className="text-center text-[#627382] mt-2 mb-2 md:mb-5 lg:mb-12">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex max-w-11/12 mx-auto justify-between py-10">
        <h2>Apps Found ({searchedApps.length})</h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto mb-4 md:mb-6 lg:mb-8">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApp;
