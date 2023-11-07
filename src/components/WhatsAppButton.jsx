import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsappButton.css";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Add your WhatsApp link here
    window.open("https://wa.me/message/H3NEN2CKG4WJF1", "_blank");
  };
  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp size={32} />
    </div>
  );
};

export default WhatsAppButton;
