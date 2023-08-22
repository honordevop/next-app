import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div>©2023 OrnoIT. All rights reserved.</div>
        <div className="">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className=""
            alt="Lama Dev Facebook Account"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className=""
            alt="Lama Dev"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className=""
            alt="Lama Dev"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className=""
            alt="Lama Dev"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
