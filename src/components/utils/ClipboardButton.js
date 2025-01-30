import React from "react";
import { FaCopy } from 'react-icons/fa';

const CopyEmailButton = () => {
  const email = "asantivanezg@hotmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <FaCopy onClick={copyToClipboard} style={{ cursor: "pointer", fontSize: "24px" }} />
  );
};

export default CopyEmailButton;
