import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled, { keyframes } from "styled-components";

import wedding from './assets/wedding.png'
import wiki from './assets/wiki.png'
import multiverse from './assets/multiverse.png'
import profileapp from './assets/profileapp.png'



const Projects = () => {

    const projectsInfos = [
        {
            title: 'Fresh mart',
            photo: profileapp,
            description: 'Fresh Mart is a full-stack groceries shopping website designed to provide users with a convenient and efficient online shopping experience for daily essentials. The platform allows customers to browse product categories, view detailed descriptions and prices, add items to their cart, and complete secure checkout, ensuring a smooth and reliable shopping process from selection to delivery.',
            github: 'https://github.com/sanjaiarivu/FreshMart',
            link: 'https://sample',
            tools: [
                'JavaScript',
                'React',
                'Html',
                'Css',


            ]
        },
        {
            title: 'Shop-Zone',
            photo: multiverse,
            description: "Shop-Zone is a full-stack fashion shopping website designed to provide users with a seamless and personalized online shopping experience. The platform enables customers to browse trendy collections, explore detailed product listings, manage their carts, and securely complete purchases, ensuring convenience from discovery to checkout.",
            github: 'https://github.com/sanjaiarivu/Clothing-Ecommerce',
            link: 'https://sample',
            tools: [
                'JavaScript',
                'Html',
                'CSS',
            ]
        },
        {
            title: 'MY love Movies',
            photo: wiki,
            description: 'MY Love Movies is a full-stack web application built using Java, Spring Boot, Thymeleaf, and MySQL, designed for movie enthusiasts to explore and manage their favorite films. The platform enables users to browse movie collections, view detailed information, create personalized watchlists, and securely store data through a robust backend and database integration, delivering a seamless and dynamic user experience.',
            github: 'https://github.com/sanjaiarivu/SpringCRUD',
            link: 'https://sample',
            tools: [

                'Thymeleaf',
                'Html',
                'CSS',
                'Java',
                'Spring boot',
                'My SQL'
            ]
        },
        {
            title: 'Portfolio',
            photo: wedding,
            description: 'My Portfolio is a modern and responsive web application built using React, designed to showcase my projects, technical skills, and achievements in an interactive way. The platform highlights my development experience through dynamic components, smooth navigation, and a clean user interface, providing visitors with a professional overview of my work and capabilities.',
            github: 'https://github.com/sanjaiarivu/portfolio_v1',
            link: 'https://sample',
            tools: [
                'JavaScript',
                'React',
                'Html',
                'Css'
            ]
        }
    ]

    const minorProjects = [
        // {
        //     title: 'tagnalyzer',
        //     description: 'a webapp that provides Last.fm users with detailed insights into their listening habits by analyzing the tags associated with their favorite artists.',
        //     github: 'https://github.com/hugofolloni/tagnalyzer',
        //     link: 'https://tagnalyzer.vercel.app',
        //     tools: [
        //         'TypeScript',
        //         'React',
        //         'Next.js',
        //         'Sass',
        //         'Redux'
        //     ]
        // },
        // {
        //     title: 'react-stars-particles',
        //     description: 'a captivating React component that brings a dynamic and interactive galaxy background to your web pages. With stars that are attracted to the mouse pointer and smooth animations, it offers a unique and engaging user experience.',
        //     github: 'https://github.com/hugofolloni/react-stars-particles',
        //     link: 'https://galaxysimulator.netlify.app',
        //     tools: [
        //         'JavaScript',
        //         'React',
        //         'NodeJS',
        //         'Rollup'
        //     ]
        // },
        // {
        //     title: 'word.zzz',
        //     description: 'a game where you try to guess the word based on your previous attempts, like wordle or term.ooo. It allows user to play non-stop, instead of daily playing like others.',
        //     github: 'https://github.com/hugofolloni/word.zzz',
        //     link: 'https://wordzzz.netlify.app',
        //     tools: [
        //         'JavaScript',
        //         'React',
        //         'Styled Components',
        //     ]
        // },
        // {
        //     title: 'anigme',
        //     description: 'a game to guess who is the anime character behind the blur photo. It uses a public API to select the character and changes it every day.',
        //     github: 'https://github.com/hugofolloni/anigme',
        //     link: 'https://anigme.netlify.app',
        //     tools: [
        //         'JavaScript',
        //         'React',
        //         'Python',
        //         "CSV"
        //     ]
        // },
        // {
        //     title: 'stockglass',
        //     description: 'an implementation of a chess game with Pygame, featuring classes for the game, pieces, and the board. It utilizes algorithms to make computer moves. The game logic manages moves, checks, and interactions, while the graphical interface displays the board and allows interactive gameplay.',
        //     github: 'https://github.com/hugofolloni/wiki-analysis',
        //     link: '',
        //     tools: [
        //         'Python',
        //         'Pygame',
        //         'Numpy',
        //     ]
        // },
        // {
        //     title: 'heyo-discord-bot',
        //     description: 'an interactive bot for Discord that allows users to listen to music, play some games and get infos about weather and space missions.',
        //     github: 'https://github.com/hugofolloni/heyo-discord-bot',
        //     link: '',
        //     tools: [
        //         'JavaScript',
        //         'NodeJS',
        //         'DiscordJS'
        //     ]
        // }
    ]

    return (
        <div className="projects-wrapper" style={{ overflow: 'hidden' }}>
            <div className="projects">
                <h2 className="title">~ projects</h2>
                <div className="projects-area">
                    {
                        projectsInfos.map((item, index) => (
                            <div className="project-container">
                                {(index % 2 === 0
                                    &&
                                    <LeftProject item={item} />)
                                    ||
                                    <RightProject item={item} />
                                }
                            </div>
                        ))
                    }
                </div>

                <MinorProjects projects={minorProjects} />
            </div>
        </div>
    );
}

const LeftProject = (props) => {

    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `

    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(-${size}px)}
    `

    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row;
    `

    useEffect(() => {
        var size = 15;
        for (let i = 0; i < ref.current.children.length / 2; i++) {
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;

    return (
        <Fade style={{ width: '100%', height: '100%' }} direction='right' distance={"30px"}>
            <div className="left-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy" /></div>
                <div className="left-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="left-project-links">
                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon' />
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon' />
                    </a>}
                </div>
                <div className="left-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
        </Fade>
    )
}

const RightProject = (props) => {
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `

    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(${size}px)}
    `


    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
    `

    useEffect(() => {
        var size = 15;
        for (let i = 0; i < ref.current.children.length / 2; i++) {
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;
    console.log(item)
    return (
        <Fade style={{ width: '100%', height: '100%' }} direction='left' distance={"30px"}>
            <div className="right-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy" /></div>
                <div className="right-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="right-project-links">
                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon' />
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon' />
                    </a>}
                </div>
                <div className="right-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
        </Fade>
    )
}

const MinorProjects = (props) => {
    const [minorProjectIndex, setMinorProjectIndex] = useState()

    return (
        <div className="minor-projects-area">
            {props.projects.map((item, index) => (
                <div className="minor-project">
                    <div className="minor-project-title" onClick={() => {
                        if (index !== minorProjectIndex) {
                            setMinorProjectIndex(index);
                        }
                        else {
                            setMinorProjectIndex()
                        }
                    }}>
                        <span className='orange'>{item.title}</span>
                        {(index === minorProjectIndex && <span className="orange">-</span>) || <div className="orange">+</div>}
                    </div>
                    {index === minorProjectIndex && (
                        <Fade direction="down" duration={500}>
                            <div className="minor-project-expand">
                                <span className='minor-project-description'>{item.description}</span>
                                <div className="minor-projects-footer">
                                    <div className="minor-projects-tools">
                                        {item.tools.map((item) => (
                                            <div className='tool'>{item}</div>
                                        ))}
                                    </div>
                                    <div className="minor-projects-links">
                                        {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                                            <LaunchIcon className='icon' />
                                        </a>}
                                        {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                                            <GitHubIcon className='icon' />
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )}
                </div>
            ))
            }
        </div>
    )
}

export default Projects;