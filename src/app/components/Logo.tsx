import Image from "next/image";
import React from "react";

export const Logo = () => (
  <Image
    src="/logo.png"
    alt="netflix"
    width={250}
    height={250}
    className="cursor-pointer"
  />
);
