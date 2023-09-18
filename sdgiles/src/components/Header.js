import headerBgImg from "../images/headerImg/consulting.jpg";
import headerLogo from "../images/headerImg/sdg-logo.png";

export default function Header() {
  return (
    <div id="home">
      <div className="h-screen w-full bg-cover bg-center relative">
        <img
          src={headerBgImg}
          alt="background"
          className="w-full h-full object-cover absolute m-auto bg-blend-overlay"
        />
        <div className="flex flex-col text-center px-10 py-5 mb-10 text-black opacity-90">
          {/* <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-light font-logo2 mt-10">
            Restoration Wellness
          </h1> */}
          <img
            src={headerLogo}
            alt="SDG Business Consulting Services LLC"
            className="w-full"
          />
        </div>
        <div className="flex flex-col px-8 py-4 mb-10 md:py-2 border-4 bg-white w-3/4 m-auto opacity-75">
          <p className="text-black text-center text-lg md:text-2xl lg:3xl font-light font-logo1">
            Providing experience-based improvement solutions for small and large
            businesses alike
          </p>
        </div>
      </div>
    </div>
  );
}
