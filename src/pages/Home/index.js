import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/BannerBuyTicket";
import DetailStation from "../../components/Detail-Train";
import UseFul from "../../components/Useful";

const Homeroute = ({ stations, setStation }) => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <DetailStation stations={stations} setStation={setStation} />
      <UseFul />
      <Footer />
    </div>
  );
};

export default Homeroute;
