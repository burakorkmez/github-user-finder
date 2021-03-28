import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="my-auto py-2">Developed by Burak Örkmez &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
