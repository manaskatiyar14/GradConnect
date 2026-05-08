import "../App.css";
import { useState } from "react";
import Chatbox from "../component/Chatbox";
import alumni from "../ApiData/Alumnidata.jsx";

export default function Alumni() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="alumni-section">
      <h2>Our Alumni</h2>
      <div className="alumni-grid">
        {alumni.map((person, index) => (
          <div className="card" key={index}>
         <img src={person.photo} alt="profile" />
            <div className="card-info">
             <h3>{person.name}</h3>
        <p className="company">{person.company}</p>
            <p>{person.domain}</p>
              <p>Batch: {person.batch}</p>
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