import online from "../images/icon-online.svg";
import onboard from "../images/icon-onboarding.svg";
import budget from "../images/icon-budgeting.svg";
import api from "../images/icon-api.svg";

const HeroTwo = () => {
  return (
    <div className="bg-slate-100 md:pt-10 lg:-translate-y-[19rem] z-10">
      <div className="text-center md:text-left w-10/12 mx-auto flex flex-col space-y-4 pt-16">
        <p className="text-4xl text-slate-700">Why choose Easybank ?</p>
        <span className="text-slate-500">
          We leverage open banking to turn your bank account into your financial
          hub.
          <br />
          Control your financies like never before.
        </span>
        <div className="flex flex-col md:flex-row justify-between pt-8 pb-20 space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img src={online} className="w-12" />
            <span className="text-slate-700 text-xl">Online Banking</span>
            <span className="text-sm text-slate-500">
              Our modern web and mobile <br className="hidden md:block" />
              applications allow you to keep <br className="hidden md:block" />
              track of your finances wherever you <br className="hidden md:block" />
              are in the world.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img src={budget} className="w-12" />
            <span className="text-slate-700 text-xl">Simple budgeting</span>
            <span className="text-sm text-slate-500">
              See exactly where your money <br className="hidden md:block" />
              goes each month. Receive
              <br className="hidden md:block" />
              notifications when you're close <br className="hidden md:block" />
              to hitting your limits.
            </span>
          </div>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <img src={onboard} className="w-12" />
            <span className="text-slate-700 text-xl">Fast Onboarding</span>
            <span className="text-sm text-slate-500">
              We don't do branches . Open your <br className="hidden md:block" />
              account in minutes online and start
              <br className="hidden md:block" />
              taking control of your finances. <br className="hidden md:block" />
              right away.
            </span>
          </div>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <img src={api} className="w-12" />
            <span className="text-slate-700 text-xl">Open API</span>
            <span className="text-sm text-slate-500">
              Manage your savings, investments, <br className="hidden md:block" />
              pension, and much more from one
              <br className="hidden md:block" />
              account. Tracking your money has <br className="hidden md:block" />
              never been easier.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
