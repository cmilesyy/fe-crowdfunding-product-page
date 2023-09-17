import mainLogo from "../assets/images/logo.svg";
import bgMobile from "../assets/images/image-hero-mobile.jpg";
import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";
import bgDesktop from "../assets/images/image-hero-desktop.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // const navReset = () => {
  //   setNav(false);
  // };

  return (
    <>
      <section>
        <header className="" >
          <nav className="hidden text-white text-sm md:flex items-center justify-between md:px-20 lg:px-40 pt-5">

            <img src={mainLogo} alt="Crowded logo"  />
            <ul className="flex gap-4 ">
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
            
            
          </nav>
          <img src={bgDesktop} alt="" className="absolute top-0 -z-10 w-full" />
          {/* Mobile Menu */}
          <div
            onClick={handleNav}
            className=" px-6 pt-5 flex items-end justify-end  md:hidden "
          >
            {nav ? (
              <img src={closeMenu} alt="close menu"  />
            ) : (
              <img src={hamburger} alt="Menu"  />
            )}
          </div>

          <nav >
            <img
              src={mainLogo}
              alt="Crowded logo"
              className="absolute z-10 top-0 pt-5 px-6 md:hidden"
            />
            <ul
              className={
                nav
                  ? "absolute m-auto top-20 left-0 right-0 w-72 rounded-lg bg-white "
                  : "fixed left-[-100%]"
              }
            >
              <li className="border-b py-6 pl-6 text-lg">About</li>
              <li className="border-b py-6 pl-6 text-lg">Discover</li>
              <li className="py-6 pl-6 text-lg">Get Started</li>
            </ul>
            <img
              src={bgMobile}
              alt=""
              className="absolute top-0 -z-10 md:hidden"
            />
          </nav>
        </header>
      </section>
    </>
  );
}

export default Navbar;
