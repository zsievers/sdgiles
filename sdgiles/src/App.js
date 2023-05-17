import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import LogoRow from "./components/LogoRow";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Bio />
      <LogoRow />
      <Services />
    </>
  );
}
