import React from "react";
import Header from "./Header";
import moment from "moment";
import { useStateValue } from "../Context/StateProvider";
import { FaCrown } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { NavLink, useNavigate } from 'react-router-dom';
import { app } from "../config/firebase.config";
import { getAuth } from "firebase/auth";


const UserProfile = () => {

  const [{ user }, dispatch] = useStateValue();
  const createdAt = moment(new Date(user?.user.createdAt)).format("MMMM Do YYYY");
  const toPrintDate = moment(createdAt, "MMMM Do YYYY").fromNow();

  const navigate = useNavigate;

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
    <div className="w-full h-full flex flex-col items-center justify-center bg-primary">
      <Header />

      <section className="pt-16 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="text-center">
      {/* <section class="pt-16 bg-blueGray-50 min-w-[450px]">
        <div class="w-full lg:w-4/12 px-4 mx-auto flex justify-center">
          <div class="relative flex flex-col min-w-[450px] break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative"> */}
                  <img
                    className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-6 "
                    src={user?.user?.imageURL}
                    alt=""
                    referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-semibold text-blueGray-700 mb-1">{user?.user.name}</h3>
              <div className="text-sm text-blueGray-400 font-bold flex justify-center items-center gap-1">
                <p>User {user?.user.email_verfied ? 'Verified' : 'Not Verified'}<GoVerified className="text-yellow-500" /></p>
              </div>
              <div className="text-sm text-blueGray-400 font-semibold mt-3">
                <p>Email: {user?.user.email}</p>
                <p>Account Created: {toPrintDate}</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={logout}
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Logout
              </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
