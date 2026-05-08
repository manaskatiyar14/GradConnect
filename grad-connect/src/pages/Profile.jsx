import "../App.css";
import pp11 from "../Photos/pp11.jpg";

export default function Profile() {

    const user = {
        name: "Nagendra",
        email: "nagenderjind@gmail.com",
        role: "B.Tech CSAI Student",
        university: "Rishihood University",
        photo: pp11
    };

    return (
     <div className="profile-page">
         <div className="profile-card">
               <div className="left-profile">
                <img src={user.photo} alt="profile" />
                    <h1>{user.name}</h1>
                    <p className="role">{user.role}</p>
                    <p className="university">{user.university}</p>
                    <div className="left-buttons">
                    <button>Edit Profile</button>
                     <button>Message</button>
                    </div>
                    <p className="email">{user.email}</p>
                </div>
                <div className="right-profile">
                <h2>About Me</h2>
                   <p className="about">
                        Passionate Computer Science and Artificial Intelligence student 
                        focused on building modern web applications, solving real world 
                        problems, and creating beautiful user experiences with React, 
                        JavaScript and AI technologies.
                    </p>
                    <div className="profile-links">
                        <button>GitHub</button>
                        <button>Portfolio</button>
                        <button>Resume</button>
                        <button>Projects</button>
                        <button>Achievements</button>
                        <button>LinkedIn</button>
              </div>
             </div>
           </div>
        </div>
    );

}