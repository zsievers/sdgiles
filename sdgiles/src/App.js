import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import LogoRow from "./components/LogoRow";
import Services from "./components/Services";
import services from "./lib/servicesData";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Bio />
      <LogoRow />
      <Services services={services} />
    </>
  );
}
