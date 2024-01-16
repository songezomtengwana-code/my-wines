"use client";
import React, { useState } from "react";
import { WineData } from "../model/wine.model";
// import { WineData } from "../model/wineData.model";

export default function Create() {
  const [isConsumed, setIsConsumed] = useState(false);
  const [consumptionDate, setConsumptionDate] = useState("N/A");
  const [wineData, setWineData] = useState<WineData>({
    name: "",
    year: 0,
    type: "Red",
    varietal: "",
    rating: 0,
    consumed: isConsumed,
    date_consumed: consumptionDate,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setWineData({ ...wineData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setConsumptionDate(e.target.value);
    if (consumptionDate === "N/A") setConsumptionDate(e.target.value);
    console.log(consumptionDate);
  };

  /**
   *
   * @param e
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setWineData({
        ...wineData,
        consumed: isConsumed,
        date_consumed: consumptionDate,
      });

      await fetch("/api/add-wine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wineData),
      }).then(() => {
        console.log("wine hase been added successfully");
      });
    } catch (error) {
      console.error({
        error: error,
        wineData: wineData,
      });
    }
  };

  return (
    <div className="container mx-auto p-4 justify-center">
      <div className="container p-4">
        <h1 className="text-2xl font-bold mb-4">Add a New Wine</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={wineData.name}
              onChange={handleChange}
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Year:
            </label>
            <input
              type="text"
              id="year"
              name="year"
              value={wineData.year}
              onChange={handleChange}
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Varietal:
            </label>
            <input
              type="text"
              id="varietal"
              name="varietal"
              value={wineData.varietal}
              onChange={handleChange}
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={wineData.rating}
              onChange={handleChange}
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Type:
            </label>
            <select
              id="type"
              name="type"
              value={wineData.type}
              onChange={handleChange}
              className="block w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rosé">Rosé</option>
              <option value="White Blend">White Blend</option>
              <option value="Red Blend">Red Blend</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Consumed:
            </label>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="consumed"
                name="consumed"
                checked={isConsumed}
                onChange={() => {
                  setIsConsumed(!isConsumed);
                  console.log(isConsumed);
                }}
                className="checked:bg-emerald-500"
              />
              {isConsumed ? (
                <input
                  type="date"
                  id="date_consumed"
                  name="date_consumed"
                  value={consumptionDate}
                  onChange={handleDateChange}
                  className="required:border-red-500 "
                />
              ) : (
                <p className="text-base">Wine has not been consumed</p>
              )}
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-white-500 w-full hover:bg-neutral-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-emerald-400 w-full hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Wine
            </button>
          </div>
        </form>

        <h1 className="text-2xl font-bold mb-4 mt-9">Wine Preview</h1>
        <table className="table-auto w-full mt-6 rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Consumed</th>
              <th className="px-4 py-2 text-left">Varietal</th>
              <th className="px-4 py-2 text-left">Date Consumed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2">{wineData.name}</td>
              <td className="px-4 py-2">{wineData.year}</td>
              <td className="px-4 py-2">{wineData.type}</td>
              <td className="px-4 py-2">{wineData.rating}</td>
              {isConsumed === false ? (
                <td className="px-4 py-2">No</td>
              ) : (
                <td className="px-4 py-2">Yes</td>
              )}
              <td className="px-4 py-2">{wineData.varietal}</td>
              {isConsumed ? (
                <td className="px-4 py-2">{consumptionDate}</td>
              ) : (
                <td>N/A</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
