import React from "react";
import { Outlet } from "react-router-dom";
import { LandingHeader } from "../additional components/LandingHeader";
import { LandingServices } from "../additional components/LandingServices";
import { LandingSlider } from "../additional components/LandingSlider";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

function LandingPage() {
  return (
    <div>
      <LandingHeader />
      <LandingServices />
      {/* <LandingSlider /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default LandingPage;