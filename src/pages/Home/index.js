import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/BannerBuyTicket";

const Homeroute = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Homeroute;
