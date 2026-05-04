import { useState } from "react";

export default function CreateTeam({ addTeam }) {
  const [teamName, setTeamName] = useState("");

  const handleCreate = () => {
    if (!teamName) return;

    addTeam({ name: teamName });
    setTeamName("");
  };

  return (
    <div className="section">
      <h2>Create Team</h2>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}