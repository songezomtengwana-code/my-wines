"use client";
import React, { useState, useEffect } from "react";
import { GetWineData } from "../model/get-wine.model";

function Dashboard() {
  const [wines, setWines] = useState<GetWineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false)

  const getData = async () => {
    await fetch("/api/get-wines")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.rows);
        setWines(data.data.rows);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="container mx-auto p-4">
        {/* Dashboard header, filters, etc. */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wines.map((wine) => (
              <div key={wine.id} className="bg-white shadow-md rounded-lg p-4">
                {wine.name}
              </div>
            ))}
          </div> */}
        <h1 className="text-2xl font-bold mb-6">Welcome Back, $username</h1>
        <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add New Wine
        </button>
        <table className="table-auto w-full mt-6 rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Consumed</th>
              <th className="px-4 py-2 text-left">Varietal</th>
              <th className="px-4 py-2 text-left">Date Consumed</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wines.map((wine) => (
              <tr key={wine.id} className="hover:bg-gray-200">
                <td className="px-4 py-2">{wine.id}</td>
                <td className="px-4 py-2">{wine.name}</td>
                <td className="px-4 py-2">{wine.year}</td>
                <td className="px-4 py-2">{wine.type}</td>
                <td className="px-4 py-2">{wine.rating}</td>
                {wine.consumed === false ? (
                  <td className="px-4 py-2">No</td>
                ) : (
                  <td className="px-4 py-2">Yes</td>
                )}
                <td className="px-4 py-2">{wine.varietal}</td>
                <td className="px-4 py-2">{wine.date_consumed}</td>
                <td className="px-4 py-2">
                  <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="py-5 mt-8 text-center">Designed  with 💚 by <a className="text-emerald" href="https://dev-songezomtengwana.vercel.app">Songezo Mtengwana</a></h3>
      </div>
    );
  }
}

export default Dashboard;
