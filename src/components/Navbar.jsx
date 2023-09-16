import mainLogo from "../assets/images/logo.svg";
import bgMobile from "../assets/images/image-hero-mobile.jpg";
import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navReset = () => {
    setNav(false);
  };

  return (
    <>
      <section>
        <header>
          <nav className="hidden text-white text-sm md:flex items-center justify-between ">
            <img src={mainLogo} alt="Crowded logo" />
            <ul className="flex gap-2">
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
          </nav>

          <div onClick={handleNav} className=" px-6 pt-5 flex items-end justify-end md:hidden ">
            {nav ? (
              <img src={closeMenu} alt="close menu" />
            ) : (
              <img src={hamburger} alt="Menu" />
            )}
          </div>

          <nav className="">
          <img src={mainLogo} alt="Crowded logo" className="absolute z-10 top-0 pt-5 px-6 pt-"/> 
            <ul className={nav ? 'text-center' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
          </nav>
          <img src={bgMobile} alt="" className="absolute top-0 -z-10" />
        </header>
      </section>
    </>
  );
}

export default Navbar;
