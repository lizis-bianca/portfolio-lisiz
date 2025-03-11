"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/lizis-bianca",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  { icon: <FaInstagram />, path: "" },
];

interface SocialsProps {
  containerStyle: string;
  iconStyle: string;
}

export default function Social({ containerStyle, iconStyle }: SocialsProps) {
  return <div className={containerStyle}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyle}>{item.icon}</Link>
    })}
  </div>;
}
