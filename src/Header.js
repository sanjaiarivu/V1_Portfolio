import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Description";

const Header = () => {
    return ( 
        <div className="header-wrapper">
        <header className="header">
          <div className="nav">
            <a href="#home" aria-label="Sanjai Arivu home">Sanjai Arivu</a>
          </div>
          <nav className="links" aria-label="Social links">
            <a href="https://linkedin.com/in/sanjai-arivu" target="_blank" rel='noreferrer' aria-label="Sanjai Arivu on LinkedIn">
              <LinkedInIcon className='icon'/>          
            </a>
            <a href="https://github.com/sanjaiarivu" target="_blank" rel='noreferrer' aria-label="Sanjai Arivu on GitHub">
              <GitHubIcon className='icon'/>          
            </a>
            <a href="/resume.pdf" target="_blank" rel='noreferrer' aria-label="Download Sanjai Arivu's resume">
              <ResumeIcon className='icon'/>
            </a>
          </nav>
        </header>
      </div>

    );
}
 
export default Header;
