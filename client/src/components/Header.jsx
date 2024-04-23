import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CompleteLogo } from "../assets/img/index";
import { FaCrown } from "react-icons/fa";
import { useStateValue } from "../Context/StateProvider";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { motion } from "framer-motion";
import { checkoutPayment } from "../api";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate;

  const checkoutHandler = async (amount) => {
    checkoutPayment(amount).then((data) => {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_API_SECRET,
        amount: data.order.amount,
        currency: "INR",
        name: "Bookify",
        description: "Buy Bookify Premium",
        order_id: data.order.id,
        callback_url: "http://localhost:4000/api/payment/paymentVerification",
        prefill: {
          name: "Shreyash",
          email: "shreyash.kadam10@gmail.com",
          contact: "7208673440",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    });
  };

  const logout = () => {
    const firebaseAuth = getAuth(app);
    firebaseAuth
      .signOut()
      .then(() => {
        window.localStorage.setItem("auth", "false");
      })
      .catch((e) => console.log(e));
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex justify-between w-full p-4 md:p-6 mt-4 overflow-x-hidden">
      < div className="flex  max-w-screen-sm mx-auto w-full">
        <NavLink to="/home">
          <img src={CompleteLogo} alt="Logo" className="h-12" onClick={() => setIsMenu(!isMenu)} />
        </NavLink>
      
      {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 top-12 right-0 w-56 md:w-64 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
          >
            <NavLink to={"/userProfile"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>
            <hr />
            {user?.user.role === "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>
                <hr />
              </>
            )}
            <p
              className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={logout}
            >
              Sign out
            </p>
          </motion.div>
        )}
      </div>
    

      {!user?.user.isPremium && (
        // <NavLink to={"/checkout"}>
        <button
          onClick={() => checkoutHandler(200)}
          className="text-yellow-800   md:text-2xl hover:text-yellow-500 font-semibold"
        >
          Buy Premium
        </button>
        // </NavLink>
      )}

      {/* <div
        className="flex items-center cursor-pointer gap-2 relative"
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
      >
        <img
          className="w-12 h-12 object-cover rounded-full shadow-lg"
          src={user?.user?.imageURL}
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <p className="text-textColor text-sm sm:text-lg  hover:text-headingColor font-semibold">
           {user?.user.name} 
          </p> */}
          {/* {user?.user.isPremium && (
          //   <p className=" items-center gap-2 text-xs text-gray-500 font-normal">
          //     Premium Member{" "}
          //     <FaCrown className="text-xm -ml-1 text-yellow-500" />
          //   </p>
          // )}
          // {!user?.user.isPremium && (
          //   <p className=" items-center gap-2 hidden sm:visible text-xs text-gray-500 font-normal">
          //     Free Member
          //   </p> */}
          {/* <p className="items-center gap-2 text-xs text-gray-500 font-normal">
            {user?.user.isPremium ? (
              <>
                Premium Member <FaCrown className="text-xm -ml-1 text-yellow-500" />
              </>
            ) : (
              <>Free Member</>
            )}
          </p>
        </div>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 top-12 right-0 w-56 md:w-64 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
          >
            <NavLink to={"/userProfile"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>
            <hr />
            {user?.user.role === "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>
                <hr />
              </>
            )}
            <p
              className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={logout}
            >
              Sign out
            </p>
          </motion.div>
        )}
      </div> */}

{/* <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 object-cover rounded-full shadow-lg"
          src={user?.user?.imageURL}
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <p className="text-textColor text-sm sm:text-lg hover:text-headingColor font-semibold">
            {user?.user.name}
          </p>
          <p className="items-center gap-2 text-xs text-gray-500 font-normal">
            {user?.user.isPremium ? (
              <>
                Premium Member <FaCrown className="text-xm -ml-1 text-yellow-500" />
              </>
            ) : (
              <>Free Member</>
            )}
          </p>
        </div> 
          </div> */}
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { CompleteLogo } from "../assets/img/index";
// import { FaCrown } from "react-icons/fa";
// import { useStateValue } from "../Context/StateProvider";
// import { getAuth } from "firebase/auth";
// import { app } from "../config/firebase.config";
// import { motion } from "framer-motion";
// import { checkoutPayment } from "../api";

// const Header = () => {
//   const [{ user }, dispatch] = useStateValue();
//   const [isMenu, setIsMenu] = useState(false);
//   const navigate = useNavigate();

//   const checkoutHandler = async (amount) => {
//     checkoutPayment(amount).then((data) => {
//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_API_KEY,
//         key_secret: process.env.REACT_APP_RAZORPAY_API_SECRET,
//         // ... (other options remain unchanged)
//       };
//       const razor = new window.Razorpay(options);
//       razor.open();
//     });
//   };

//   const logout = () => {
//     const firebaseAuth = getAuth(app);
//     firebaseAuth
//       .signOut()
//       .then(() => {
//         window.localStorage.setItem("auth", "false");
//       })
//       .catch((e) => console.log(e));
//     navigate("/login", { replace: true });
//   };

//   return (
//     <header className="flex justify-between w-full p-4 md:py-1 md:px-6 mt-4">
//       <div className="flex justify-center items-center">
//         <NavLink to="/home">
//           <img src={CompleteLogo} alt="Logo" className="h-12" />
//         </NavLink>
//       </div>

//       {!user?.user.isPremium && (
//         <button
//           onClick={() => checkoutHandler(200)}
//           className="text-yellow-800 text-2xl hover:text-yellow-500 font-semibold md:hidden"
//         >
//           Buy Premium
//         </button>
//       )}

//       <div
//         className="flex items-center cursor-pointer gap-2 relative"
//         onMouseEnter={() => setIsMenu(true)}
//         onMouseLeave={() => setIsMenu(false)}
//       >
//         <img
//           className="w-12 min-w-[44px] object-cover rounded-full shadow-lg"
//           src={user?.user?.imageURL}
//           alt=""
//           referrerPolicy="no-referrer"
//         />
//         <div className="flex flex-col">
//           <p className="text-textColor text-lg hover:text-headingColor font-semibold">
//             {user?.user.name}
//           </p>
//           {user?.user.isPremium && (
//             <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
//               Premium Member{" "}
//               <FaCrown className="text-xm -ml-1 text-yellow-500" />
//             </p>
//           )}
//           {!user?.user.isPremium && (
//             <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
//               Free Member
//             </p>
//           )}
//         </div>
//         {isMenu && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="absolute z-10 top-12 right-0 w-48 md:w-64 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
//           >
//             <NavLink to={"/userProfile"}>
//               <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
//                 Profile
//               </p>
//             </NavLink>
//             <hr className="md:hidden" />
//             {user?.user.role === "admin" && (
//               <>
//                 <NavLink to={"/dashboard/home"}>
//                   <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
//                     Dashboard
//                   </p>
//                 </NavLink>
//                 <hr className="md:hidden" />
//               </>
//             )}
//             <p
//               className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
//               onClick={logout}
//             >
//               Sign out
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
