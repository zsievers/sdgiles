// columnizing the cards

import Service from "./Service";

const Services = ({ services }) => {
  const paragraph =
    "With four decades of experience, SG Business Consulting Services can support your business needs in";

  return (
    <section className="px-20 border-t-2">
      <h1 className="text-3xl pt-5 text-center pb-10">{paragraph}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        {services.map((service) => {
          return <Service {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
