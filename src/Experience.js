import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Experience = () => {

    const defaultTexts = [


        // {
        //     title: "COMPANY NAME 3",
        //     role: " ROLL  NAME ",
        //     date: 'JUN 2023 - NOW 2026',
        //     task: [
        //         "---add task --- ",
        //         "---add task---- "
        //     ]
        // },
        // {
        //     title: "COMPANY NAME 2 ",
        //     role: " ROLL  NAME ",
        //     date: 'JUN 2023 - NOW 2026',
        //     task: [
        //         "---add task --- ",
        //         "---add task---- "
        //     ]
        // },
        {
            title: "JSPIDERS",
            role: "java developer intern",
            date: 'JAN 2025 - AUG 2025',
            task: [
                "Completed hands-on training in Core Java, JDBC, Servlets, and SQL, developing mini-projects following object-oriented programming principles.",
                "Built a full-stack web application using HTML, CSS, Java, and MySQL, implementing CRUD operations and database connectivity."
            ]
        },
    ]
        .reverse()

    const [texts, setTexts] = useState(defaultTexts[0])
    const [current, setCurrent] = useState(0)

    return (
        <div className="table-wrapper">
            <Fade direction='left' distance={"30px"}>
                <div className="xp">
                    <h2 className="title">~ experience</h2>
                    <div className="jobs-area">
                        <div className="selector">
                            {defaultTexts.map((item, index) => (
                                (
                                    current === index && (
                                        <div onClick={() => { setTexts(defaultTexts[index]); setCurrent(index) }} className="items-selected"><span>{item.title}</span></div>
                                    )
                                )
                                ||
                                (
                                    <div onClick={() => { setTexts(defaultTexts[index]); setCurrent(index) }} className="items">
                                        <span>{item.title}</span>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="table-infos">
                            <span className='table-title'><strong>{texts.role}</strong> <strong className="orange">@ {texts.title}</strong></span>
                            <span className="table-duration">{texts.date}</span>
                            <div className="table-all-tasks">
                                {texts.task.map((value, index) => {
                                    if (value.includes("<a>")) {
                                        return (
                                            <span key={index} className="table-task">
                                                {value.split('<a>')[0]}
                                                <a href={value.split('href=')[1]} target="_blank" rel="noreferrer" className="orange">{value.split('<a>')[1].split('</a>')[0]}</a>
                                                {value.split('</a>')[1].split('href=')[0]}
                                            </span>
                                        )
                                    }
                                    return <span key={index} className="table-task">{value}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Experience;