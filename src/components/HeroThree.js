import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const HeroThree = () => {
  return (
    <div className="bg-slate-50 lg:-translate-y-[20rem] pb-16">
      <div className=" w-9/12 mx-auto pt-16">
        <p className="text-4xl text-slate-700 pb-8">Latest Articles</p>
        <div className="flex md:space-x-2 flex-col text-center md:text-left md:flex-row space-y-12 md:space-y-0 justify-between">
          <div className="flex flex-col space-y-1 bg-white pb-6 md:pb-2">
            <img src={currency} className="md:h-40 mb-6" />
            <span className="text-[10px] text-slate-400 px-2">
              By Claire Robinson
            </span>
            <span className="text-slate-700 px-2 text-sm hover:text-green-500 cursor-pointer">
              Receive money in any <br className="hidden md:block" />
              currency with no fees
            </span>
            <span className="text-slate-400 text-xs px-2">
              The world is getting smaller and{" "}
              <br className="hidden md:block" />
              we're becoming more mobile. So <br className="hidden md:block" />
              why should you be forced to only{" "}
              <br className="hidden md:block" />
              receive money in a single...
            </span>
          </div>
          <div className="flex flex-col space-y-1 bg-white pb-6 md:pb-2">
            <img src={restaurant} className="md:h-40 mb-6" />
            <span className="text-[10px] text-slate-400 px-2">
              By Wilson Hutton
            </span>
            <span className="text-slate-700 px-2 text-sm hover:text-green-500 cursor-pointer">
              Treat yourself without <br className="hidden md:block" />
              worrying about money
            </span>
            <span className="text-slate-400 text-xs px-2">
              Our simple budgeting feature <br className="hidden md:block" />
              allows you to seperate out your <br className="hidden md:block" />
              spending and set realistic limits{" "}
              <br className="hidden md:block" />
              each month. That means you...
            </span>
          </div>
          <div className="flex flex-col space-y-1 bg-white pb-6 md:pb-2">
            <img src={plane} className="md:h-40 mb-6" />
            <span className="text-[10px] text-slate-400 px-2">
              By Wilson Hutton
            </span>
            <span className="text-slate-700 px-2 text-sm hover:text-green-500 cursor-pointer">
              Take your Easybank card <br className="hidden md:block" />
              wherever you go
            </span>
            <span className="text-slate-400 text-xs px-2">
              we want you to enjoy your travels.{" "}
              <br className="hidden md:block" />
              This is why we don't charge any <br className="hidden md:block" />
              fees on purchases while you're <br className="hidden md:block" />
              abroad. We'll even show you...
            </span>
          </div>
          <div className="flex flex-col space-y-1 bg-white pb-6 md:pb-2">
            <img src={confetti} className="md:h-40 mb-6" />
            <span className="text-[10px] text-slate-400 px-2">
              By Claire Robinson
            </span>
            <span className="text-slate-700 px-2 text-sm hover:text-green-500 cursor-pointer">
              Our invite-only Beta <br className="hidden md:block" />
              accounts are now live!
            </span>
            <span className="text-slate-400 text-xs px-2">
              After a lot of hard work by the <br className="hidden md:block" />
              whole team, we're excited to launch{" "}
              <br className="hidden md:block" />
              our closed beta. It's easy to request{" "}
              <br className="hidden md:block" />
              an invite throught the site...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
