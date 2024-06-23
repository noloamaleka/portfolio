import './Hero.css';
import { useTheme } from '../../components/ThemeContext';
import heroimage from '../../assets/heroimage.png';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import Hello from '../../assets/Hello.gif';

function Hero() {
    const { theme } = useTheme();
    const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <div className={`Container ${theme}`} id="home">
        <div className="hero-text">
        <p>
         Hello there <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
         <h1>Lehlohonolo Maleka</h1>
        <h3>Software Development Student | Front-End Developer | Aspiring DevOps Engineer</h3>
        <p className="small-resume">3rd Year IT Student</p>
               
        <button className="button" onClick={scrollToContact}>
        Contact </button>

         <div className="social-media">
        <a
        href="https://www.linkedin.com/in/lehlohonolo-abel-maleka"
        target="_blank"
        rel="noreferrer"
        >
        <img src={linkedin} alt="LinkedIn" />
        </a>

        <a
        href="https://github.com/noloamaleka/"
        target="_blank"
        rel="noreferrer"
        >
        <img src={githubIcon} alt="GitHub" />
        </a>
        </div>
        </div>

            <div className="hero-image">
                <img src={heroimage} alt="heroimg" />
            </div>
        </div>
    );
}

export { Hero };
