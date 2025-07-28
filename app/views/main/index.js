import React, { useEffect, useState, useRef } from "react";
import About from '../../components/about';
import Education from '../../components/education';
import Experience from '../../components/experience';
import Projects from '../../components/projects';
import Skills from '../../components/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { motion, useScroll} from "motion/react";
import Cursor from '../../components/cursor';

const Main = () => {

    //#region consts
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("section1");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const rightColumnRef = useRef(null);
    const [chatOpen, setChatOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [chatHistory, setChatHistory] = useState([{sender: "Kevbot", message: "Hello, I am Kevbot. Chat with me to learn more about Kevin!"}]);
    const chatEndRef = useRef(null);
    //#endregion

    //#region makeCall
    const MakeCall = async () => {
        setChatHistory(p => [...p, { 'sender': 'You', 'message': prompt }]);
        const res = await axios.post('/api/openai', {input: prompt});
        if(res.data.statusCode === 200){
            setChatHistory(p => [...p, { 'sender': 'Kevbot', 'message': res.data.data }]);
            setPrompt("");
        } else {
            setChatHistory(p => [...p, { 'sender': 'Kevbot', 'message': 'Something went wrong. Please try again.' }]);
        };
    };
    //#endregion

    //#region useEffetChat
    useEffect(() => {
        if (chatEndRef.current && chatOpen) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        };
    }, [chatHistory, chatOpen]);
    //#endregion

    //#region useEffectMouse
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    //#endregion

    //#region useEffectScroll
    useEffect(() => {
        // Attach the scroll event listener to the right column
        const rightColumn = rightColumnRef.current;
        const handleScroll = () => {
            if (rightColumn) {
                setShowScrollTop(rightColumn.scrollTop > 300);

                const sections = ["section1", "section2", "section3", "section4", "section5"];
                sections.forEach((sectionId) => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                            setActiveSection(sectionId);
                        };
                    };
                });
            };
        };

        if (rightColumn) {
            rightColumn.addEventListener("scroll", handleScroll);
        };

        return () => {
            if (rightColumn) {
                rightColumn.removeEventListener("scroll", handleScroll);
            };
        };
    }, []);
    //#endregion

    //#region ScrollToTop
    const scrollToTop = () => {
        if (rightColumnRef.current) {
            rightColumnRef.current.scrollTo({ top: 0, behavior: "smooth" });
        };
    };
    //#endregion

    //#region Nav
    const handleNavigation = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };
    //#endregion

    return (
        <div
            id="background"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(103, 94, 224, 0.15), transparent 30%)`,
            }}
            className="h-screen overflow-hidden"
        >
            
            <Cursor />

            <div className="flex h-full">
                <div className="hidden md:flex flex-col justify-start items-start text-white w-2/4 p-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl title">Kevin Chancey</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-xl mt-2 subtitle">Full-Stack Developer</p>
                    </motion.div>
                    <p className="mt-5 phrase lg:w-1/2 md:w-3/4">I craft elegant solutions for complex problems, from front to back.</p>

                    <nav className="mt-8 space-y-4">
                        <button
                            onClick={() => handleNavigation("section1")}
                            className={`block hover:text-white ${activeSection === "section1" ? "active" : ""}`}
                        >
                            ABOUT
                        </button>
                        <button
                            onClick={() => handleNavigation("section2")}
                            className={`block hover:text-white ${activeSection === "section2" ? "active" : ""}`}
                        >
                            EXPERIENCE
                        </button>
                        <button
                            onClick={() => handleNavigation("section3")}
                            className={`block hover:text-white ${activeSection === "section3" ? "active" : ""}`}
                        >
                            EDUCATION
                        </button>
                        <button
                            onClick={() => handleNavigation("section4")}
                            className={`block hover:text-white ${activeSection === "section4" ? "active" : ""}`}
                        >
                            PROJECTS
                        </button>
                        <button
                            onClick={() => handleNavigation("section5")}
                            className={`block hover:text-white ${activeSection === "section5" ? "active" : ""}`}
                        >
                            SKILLS
                        </button>
                    </nav>

                    <div className="mt-20">
                        <div className="flex items-center gap-5 justify-center">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-chancey"><img src="/linkedin.svg" alt="LinkedIn" width={23} title="LinkedIn" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.github.com/R2DEV0"><img src="/github.svg" alt="Github" width={25} title="Github" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kevchancey/"><img src="/insta.svg" alt="Instagram" width={25} title="Instagram" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kevinr.chancey"><img src="/facebook.svg" alt="Facebook" width={23} title="Facebook" /></a>
                        </div>
                        <div className="mt-5">
                            <a rel="noreferrer" target="_blank" href="/KevinChanceyResume.pdf"><span className="font-bold tx-white hover:text-white">View My Resume</span> ↗</a>
                        </div>
                    </div>

                </div>

                {/* Right Side: Scrollable Content */}
                <div ref={rightColumnRef} className="flex-1 overflow-y-auto tx-white md:pl-10 md:pr-40 px-5">
                    <div className="md:hidden mt-8">
                        <h1 className="text-3xl font-bold">Kevin Chancey</h1>
                        <p className="text-lg mt-2 subtitle">Full-Stack Developer</p>
                        <p className="mt-4 text-sm phrase">Crafting elegant solutions for complex problems, from front to back.</p>
                    </div>
                    
                    <About />
                    
                    <Experience />
                    
                    <Education />
                    
                    <Projects />

                    <Skills/>

                    <div className="md:hidden mt-10 mb-10">
                        <div className="flex items-center gap-5 justify-start">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-chancey"><img src="/linkedin.svg" alt="LinkedIn" width={23} title="LinkedIn" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.github.com/R2DEV0"><img src="/github.svg" alt="Github" width={25} title="Github" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kevchancey/"><img src="/insta.svg" alt="Instagram" width={25} title="Instagram" /></a>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kevinr.chancey"><img src="/facebook.svg" alt="Facebook" width={23} title="Facebook" /></a>
                        </div>
                        <div className="pt-5">
                            <a rel="noreferrer" target="_blank" href="/KevinChanceyResume.pdf"><span className="font-bold tx-white hover:text-white">View My Resume</span> ↗</a>
                        </div>
                    </div>
                    
                </div>
            </div>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 md:right-8 right-3 p-3 w-[50px] bg-gray-300 rounded-lg text-white shadow-lg hover:bg-gray-500 transition-opacity bg-opacity-60"
                    aria-label="Scroll to top"
                >
                    <img src="/up.png" className="w-full" />
                </button>
            )}
            {chatOpen && (
                <div className="chat-body fixed bottom-3 text-gray-400 right-3 md:right-8 bg-gray-800 border border-gray-300 shadow-lg rounded-lg px-4 py-3 w-80 z-50">
                    <div className="chat-header flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Chat</h3>
                            <button
                                type="button"
                                className="close-chat text-gray-200"
                                onClick={() => setChatOpen(false)}
                            >
                            <FontAwesomeIcon icon={faClose} className="text-lg" />
                        </button>
                    </div>
                    <div className="chat-sec mt-4 flex flex-col justify-start w-full items-center h-64 overflow-y-auto">
                        {chatHistory.map((chat, i) => (
                            <div key={i} className={`p-2 mb-2 chat-box ${chat.sender === "You" ? "text-right self-end" : "text-left"}`}>
                                <p className="text-gray-300"><strong>{chat.sender}</strong></p>
                                <p className="mt-1">{chat.message}</p>
                            </div>
                        ))}
                        <div ref={chatEndRef}></div>
                    </div>
                    <div className="input-sec mt-4 flex flex-col items-center">
                        <input
                            type="text"
                            className="chat-input w-full text-gray-900 bg-gray-300 hover:bg-gray-400 p-2 rounded"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <div className="mt-2 flex items-center justify-between w-full">
                            <button
                                type="button"
                                className="submit-button w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                                onClick={MakeCall}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!chatOpen && (
                <button
                    type="button"
                    className="open-chat fixed md:bottom-3 md:right-8 bottom-3 right-3 bg-gray-500 hover:bg-gray-300 text-white hover:text-gray-600 px-3 py-3 rounded-lg bg-opacity-80 transition-all duration-300"
                    onClick={() => setChatOpen(true)}
                >
                    <FontAwesomeIcon icon={faComment} className='text-2xl'/>
                </button>
            )}
        </div>
    );
};

export default Main;