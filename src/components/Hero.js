import mock from "../images/bg-intro-desktop.svg";
import phones from "../images/image-mockups.png"
import mobileMock from "../images/bg-intro-mobile.svg"
const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse pb-14 lg:pb-0 lg:flex-row overflow-x-hidden bg-slate-50 lg:pl-28">
      <div className=" text-center lg:text-left flex flex-col space-y-6 lg:mt-36 ">
        <p className=" text-4xl lg:text-5xl text-slate-700">
          Next generation <br />
          digital banking
        </p>
        <span className="text-slate-400 w-10/12 lg:w-auto lg:mx-0 mx-auto">
          Take your financal life online. Your Easybank account <br className="hidden md:block"/>
          will be a one-stop shop for spending,saving,
          <br className="hidden lg:block" />
          budgeting,investing and much more.
        </span>
        <button className="mx-auto lg:mx-0 w-5/12 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm hover:opacity-70">
          Request Invite
        </button>
      </div>
      <div className="mx-auto relative z-10 lg:static overflow-y-hidden lg:overflow-y-visible">
        <img src={mock} className="hidden w-10/12 absolute -top-52 -right-72 lg:block"/>
        <img src={mobileMock} className="absolute lg:hidden w-screen"/>
        <img src={phones} className=" w-10/12 mx-auto -translate-y-20 lg:translate-x-52 lg:w-auto lg:mx-0  lg:-translate-y-32 "/>
      </div>
    </div>
  );
};

export default Hero;
