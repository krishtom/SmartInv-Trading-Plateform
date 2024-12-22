import React, { useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import axios from "axios";
import { GeneralContextProvider } from "./GeneralContext";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const loginUrl = "http://localhost:3001/login";

const Dashboard = () => {
 const [loading, setLoading] = React.useState(false);
 const [searchParams, setSearchParams] = useSearchParams();
 const [verified, setVerified] = React.useState(false);

 useEffect(() => {
  if (verified) {
   return;
  }
  const token = searchParams.get("token") || localStorage.getItem("token");

  if (!token) {
   alert("Invalid token");
   window.location.href = loginUrl;
  }

  localStorage.setItem("token", token);

  const fetchUser = async () => {
   setLoading(true);
   try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { data } = await axios.post("http://localhost:3002/verify-token", {});
    localStorage.setItem("user", JSON.stringify(data.userDetails));
    setVerified(true);
    setSearchParams({});
   } catch (error) {
    const message = error?.response?.data?.message || error?.response?.data?.error || error.message;

    alert("Error verifying token: " + message);
    window.location.href = loginUrl;
   } finally {
    setLoading(false);
   }
  };

  fetchUser();
 }, [searchParams, verified, setSearchParams]);

 if (loading) {
  return <div>Loading...</div>;
 }

 return (
  <div className='dashboard-container'>
   <GeneralContextProvider>
    <WatchList />
   </GeneralContextProvider>
   <div className='content'>
    <Routes>
     <Route exact path='/' element={<Summary />} />
     <Route path='/orders' element={<Orders />} />
     <Route path='/holdings' element={<Holdings />} />
     <Route path='/positions' element={<Positions />} />
     <Route path='/funds' element={<Funds />} />
     <Route path='/apps' element={<Apps />} />
    </Routes>
   </div>
  </div>
 );
};

export default Dashboard;
