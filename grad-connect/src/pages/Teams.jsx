import { useState } from "react";
import CreateTeam from "../component/CreateTeam";
import TeamList from "../component/TeamList";
import StudentList from "../component/StudentList";
import "../App.css";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const addTeam = (team) => {
    setTeams([...teams, team]);
  };

  const joinTeam = (index) => {
    alert("Joined " + teams[index].name);
  };

  return (
    <div className="teams-page">
      <CreateTeam addTeam={addTeam} />
      <TeamList teams={teams} joinTeam={joinTeam} />
      <StudentList />
    </div>
  );
}