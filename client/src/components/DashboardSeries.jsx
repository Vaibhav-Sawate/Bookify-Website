// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import { useStateValue } from "../Context/StateProvider";
// import { Link } from "react-router-dom";
// import { MdDelete } from "react-icons/md";
// import { getAllSeries, deleteSeriesById } from "../api";
// import { actionType } from "../Context/reducer";
// import AlertSuccess from "./AlertSuccess";
// import AlertError from "./AlertError";

// const DashboardSeries = () => {
//   const [{ allSeries }, dispatch] = useStateValue();


//   useEffect(() => {
//     if (!allSeries) {
//       getAllSeries().then((data) => {
//         dispatch({ type: actionType.SET_ALL_SERIES, allSeries: data.data });
//       });
//     }
//   }, []);

//   return (
//     <div className="w-full p-4 flex items-center justify-center flex-col">
//       <div className="relative w-full gap-3  my-4 p-4 py-12 border border-gray-300 rounded-md flex flex-wrap justify-evenly">
//         {allSeries &&
//           allSeries.map((data, index) => (
//             <>
//               <SeriesCard key={index} data={data} index={index} />
//             </>
//           ))}
//       </div>
//     </div>
//   );
// };

// export const SeriesCard = ({ data, index }) => {
//   const [isDeleted, setIsDeleted] = useState(false);
//   const [alert, setAlert] = useState(false);
//   const [alertMsg, setAlertMsg] = useState(null);

//   const [{ allSeries }, dispatch] = useStateValue();

//   const deleteObject = (id) => {
//     deleteSeriesById(id).then((res) => {
//       // console.log(res.data);
//       if (res.data.success) {
//         setAlert("success");
//         setAlertMsg(res.data.msg);
//         getAllSeries().then((data) => {
//           dispatch({
//             type: actionType.SET_ALL_SERIES,
//             allSeries: data.data,
//           });
//         });
//         setTimeout(() => {
//           setAlert(false);
//         }, 4000);
//       } else {
//         setAlert("error");
//         setAlertMsg(res.data.msg);
//         setTimeout(() => {
//           setAlert(false);
//         }, 4000);
//       }
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, translateX: -50 }}
//       animate={{ opacity: 1, translateX: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.1 }}
//       className="relative w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
//     >
//       <img
//         src={data?.imageURL}
//         className="w-full h-40 object-cover rounded-md"
//         alt=""
//       />

//       <p className="text-base text-textColor">{data.name}</p>
//       <hr /><hr />
//       <motion.i
//         className="absolute bottom-2 left-2"
//         whileTap={{ scale: 0.75 }}
//         onClick={() => setIsDeleted(true)}
//       >
//         <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
//       </motion.i>

//       {isDeleted && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           className="absolute inset-0 p-2 bg-darkOverlay  backdrop-blur-md flex flex-col items-center justify-center gap-4"
//         >
//           <p className="text-gray-100 text-base text-center">
//             Are you sure do you want to delete this?
//           </p>
//           <div className="flex items-center gap-3">
//             <button
//               className="text-sm px-4 py-1 rounded-md text-white hover:shadow-md bg-teal-400"
//               onClick={() => deleteObject(data._id)}
//             >
//               Yes
//             </button>
//             <button
//               className="text-sm px-4 py-1 rounded-md text-white hover:shadow-md bg-gray-400"
//               onClick={() => setIsDeleted(false)}
//             >
//               No
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {alert && (
//         <>
//           {alert === "success" ? (
//             <AlertSuccess msg={alertMsg} />
//           ) : (
//             <AlertError msg={alertMsg} />
//           )}
//         </>
//       )}
//     </motion.div>
//   );
// };

// export default DashboardSeries;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useStateValue } from "../Context/StateProvider";
import { MdDelete } from "react-icons/md";
import { getAllSeries, deleteSeriesById } from "../api";
import { actionType } from "../Context/reducer";
import AlertSuccess from "./AlertSuccess";
import AlertError from "./AlertError";

const DashboardSeries = () => {
  const [{ allSeries }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allSeries) {
      getAllSeries().then((data) => {
        dispatch({ type: actionType.SET_ALL_SERIES, allSeries: data.data });
      });
    }
  }, []);

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 p-4 py-12 border border-gray-300 rounded-md">
        {allSeries &&
          allSeries.map((data, index) => (
            <SeriesCard key={index} data={data} index={index} />
          ))}
      </div>
    </div>
  );
};

export const SeriesCard = ({ data, index }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);

  const [{ allSeries }, dispatch] = useStateValue();

  const deleteObject = (id) => {
    deleteSeriesById(id).then((res) => {
      if (res.data.success) {
        setAlert("success");
        setAlertMsg(res.data.msg);
        getAllSeries().then((data) => {
          dispatch({
            type: actionType.SET_ALL_SERIES,
            allSeries: data.data,
          });
        });
        setTimeout(() => {
          setAlert(false);
        }, 4000);
      } else {
        setAlert("error");
        setAlertMsg(res.data.msg);
        setTimeout(() => {
          setAlert(false);
        }, 4000);
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative w-full sm:min-w-[200px] px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src={data?.imageURL}
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">{data.name}</p>
      <hr />
      <hr />
      <motion.i
        className="absolute bottom-2 left-2"
        whileTap={{ scale: 0.75 }}
        onClick={() => setIsDeleted(true)}
      >
        <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
      </motion.i>

      {isDeleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute inset-0 p-2 bg-darkOverlay  backdrop-blur-md flex flex-col items-center justify-center gap-4"
        >
          <p className="text-gray-100 text-base text-center">
            Are you sure do you want to delete this?
          </p>
          <div className="flex items-center gap-3">
            <button
              className="text-sm px-4 py-1 rounded-md text-white hover:shadow-md bg-teal-400"
              onClick={() => deleteObject(data._id)}
            >
              Yes
            </button>
            <button
              className="text-sm px-4 py-1 rounded-md text-white hover:shadow-md bg-gray-400"
              onClick={() => setIsDeleted(false)}
            >
              No
            </button>
          </div>
        </motion.div>
      )}

      {alert && (
        <>
          {alert === "success" ? (
            <AlertSuccess msg={alertMsg} />
          ) : (
            <AlertError msg={alertMsg} />
          )}
        </>
      )}
    </motion.div>
  );
};

export default DashboardSeries;
