import React from "react";
import { logos } from "../lib/data";

export default function LogoRow() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {logos.map((company) => {
        return <img alt="companies" className="h-24 m-2" src={company} />;
      })}
    </div>
  );
}
