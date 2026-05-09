import "../App.css";
import { useState } from "react";
import Chatbox from "../component/Chatbox";
import alumni from "../ApiData/Alumnidata.jsx";

export default function Alumni() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("");

  const sortedAlumni = [...alumni].sort((a, b) => {
    if (sortOrder === "high") {
      return b.currentPackage - a.currentPackage;
    }

    if (sortOrder === "low") {
      return a.currentPackage - b.currentPackage;
    }

    return 0;
  });

  return (
    <div className="alumni-section">
      <h2>Our Alumni</h2>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort By Package</option>
        <option value="high">Highest to Lowest</option>
        <option value="low">Lowest to Highest</option>
      </select>

      <div className="alumni-grid">
        {sortedAlumni.map((person, index) => (
          <div className="card" key={index}>
            <img src={person.photo} alt="profile" />

            <div className="card-info">
              <h3>{person.name}</h3>

              <p className="company">{person.company}</p>

              <p>{person.domain}</p>

              <p>Batch: {person.batch}</p>

              <p>Package: {person.currentPackage} LPA</p>

              <button className="show-btn">
                Show More
              </button>

              <button onClick={() => setSelectedUser(person)}>
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <Chatbox
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}