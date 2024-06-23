import './Footer.css';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

function Footer() {
    return (
        <div className="Container" id="footer">
            <a href="https://github.com/noloamaleka" className="logo">
                <span>Nolo </span>
                <span>Maleka</span>
            </a>
            <div>
                <p>
                   All rights reserved &copy; | This site was made with React 
                </p>
            </div>
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
    );
}

export default Footer;
