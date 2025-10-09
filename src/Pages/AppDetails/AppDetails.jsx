import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import { Download, Star, ThumbsUp } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { updateAppList } from "../../utilities/localStorage";


const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === Number(id));
  if (loading) return <LoadingSpinner></LoadingSpinner>;

  const {
    title,
    image,
    companyName,
    size,
    description,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  return (
    <>
      <div className="bg-[#F1F5E8]">
        {/* Install Menu */}
        <div className=" max-w-11/12 mx-auto flex flex-col md:flex-row gap-5 items-center py-5 md:py-10 lg:py-15">
          <div className="w-[350px] h-[350px]">
            <img className="w-full h-full" src={image} alt="" />
          </div>
          <div className="flex-1 space-y-5">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-[#627382]">
              Developed by:{" "}
              <span className="text-blue-500 font-bold">{companyName}</span>
            </p>
            <div className="flex gap-10">
              <div className="">
                <span className="text-green-500">
                  <Download></Download>
                </span>
                <p className="text-green-500 my-3">Downloads</p>
                <span className="font-bold text-xl">{downloads}</span>
              </div>
              <div>
                <span className="text-[#FF8811]">
                  <Star></Star>
                </span>
                <p className="text-[#FF8811] my-3">Avarage Ratings</p>
                <span className="font-bold text-xl">{ratingAvg}</span>
              </div>
              <div>
                <span className="text-blue-500">
                  <ThumbsUp></ThumbsUp>
                </span>
                <p className="text-blue-500 my-3">Total Reviews</p>
                <span className="font-bold text-xl">{reviews}</span>
              </div>
            </div>
            <button onClick={()=> updateAppList(app)} className="btn btn-success text-white">
              Install Now (${size}MB)
            </button>
          </div>
        </div>
        <hr />
        {/* Recharts */}
        <div className="max-w-11/12 mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ratings Breakdown
          </h2>

          {ratings && ratings.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ratings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">
              No ratings data available.
            </p>
          )}
        </div>
        <hr />
        {/* description */}
        <div className="max-w-11/12 mx-auto py-20">
          <h2 className="text-4xl font-bold mb-3">Description:</h2>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
