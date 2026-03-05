import { Fade } from "react-awesome-reveal";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import profile from "./assets/profile.png"
import { useEffect, useState } from "react";

const About = () => {

   const [randomZ, setRandomZ] = useState(0);
    useEffect(() =>{
        const define = Math.ceil(Math.random() * 100)
        if(define % 2){
            setRandomZ(-1);
        }
        else{
            setRandomZ(1)
        }
    },[])

    const techs = ["HTML", "CSS", "JavaScript", "React.js", "Java", "JDBC", "Hibernate", "Spring Boot", "MySQL", "Git & GitHub", "Postman","Eclipse / VS Code"]

    return ( 
        <div className="session-wrapper">
            <ParallaxProvider>
            <Fade direction='down' fraction={0.3}>
                <div className="about">
                    <h2 className="title">~ About-me</h2>
                    <span className="bio">I'm a self-motivated <strong className='orange'>Full Stack Developer</strong> with hands-on experience in building
responsive and user-focused web applications. I enjoy working across both
front-end and back-end technologies and turning ideas into practical,
scalable solutions.</span>
                    <span className="bio">I am currently pursuing a Bachelor of Engineering in Computer Science (BE-CSE) at <a href='https://internacional.ufrj.br/en/study-at-ufrj' target="_blank" rel='noreferrer' className='orange'>Excel Engineering College.</a>I have gained real-world experience as a
Java Full Stack Intern at <a href='https://bigdatacorp.com.br/sobre-a-bigdatacorp' target="_blank" rel='noreferrer' className='orange'>Test Yantra Software Solutions,</a> where I worked on
end-to-end web application development under professional mentorship and
strengthened my problem-solving and development skills.</span>

                    <span className="bio">My technical skills include:</span>
                    <div className="techs">
                        {techs.map(tech => (
                            <span>{tech}</span>
                        ))}
                        
                    </div>
                    <span className="bio" style={{marginTop: '10px'}}>Beyond coding, I enjoy learning new technologies, improving my development
workflow, and collaborating with teams to build meaningful software solutions.</span>
                </div>
            </Fade>
            <Parallax className="photos" speed={-17}>
                <div className="ball" style={{bottom: 0, left: 0, marginBottom: '-50px', marginLeft: '-50px', zIndex: randomZ}}/>
                <div className="ball" style={{top: 0, right: 0, marginTop: '-50px', marginRight: '-50px', zIndex: randomZ * -1}}/>
                <div className="photo-wrapper">
                    <img src={profile} alt="" />
                </div>
            </Parallax>
            </ParallaxProvider>
        </div> 
    );
}
 
export default About;