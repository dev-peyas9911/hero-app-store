import React, { useState } from "react";
import { loadApplist, removeFromApplist } from "../../utilities/localStorage";
import toast from "react-hot-toast";
import { Download, Star } from "lucide-react";

const InstalledApps = () => {
  const [applist, setApplist] = useState(() => loadApplist());
  const [sortOrder, setSortOrder] = useState("none");

  if (!applist.length) return <p className="flex justify-center font-bold">No Data Available.  <span className="text-green-500 pl-1">Select an App and Install it!</span></p>;

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...applist].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...applist].sort((a, b) => b.size - a.size);
    } else {
      return applist;
    }
  })();

  const handleRemove = (id, title) => {
    // remove from localstorage
    removeFromApplist(id);
    // for ui instant update
    setApplist((prev) => prev.filter((p) => p.id !== id));
    toast.success(`${title} uninstalled successfully!`);
  };
  return (
    <div className=" bg-[#F1F5E8] p-[1px] min-h-full flex flex-col">
      <div>
        <div>
          <h3 className="text-center text-5xl font-bold mt-2 md:mt-5 lg:mt-15">
            Your Installed Apps
          </h3>
          <p className="text-center text-[#627382] mt-2 mb-2 md:mb-5 lg:mb-12">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="max-w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl">
              ({sortedItem.length}) Apps Found
            </h3>
            <label className="form-control w-full max-w-xs">
              <select
                className="select select-bordered font-bold"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by Size</option>
                <option value="size-asc">Low-&gt;High</option>
                <option value="size-desc">High-&gt;Low</option>
              </select>
            </label>
          </div>
          {/* Card starts */}
          <div>
            {sortedItem.map((p) => (
              <div key={p.id} className="bg-white my-10 p-5">
                <div className="flex flex-col md:flex-row justify-between items-center p-[1px]">
                  <div className="flex items-center gap-3">
                    <div className="w-[80px] h-[80px]">
                      <img
                        className="w-full h-full object-cover"
                        src={p.image}
                        alt=""
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold">{p.title}</h4>
                      <div className="flex space-x-3">
                        <p className="flex gap-1.5 text-[#00D390]">
                          <div><Download></Download></div>
                          <div>{p.downloads}</div>
                        </p>
                        <p className="flex gap-1.5 text-[#FF8811]">
                          <div>
                            <Star></Star>
                          </div>
                          <div>{p.ratingAvg}</div>
                        </p>
                        <p className="text-[#627382]">{p.size}MB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemove(p.id, p.title)}
                      className="btn btn-success"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Card ends */}
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
