import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "#" },
    {
      name: "Contact",
      link: "https://api.whatsapp.com/send/?phone=6285798025360&text&type=phone_number&app_absent=0",
    },
    { name: "About Me", link: "https://fauzanirawan.netlify.app/" },
    {
      name: "Docs",
      link: "https://docs.google.com/document/d/1oH80cTHYxewr2rzp95Z_IjtJiVuE-NYg/edit?usp=sharing&ouid=116440407515176338431&rtpof=true&sd=true",
    },
  ];

  const [open, setOpen] = useState(false);
  console.log(navLinks.link);

  return (
    <div className="w-full top-0 left-0 fixed bg-white p-8 md:px-10">
      <div className="text-xl cursor-pointer md:flex justify-between pr-10">
        <h1 className="font-bold text-2xl">INI LOGO</h1>

        <div
          className="absolute right-8 top-8 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
        </div>

        <ul
          className={`md:flex items-center bg-white gap-10 absolute md:static pb-12 md:pb-0 -z-10 md:z-0 left-0 w-full md:w-auto md:pl-0 pl-9
    transition-all duration-500 ease-in-out ${
      open ? "top-20" : "top-[-490px]"
    }`}
        >
          {navLinks.map((Link) => (
            <li key={Link.name}>
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
