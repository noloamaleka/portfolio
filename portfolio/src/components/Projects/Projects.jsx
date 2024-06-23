import ScrollEvent from "../../components/ScrollEvent";
import './Projects.css';
import externalLink from "../../assets/external-link.svg";

// Defined the Project component
function Project({ title, description, techList, link }) {
  return (
    <ScrollEvent animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={externalLink} alt="Visit site" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {techList.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </ScrollEvent>
  );
}

function Projects() {
  // Defining the project data using an object array
  const projects = [
    {
      title: "Student Management System - Management System",
      description: "This is a student management system developed in my second year. The goal of this project was to enable the staff admin to manage student records.",
      techList: ["C#", ".NET Core", "SQL Server"],
      link: "https://github.com/noloamaleka/CRUD_Operations_Student_Management_Application"
    },
    {
      title: "BugBlitz - Bug and Issue Tracker System",
      description: "This is a bug tracking system that allows staff to log bugs onto the system so that the bugs can be tracked and resolved.",
      techList: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/noloamaleka/Bug_Tracker_System"
    },
    {
      title: "Plant Incident Analysis - Dashboard",
      description: "This is a plant incident dashboard that uses KPI metrics to highlight and provide statistical analysis on the number of incident occurances at a specific manufacturing plant over a period of years.",
      techList: ["Excel", "PowerBI"],
      link: "https://github.com/noloamaleka/Plant-Incident-Analysis-Dashboard"
    },
    {
      title: "Employee Fullstack Application - Backend and Frontend Application",
      description: "This is fullstack employee directory application developed in react, mongodb and expressjs. The application allows employee payroll information to be retrieved from the directory according to the department which the employee belongs to.",
      techList: ["ReactJs", "ExpressJs", "Nodejs", "MongoDB"],
      link: "https://github.com/noloamaleka/Employee-FullStack-Application"
    },
    {
      title: "To Do List - React Application",
      description: "A react application that makes use of an API and fetches a list of Todos and indicates which todos have been completed and which have not been completed by displaying the completed Todos with a green border and the incomplete Todos in red.",
      techList: ["ReactJs", "CSS"],
      link: "https://github.com/noloamaleka/To-Do-List-Appplication"
    },
    {
      title: "Weather Application - React Application",
      description: "A weather application developed in react which uses an API from OpenWeather to fetch the current weather of a specified city.",
      techList: ["ReactJs", "NodeJs", "CSS"],
      link: "https://github.com/noloamaleka/Weather-Application"
    },
    {
      title: "Grocery List - React Application",
      description: "A grocery list form developed in react that allows a user to input an item and add the item to a grocery list category.",
      techList: ["ReactJs", "CSS", ],
      link: "https://github.com/noloamaleka/Grocery-List-Form-"
    },
    {
      title: "Sports Competition Winners - A Data Analytics Dashboard",
      description: "This is a dashboard created to display predictive analytics for the winners from the European Champions League. Leveraging Microsoft Power BI, this project made use of ETL processes to create an interactive dashboard.",
      techList: ["Microsoft Power BI", "SQL", "Database"],
      link: "https://github.com/noloamaleka/Sports-Competition-Winners-Dashboard"
    },
  ];

  return (
    <div id="project" className="container">
      <h2>My Projects</h2>
      <div className="projects">
        {/* Mapping through the projects array and rendering the project components */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
