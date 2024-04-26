import "../css/thumbnail.css";
import booki from "../assets/booki.png";
import ohmyfood from "../assets/ohmyfood.png";
import lapanthere from "../assets/lapanthere.png";
import kanap from "../assets/kanap.png";
import kasa from "../assets/kasa.png";

function Thumbnail({ projectCard }) {
  const imgThumbnail = {
    1: booki,
    2: ohmyfood,
    3: lapanthere,
    4: kanap,
    5: "",
    6: kasa,
  };
  return (
    <div className="thumbnailBox">
      {projectCard.map((project) => {
        return (
          <div key={project.id}>
            <a href={project.url} target="_blank">
              <h4>{project.title}</h4>
              <img src={imgThumbnail[project.id]} alt={project.alt} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Thumbnail;
