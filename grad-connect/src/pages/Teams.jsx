import { useEffect, useState } from "react";
import "../App.css";

export default function Internships() {
  const [internshipData, setInternshipData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://gradinternshipapi.onrender.com/api/cars")
      .then((res) => res.json())
      .then((data) => setInternshipData(data))
      .catch((err) => console.log(err));
  }, []);

  const applyInternship = (company) => {
    alert("Applied to " + company);
  };
  const filteredInternships = internshipData.filter((internship) =>
    internship.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="internship-page">
      <h1 className="internship-title">
        Internship Opportunities
      </h1>
      <input
        type="text"
        placeholder="Search company..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="internship-grid">
        {filteredInternships.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <h2>{internship.company}</h2>

            <p>
              <strong>Role:</strong> {internship.role}
            </p>

            <p>
              <strong>Duration:</strong> {internship.duration}
            </p>

            <p>
              <strong>Stipend:</strong> {internship.stipend}
            </p>

            <p>
              <strong>Location:</strong> {internship.location}
            </p>

            <button
              className="apply-btn"
              onClick={() => applyInternship(internship.company)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}