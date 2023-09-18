// Services Content ---> Service

const Service = ({ title, subtext, points }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
      <div className="px-6 py-4">
        <div className="text-center text-4xl pb-4">{title}</div>
        <div className="font-bold italic text-lg mb-2 py-4 text-center">
          {subtext}
        </div>
        {points.map((point) => {
          return (
            <li className="text-gray-700 text-base list-disc px-10">{point}</li>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
