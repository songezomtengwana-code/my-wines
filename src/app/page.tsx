"use client";
import React, { useState, useEffect } from "react";

function Home() {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wines.map((wine) => (
              <div key={wine.id} className="bg-white shadow-md rounded-lg p-4">
                {wine.name}
              </div>
            ))}
          </div>
      </div>
    );
  }
}

export default Home;
