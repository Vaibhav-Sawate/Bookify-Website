import React, { useEffect, useState } from "react";
import { getAllAudiobooks } from "../api";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import Filter from "./Filter";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
import SeriesList from "./SeriesList";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [
    {
      searchTerm,
      allAudiobooks,
      authorFilter,
      filterTerm,
      seriesFilter,
      languageFilter,
    },
    dispatch,
  ] = useStateValue();
  const [filteredAudiobooks, setFilteredAudiobooks] = useState(null);
  const [uniqueSeries, setUniqueSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  useEffect(() => {
    if (!allAudiobooks) {
      getAllAudiobooks().then((data) => {
        dispatch({
          type: actionType.SET_ALL_AUDIOBOOKS,
          allAudiobooks: data.data,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (allAudiobooks) {
      const seriesList = Array.from(
        new Set(allAudiobooks.map((data) => data.series))
      );

      setUniqueSeries(seriesList);
    }
  }, [allAudiobooks]);
  useEffect(() => {
    const filtered =
      selectedSeries !== null
        ? allAudiobooks?.filter((data) => data.series === selectedSeries)
        : allAudiobooks;
    setFilteredAudiobooks(filtered);
  }, [selectedSeries, allAudiobooks]);
  useEffect(() => {
    const filtered =
      selectedSeries !== null
        ? allAudiobooks?.filter((data) => data.series === selectedSeries)
        : allAudiobooks;
    setFilteredAudiobooks(filtered);
  }, [selectedSeries, allAudiobooks]);
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allAudiobooks.filter(
        (data) =>
          data.author.toLowerCase().includes(searchTerm) ||
          data.language.toLowerCase().includes(searchTerm) ||
          data.name.toLowerCase().includes(searchTerm) ||
          data.author.includes(authorFilter)
      );
      setFilteredAudiobooks(filtered);
    } else {
      setFilteredAudiobooks(null);
    }
  }, [searchTerm, allAudiobooks, authorFilter]);
  useEffect(() => {
    const filtered = allAudiobooks?.filter(
      (data) => data.author === authorFilter
    );
    if (filtered) {
      setFilteredAudiobooks(filtered);
    } else {
      setFilteredAudiobooks(null);
    }
  }, [authorFilter, allAudiobooks]);
  useEffect(() => {
    const filtered = allAudiobooks?.filter(
      (data) => data.genre.toLowerCase() === filterTerm
    );
    if (filtered) {
      setFilteredAudiobooks(filtered);
    } else {
      setFilteredAudiobooks(null);
    }
  }, [filterTerm, allAudiobooks]);
  useEffect(() => {
    const filtered = allAudiobooks?.filter(
      (data) => data.series === seriesFilter
    );
    if (filtered) {
      setFilteredAudiobooks(filtered);
    } else {
      setFilteredAudiobooks(null);
    }
  }, [seriesFilter, allAudiobooks]);
  useEffect(() => {
    const filtered = allAudiobooks?.filter(
      (data) => data.language === languageFilter
    );
    if (filtered) {
      setFilteredAudiobooks(filtered);
    } else {
      setFilteredAudiobooks(null);
    }
  }, [languageFilter, allAudiobooks]);
  useEffect(() => {
    if (selectedSeries) {
      const headerElement = document.getElementById("filteredSeriesHeader");
      const additionalScroll = headerElement.offsetTop + 0;
      window.scrollTo({
        top: additionalScroll,
        behavior: "smooth",
      });
    }
  }, [selectedSeries]);
  return (
    <div className="w-full h-auto  bg-primary">
      <div className="header">
        <Header />
        <SearchBar />
        <Filter setFilteredAudiobooks={setFilteredAudiobooks} />
      </div>
      {/* <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4">
          <h1 className="filtered-series-header"
            id="filteredSeriesHeader"
            // style={{
            //   fontSize: 20,
            //   border: "2px solid black",
            //   borderRadius: "8px",
            //   padding: "10px",
            //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            //   background: "black",
            //   color: "white",
            //   marginTop: "20px",
            //   marginBottom: "37px",
            //   width: "auto",
            // }}
          >
            Select Series:
          </h1>
          <div className="scroll-container">
            <SeriesList
              uniqueSeries={uniqueSeries}
              selectedSeries={selectedSeries}
              setSelectedSeries={setSelectedSeries}
              allAudiobooks={allAudiobooks}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
          <h1 className="filtered-series-header" id="filteredSeriesHeader"
            
            // style={{
            //   fontSize: 20,
            //   border: "2px solid black",
            //   borderRadius: "8px",
            //   padding: "10px",
            //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            //   background: "black",
            //   color: "white",
            //   marginTop: "20px",
            //   marginBottom: "20px",
            //   width: "auto",
            // }}
          >
            {selectedSeries ? ` ${selectedSeries}` : "Filtered Books"}
          </h1>
          <div className="scroll-container">
            <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
              <HomeAudiobookContainer
                musics={filteredAudiobooks ? filteredAudiobooks : allAudiobooks}
              />
            </div>
          </div>
        </div>
      </div> */}


<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/4 p-4">
    <h1 className="filtered-series-header" id="filteredSeriesHeader">
      Select Series:
    </h1>
    <div className="scroll-container">
      <SeriesList
        uniqueSeries={uniqueSeries}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
        allAudiobooks={allAudiobooks}
      />
    </div>
  </div>
  <div className="w-full md:w-3/4 p-4">
    <h1 className="filtered-series-header" id="filteredSeriesHeader">
      {selectedSeries ? ` ${selectedSeries}` : "Filtered Books"}
    </h1>
    <div className="scroll-container">
      <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
        <HomeAudiobookContainer
          musics={filteredAudiobooks ? filteredAudiobooks : allAudiobooks}
        />
      </div>
    </div>
  </div>
</div>










    </div>
  );
};
export const HomeAudiobookContainer = ({ musics }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [alertMsg, setAlertMsg] = useState("");
  const [{ user, isAudiobookPlaying, audiobook }, dispatch] = useStateValue();
  const addAudiobookToContext = (index) => {
    if (user?.user.role === "admin" || user?.user.isPremium === true) {
      if (!isAudiobookPlaying) {
        dispatch({
          type: actionType.SET_AUDIOBOOK_PLAYING,
          isAudiobookPlaying: true,
        });
      }
      if (audiobook !== index) {
        dispatch({
          type: actionType.SET_AUDIOBOOK,
          audiobook: index,
        });
      }
    } else {
      setAlert("success");
      setAlertMsg("Buy premium to enjoy listening Audiobook!");
      setTimeout(() => {
        setAlert(null);
      }, 8000);
    }
  };
  const AlertPremium = ({ msg }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.6 }}
        animate={{ opacity: 1, y: 50, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.6 }}
        className="w-screen z-50 fixed top-10 left-0 flex items-center justify-center"
      >
        {/* <div className="w-460 bg-card rounded-md shadow-md backdrop-blur-md px-4 py-2 flex items-center gap-4">
          <div className="w-[4px] h-10 bg-yellow-500 rounded-md"></div>
          <FaCrown className="text-xl text-yellow-500" />
          <p className="text-base font-semibold text-textColor"> */}
          <div className="alert-premium-content">
          <div className="alert-premium-bar"></div>
          <FaCrown className="alert-premium-icon" />
          <p className="alert-premium-text">
            {msg?.length > 50 ? `${msg?.slice(0, 50)}...` : msg}
          </p>
        </div>
      </motion.div>
    );
  };
  return (
    <div className="w-full series-list-container">
      {musics && musics.length > 0 ? (
        musics.map((data, index) => (
          <div key={data._id} className="series-item">
            <div className="flex items-center justify-between gap-4 w-full">
            {/* <div className="series-item-content"> */}
              {/* Small photo */}
              <img
                src={data.imageURL}
                alt=""
                className="series-image"
                style={{ width: "50px", height: "50px" }} // Adjust dimensions as needed
              />

              {/* Details */}
              <div className="flex flex-col flex-grow">
              {/* <div className="series-details"> */}
                <p className="series-name">
                  {data.name.length > 25
                    ? `${data.name.slice(0, 25)}...`
                    : data.name}
                </p>
                <p
                  className="series-author "
                  style={{
                    color: "black",
                  }}
                >
                  {data.author}
                </p>
              </div>

              {/* Container for the button */}
              <div className="button-container">
                {/* Add Audiobook button */}
                <button
                  className="bg-primary text-white p-2 rounded add-button"
                  // className="add-button"
                  onClick={() => addAudiobookToContext(index)}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    fontWeight: "bold",
                  }}
                >
                  Play
                </button>
              </div>
            </div>

            {/* Alert for Premium users */}
            {alert === "success" && <AlertPremium msg={alertMsg} />}
          </div>
        ))
      ) : (
        <p
          style={{
            color: "black",
          }}
        >
          Select the series
        </p>
      )}
    </div>
  );
};
export default Home;
