import img from "../Photos/img.png";
import "../App.css";
export default function Home() {
  return (
    <div
      className="hero-bg"
      style={{ backgroundImage: `url(${img})` }}  >
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="tag-box">
            <span className="dot"></span>
            Stronger Together
          </div>
          <h1>
            Global Alumni <br />
            <span>Network</span>
          </h1>
          <p className="desc">
            Connect with alumni, discover opportunities,
            collaborate on projects, and grow your career worldwide.
          </p>
          <div className="buttons">
            <button className="btn primary">
              Explore Alumni →
            </button>
            <button className="btn secondary">
              Intership
            </button>
          </div>
          <div className="stats">
            <div className="card">
              <h2>25K+</h2>
              <p>Alumni</p>
            </div>
            <div className="card">
              <h2>120+</h2>
              <p>Universities</p>
            </div>
            <div className="card">
              <h2>80+</h2>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}