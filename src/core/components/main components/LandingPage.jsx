import React from "react";
import { LandingHeader } from "../additional components/LandingHeader";
import { LandingServices } from "../additional components/LandingServices";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

function LandingPage() {
  return (
    <div>
      <LandingHeader />
      <LandingServices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default LandingPage;