import Image from "../Photos/Image.png";
import "../App.css";

export default function Home() {
  return (
    <div
      className="hero-bg"
      style={{ backgroundImage: `url(${Image})` }}
    >
          <div className="hero-overlay">
        <div className="hero-content">
       <p className="tagline">Stronger Together</p>
          <h1>
           Global Alumni <br />
            <span>Network</span>
         </h1>
         <p className="desc">
            Connect with alumni, explore opportunities, and build teams.
          </p>
          <div className="buttons">
       <button className="btn primary">Find Teams</button>
            <button className="btn secondary">Explore Alumni</button>
          </div>

        </div>
      </div>
    </div>
  );
}