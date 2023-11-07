import React from "react";
import WhatsAppButton from "./WhatsAppButton"; // Import the WhatsAppButton component

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <WhatsAppButton /> {/* Add the WhatsAppButton component */}
    </>
  );
};

export default Layout;
