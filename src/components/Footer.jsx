import {
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const footerMenu = [
    {
      name: "Contact",
      link: "https://api.whatsapp.com/send/?phone=6285798025360&text&type=phone_number&app_absent=0",
    },
    { name: "About Me", link: "https://fauzanirawan.netlify.app/" },
    { name: "Terms & Condition", link: "/" },
  ];
  const footerMenu2 = [
    { name: "Careers", link: "/" },
    { name: "Change Country", link: "/" },
    {
      name: "FAQ",
      link: "/https://docs.google.com/document/d/1oH80cTHYxewr2rzp95Z_IjtJiVuE-NYg/edit?usp=sharing&ouid=116440407515176338431&rtpof=true&sd=true",
    },
  ];
  return (
    <div className="w-full bg-[#050038] ">
      <div className="text-white flex justify-center py-12 gap-x-3 ">
        <a href="https://twitter.com/mfauzann982">
          <AiFillTwitterSquare size={45} className="cursor-pointer" />
        </a>
        <a href="">
          <AiFillFacebook size={45} className="cursor-pointer" />
        </a>
        <a href="">
          <AiFillGooglePlusSquare size={45} className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/mfauzan982/">
          <FaInstagramSquare size={45} className="cursor-pointer" />
        </a>
      </div>
      <div className="text-white px-10 mx-auto w-3/4 text-lg sm:flex sm:justify-between sm:text-xl sm:px-6 md:px-0 md:justify-center gap-x-96">
        <ul>
          {footerMenu.map((Link) => (
            <li key={Link.name}>
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="mt-10 pb-20 sm:mt-0">
          {footerMenu2.map((Link) => (
            <li key={Link.name}>
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
