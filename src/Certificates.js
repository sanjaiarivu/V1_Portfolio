import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import AdvSQL from "./assets/AdvSQL.png";
import GeminiStudent from "./assets/GeminiStudent.jpg";
import JSP from "./assets/JSP.jpg";
import AWS from "./assets/AWS.jpg";
import DataAnalytics from "./assets/DataAnalytics.jpg";
import gitUnstop from "./assets/gitUnstop.jpg";
import NISM from "./assets/NISM.jpg";

const Certificates = () => {
    const certificatesRef = useRef(null);

    const certificates = [
        {
            name: "Advanced SQL For Data Science",
            issuedBy: "Linkedin Learning",
            issueDate: "July 2026",
            image: AdvSQL,
            accent: "certificate-card-orange",
        },
        {
            name: "Gemini Certified Student",
            issuedBy: "Google for Education",
            issueDate: "May 2026",
            image: GeminiStudent,
            accent: "certificate-card-blue",
        },
        {
            name: "Java Full Stack Development",
            issuedBy: "Jspiders",
            issueDate: "July 2025",
            image: JSP,
            accent: "certificate-card-green",
        },
        {
            name: "AWS AI Practitioner Challenge",
            issuedBy: "UDACITY",
            issueDate: "Apr 2026",
            image: AWS,
            accent: "certificate-card-green",
        },
        {
            name: "Introduction to Data Analytics",
            issuedBy: "Simplilearn",
            issueDate: "June 2026",
            image: DataAnalytics,
            accent: "certificate-card-green",
        },
         {
            name: "Git & GitHub Workshop",
            issuedBy: "Unstop",
            issueDate: "Nov 2025",
            image: gitUnstop,
            accent: "certificate-card-green",
        },
         {
            name: "National Financial Literacy Test",
            issuedBy: "NISM",
            issueDate: "Feb 2026",
            image: NISM,
            accent: "certificate-card-green",
        },
    ];

    const scrollCertificates = (direction) => {
        if (!certificatesRef.current) {
            return;
        }

        const card = certificatesRef.current.querySelector(".certificate-card");
        const scrollDistance = card ? card.offsetWidth + 22 : 340;

        certificatesRef.current.scrollBy({
            left: direction === "left" ? -scrollDistance : scrollDistance,
            behavior: "smooth",
        });
    };

    return (
        <div className="certificates-wrapper">
            <div className="certificates">
                <h2 className="title">~ certificates</h2>
                <Fade cascade damping={0.18} triggerOnce>
                    <div className="certificates-carousel">
                        <button
                            className="certificate-scroll-button certificate-scroll-left"
                            type="button"
                            aria-label="Scroll certificates left"
                            onClick={() => scrollCertificates("left")}
                        >
                            <KeyboardArrowLeftIcon />
                        </button>
                        <div className="certificates-area" ref={certificatesRef}>
                            {certificates.map((item) => (
                                <div className="certificate-card" key={item.name}>
                                    <div className={`certificate-image ${item.accent}`}>
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} />
                                        ) : (
                                            <>
                                                <div className="certificate-image-glow" />
                                                <WorkspacePremiumIcon className="certificate-icon" />
                                                <span>Certificate</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="certificate-content">
                                        <h3>{item.name}</h3>
                                        <span>Issued by {item.issuedBy}</span>
                                        <span>{item.issueDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="certificate-scroll-button certificate-scroll-right"
                            type="button"
                            aria-label="Scroll certificates right"
                            onClick={() => scrollCertificates("right")}
                        >
                            <KeyboardArrowRightIcon />
                        </button>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Certificates;
