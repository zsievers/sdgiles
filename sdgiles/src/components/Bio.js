import headshot from "../images/headerImg/sg-logo.png";
import serviceText from "../lib/textData";

export default function Bio() {
  return (
    <div
      className="p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5"
      id="about"
    >
      <div className="px-2 py-1">
        <img
          src={headshot}
          alt=""
          className="h-full w-72 md:h-full lg:h-full lg:w-56 m-auto object-cover shadow-2xl rounded-3xl"
        />
      </div>
      <div className="text-gray-600 rounded overflow-hidden px-3 py-2">
        {serviceText.map((text) => {
          return <p className="text-md md:text-base lg:text-xl">{text}</p>;
        })}
      </div>
    </div>
  );
}
