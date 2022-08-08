import React from "react";

const Footer = () => {
  var today = new Date();

  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © {today.getFullYear()} All rights reserved by Enigma.com
      </p>
    </div>
  );
};

export default Footer;
