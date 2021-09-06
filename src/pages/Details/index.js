import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/BannerBuyTicket";
import Facility from "../../components/Facility";
const Detail = () => {
  return (
    <div className="detail">
      <Header />
      <Banner />
      <Facility />
      <Footer />
    </div>
  );
};

export default Detail;
