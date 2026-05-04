const students = [
  { name: "Manas", skill: "Frontend" },
  { name: "Riya", skill: "Backend" },
  { name: "Aman", skill: "AI/ML" },
];

export default function StudentList() {
  return (
    <div className="section">
      <h2>Students Looking for Team</h2>

      <div className="student-list">
        {students.map((s, i) => (
          <div className="student-card" key={i}>
            <h3>{s.name}</h3>
            <p>{s.skill}</p>
            <button>Invite</button>
          </div>
        ))}
      </div>
    </div>
  );
}