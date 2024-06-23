import "./About.css";
import ScrollEvent from "../../components/ScrollEvent";
import aboutimage from "../../assets/aboutimage.jpg";

function About() {
  return (
    <div id="about" className="container">
      <div className="about-text">
      
        <ScrollEvent>
          <h2 className="fade-in">More About Me</h2>
          <ScrollEvent>
        <div className="about-image fade-in-right">
          <img src={aboutimage} alt="Lehlohonolo Maleka" />
        </div>
      </ScrollEvent>
          <h3 className="fade-in">Curious to know about me? Okay, let's get into it.</h3>
        </ScrollEvent>

        <ScrollEvent>
          <p className="fade-in">
            I'm Lehlohonolo Maleka, a final year IT student and software development student with a passion for using technology to change the world. My interests include Front-End Development, Cloud Computing, and DevOps. I would describe myself as someone who is highly motivated, adaptable and approaches challenges with enthusiasm.
          </p>
        </ScrollEvent>

        <ScrollEvent>
          <p className="fade-in" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            I began my tech journey in 2022. As a result of my curiosity and new found interest in tech, I enrolled to study a Diploma in Information Technology at Belgium Campus ITversity in Pretoria, South Africa. While studying, I developed an interest in Front-End Development, Cloud Computing and DevOps. I am constantly on a journey of growth as developer, always ready to take on new challenges and learn the latest technologies along the way.
          </p>
        </ScrollEvent>

        <ScrollEvent>
          <p className="fade-in">
            Now, I am honing my skills using Web Technologies such as HTML5, CSS, JavaScript, and React.js. I'm also learning DevOps technologies, CI/CD and Git and Cloud computing technologies such as Azure and AWS.
          </p>
        </ScrollEvent>

        <ScrollEvent>
          <h3 className="fade-in">Here are my main tech skills and tools:</h3>
        </ScrollEvent>

        <div className="hard-skills">
          <ScrollEvent>
            <button className="skill-button">Azure Cloud</button>
            <button className="skill-button">AWS Cloud</button>
            <button className="skill-button">SQL Server</button>
            <button className="skill-button">C# .Net </button>
            <button className="skill-button">Power BI</button>
            <button className="skill-button">Figma</button>
            <button className="skill-button">HTML5</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">CSS</button>
            <button className="skill-button">React.js</button>
            <button className="skill-button">Node.js</button>
            <button className="skill-button">Express.js</button>
            <button className="skill-button">Arduino</button>
          </ScrollEvent>
            </div>
        </div>
    
      
    </div>
  );
}

export default About;
