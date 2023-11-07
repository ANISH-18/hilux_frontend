import React from "react";

import Intro from "./Intro";
import "../css/color.css";
import Intro2 from "./Intro2";
import Why from "./Why";
import "../css/main.css";
import Manufacture from "./Manufacture";

import Accreditations from "./Accreditations";
import Intro3 from "./Intro3";
import WhatsAppButton from "./WhatsAppButton";
import Layout from "./Layout"; // Import the Layout component

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <Why />
        <Manufacture />

        <Intro3 />

        <Accreditations />
        <WhatsAppButton />
      </Layout>
    </>
  );
}
