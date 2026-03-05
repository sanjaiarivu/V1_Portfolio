import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Description";

const Header = () => {
    return ( 
        <div className="header-wrapper">
        <div className="header">
          <div className="nav">
            <span onClick={() => {window.scrollTo(0, 0)}}>Sanjai Arivu</span>
          </div>
          <div className="links">
            <a href="https://linkedin.com/in/sanjai-arivu" target="_blank" rel='noreferrer'>
              <LinkedInIcon className='icon'/>          
            </a>
            <a href="https://github.com/sanjaiarivu" target="_blank" rel='noreferrer'>
              <GitHubIcon className='icon'/>          
            </a>
            <a href="/resume.pdf" target="_blank" rel='noreferrer'>
              <ResumeIcon className='icon'/>
            </a>
          </div>
        </div>
      </div>

    );
}
 
export default Header;