import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
const Header = () => {
  const handleMobileMenu = () => {
    const hamburgerMenu = document.getElementById("hamburg");
    const closeHamburger = document.getElementById("closeHamburg");
    const MobileMenu = document.getElementById("MobileMenu");
    MobileMenu.classList.remove("hidden");
    closeHamburger.classList.remove("hidden");
    hamburgerMenu.classList.add("hidden");
  };

  const handleCloseMenu = () => {
    const hamburgerMenu = document.getElementById("hamburg");
    const closeHamburger = document.getElementById("closeHamburg");
    const MobileMenu = document.getElementById("MobileMenu");
    MobileMenu.classList.add("hidden");
    closeHamburger.classList.add("hidden");
    hamburgerMenu.classList.remove("hidden");
  };
  return (
    <div className="bg-white">
      <div className="w-10/12 flex py-6 mx-auto justify-between items-center">
        <div>
          <img src={logo} />
        </div>
        <div
          id="MobileMenu"
          className="rounded-md hidden bg-white space-y-8 w-10/12 py-8 absolute top-24 text-center z-20 flex flex-col text-black lg:text-slate-400 lg:space-x-8 lg:block lg:static lg:w-auto lg:py-0 lg:bg-auto lg:space-y-0 lg:text-left"
        >
          <span className="hover:text-black cursor-pointer">Home</span>
          <span className="hover:text-black cursor-pointer">About</span>
          <span className="hover:text-black cursor-pointer">Contact</span>
          <span className="hover:text-black cursor-pointer">Blog</span>
          <span className="hover:text-black cursor-pointer">Careers</span>
        </div>
        <div>
          <button className="hidden bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm hover:opacity-50 lg:block">
            Request Invite
          </button>
        </div>
        <img
          src={hamburger}
          id="hamburg"
          className="lg:hidden"
          onClick={handleMobileMenu}
        />
        <img
          src={close}
          id="closeHamburg"
          className="hidden lg:hidden"
          onClick={handleCloseMenu}
        />
      </div>
    </div>
  );
};

export default Header;
