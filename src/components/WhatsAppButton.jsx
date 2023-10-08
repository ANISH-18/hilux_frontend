import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsAppButton";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Add your WhatsApp link here
    // Example: window.open('https://wa.me/1234567890', '_blank');
  };
  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp size={32} />
    </div>
  );
};

export default WhatsAppButton;
