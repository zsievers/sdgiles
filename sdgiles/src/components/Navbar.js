import { useState, useEffect, useRef } from "react";
import { links } from "../lib/data";
import { FaBars } from "react-icons/fa";
import { Navbar } from "@material-tailwind/react";
import "./nb.css";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <Navbar className="flex flex-row justify-between p-4 sticky top-0 z-50">
      <div>
        <button
          className="text-[#617d98] text-2xl bg-transparent cursor-pointer border-transparent ease-in-out duration-300 hover:text-[#102a42] md:hidden"
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul
          className="links text-lg block p-3 text-[#324d67] capitalize"
          ref={linksRef}
        >
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Navbar>
  );
};

export default Nav;
