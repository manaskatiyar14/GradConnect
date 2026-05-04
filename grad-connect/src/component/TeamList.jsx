export default function TeamList({ teams, joinTeam }) {
  return (
    <div className="section">
      <h2>Available Teams</h2>

      <div className="team-list">
        {teams.length === 0 ? (
          <p>No teams yet</p>
        ) : (
          teams.map((team, index) => (
            <div className="team-card" key={index}>
              <h3>{team.name}</h3>
              <button onClick={() => joinTeam(index)}>Join</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}