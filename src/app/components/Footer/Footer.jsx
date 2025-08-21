import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <h1 className="btn btn-ghost text-xl">EasyPro</h1>
        <p className="font-bold">
          Experience Personalized Online
          <br />
          Shopping in Bangladesh with EasyPro
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
        <CiFacebook size={35} />
        <CiInstagram size={35} />
        <AiOutlineYoutube size={35} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
