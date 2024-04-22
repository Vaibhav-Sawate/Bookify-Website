import React, { useEffect, useState } from "react";
import "./SeriesList.css"; // Import your CSS file

const SeriesList = ({
  uniqueSeries,
  selectedSeries,
  setSelectedSeries,
  allAudiobooks,
}) => {
  const initialSeries = uniqueSeries[0];

  useEffect(() => {
    // Set the initial series if no series is selected yet
    if (!selectedSeries && allAudiobooks && allAudiobooks.length > 0) {
      setSelectedSeries(initialSeries);
    }
  }, [allAudiobooks, setSelectedSeries, selectedSeries, initialSeries]);

  return (
    <div className="w-full series-list-container">
      {uniqueSeries.map((series) => (
        <div
          key={series}
          className={`series-item ${
            selectedSeries === series ? "selected" : ""
          }`}
          onClick={() => setSelectedSeries(series)}
        >
          <div className="series-details">
            <img
              src={
                allAudiobooks.find((audiobook) => audiobook.series === series)
                  ?.imageURL
              }
              alt=""
              className="series-image"
            />

            <p className="series-name text-base md:text-lg">{series}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
