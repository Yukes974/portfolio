import { useState } from "react";
import Thumbnails from "../components/thumbnail";
import "../css/collapse.css";

function Collapse({ projectCard }) {
  const [isOpen, setIsOpen] = useState();
  return (
    <section className="sectionprojects">
      <h3 onClick={() => setIsOpen(!isOpen)}>MY PROJECTS</h3>
      {isOpen && <Thumbnails projectCard={projectCard} />}
    </section>
  );
}

export default Collapse;
