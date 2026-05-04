import "../App.css";
import { useState } from "react";
import Chatbox from "../component/Chatbox";

const alumniData = [
  {
    name: "Arjun Mehta",
    role: "Software Engineer",
    company: "Google",
    batch: "2018",
    location: "Bangalore, India",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Microsoft",
    batch: "2017",
    location: "Hyderabad, India",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rahul Nair",
    role: "Data Scientist",
    company: "Amazon",
    batch: "2019",
    location: "Seattle, USA",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "UX Designer",
    company: "Adobe",
    batch: "2018",
    location: "Mumbai, India",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];//// yaad rakhna abhi api se replce karna hai ye dummy data


export default function Alumni() {
    const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="alumni-section">
      <h2>Our Alumni</h2>

      <div className="alumni-grid">
        {alumniData.map((person, index) => (
          <div className="card" key={index}>
            <img src={person.img} alt="profile" />

            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <p className="company">{person.company}</p>

            <p>Batch of {person.batch}</p>
            <p>{person.location}</p>

           <button onClick={() => setSelectedUser(person)}>
                Connect
            </button>
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