import "../../css/home.css";
import Thumbnails from "../../components/thumbnail";
import ProjectJson from "../../project.json";

function Home() {
  return (
    <section className="sectionpersonprojects">
      <section>
        <div className="mypicture">
          <img src="" alt="" />
        </div>
        <h1>Patrick CHARLETTE</h1>
        <h2>Web Developper Junior</h2>
      </section>

      <section className="sectionprojects">
        <h3>My Projects</h3>
        <Thumbnails projectCard={ProjectJson} />
      </section>
    </section>
  );
}

export default Home;
