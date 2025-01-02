import "./App.css";

const skillsList = [
  {name: "Java", color: "red", level: "intermediate"},
  {name: "Angular", color: "blue", level: "ok"},
  {name: "SQL", color: "green", level: "intermediate"},
  {name: "Git", color: "purple", level: "ok"},
  {name: "React", color: "blue", level: "beginner"}
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./Capture d'écran 2024-04-29 133700.png" alt="avatar"></img>
      <h1 className="data">Marie Koscianski-Ducharlet</h1>
    </div>
  );
}

function Intro() {
  return (
    <div>
      Full-Stack Java developper, metalhead and mom!
    </div>
  )
}

function SkillList() {
  const skills = skillsList;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.name} color={skill.color} level={skill.level} key={skill.name}/>
      ))}
    </div>
  )
}

function Skill({skill, color, level}) {

  const getEmote = (level) => {
    switch(level) {
      case "beginner":
        return "👶";
      case "ok":
        return "👍";
      case "intermediate":
        return "💪";
        case "advanced":
          return "🚀"; 
      default:
        return "❓";
    }
  }


  return (
    <div className="skill" style={{backgroundColor: color}}> 
      {skill} {getEmote(level)}
    </div>
  )
}

export default App;
