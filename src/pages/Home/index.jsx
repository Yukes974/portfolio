import "../../css/home.css";
import Thumbnail from "../../components/thumbnail";
import ProjectJson from "../../project.json";

function Home() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <h1>Patrick CHARLETTE</h1>
      <h2>Web Developper Junior</h2>
      <section>
        <h3>My Projects</h3>
        <Thumbnail projectCard={ProjectJson} />
      </section>
    </div>
  );
}

export default Home;
