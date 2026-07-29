import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <section className="home-wrapper" id="home" aria-labelledby="home-heading">
            <div className="home">
                <Fade direction="down">
                    <div className="texts">
                        <h1 className="main-title" id="home-heading">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString('Hey,')
                                .pauseFor(500)
                                .typeString(" i'm <strong style='color: #ff5f00'>Sanjai</strong>!")
                                .start();
                            }}
                            />
                        </h1>
                        <span className='subtitle'>I like to build things.</span>
                        <span className='main-description'>Full Stack Developer and Computer Science student. Passionate about technology. I'm always trying to learn something new.</span>
                    </div>
                </Fade>
            </div>     
        </section>
    );
}
 
export default Home;
