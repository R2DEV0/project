import React, { useEffect, useState, useRef } from "react";
import About from '../../components/about';
import Education from '../../components/education';
import Experience from '../../components/experience';
import Projects from '../../components/projects';

const Main = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const rightColumnRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // Attach the scroll event listener to the right column
        const rightColumn = rightColumnRef.current;
        const handleScroll = () => {
            if (rightColumn) {
                setShowScrollTop(rightColumn.scrollTop > 300);

                const sections = ["section1", "section2", "section3", "section4"];
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

    const scrollToTop = () => {
        if (rightColumnRef.current) {
            rightColumnRef.current.scrollTo({ top: 0, behavior: "smooth" });
        };
    };

    const handleNavigation = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    return (
        <div
            id="background"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(103, 94, 224, 0.15), transparent 30%)`,
            }}
            className="h-screen overflow-hidden"
        >
            <div className="flex h-full">
                <div className="hidden md:flex flex-col justify-start items-start text-white w-2/4 p-28">
                    <h1 className="text-5xl title">Kevin Chancey</h1>
                    <p className="text-xl mt-2 subtitle">Full-Stack Developer</p>
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
                        {/* <button
                            onClick={() => handleNavigation("section4")}
                            className={`block hover:text-white ${activeSection === "section4" ? "active" : ""}`}
                        >
                            PROJECTS
                        </button> */}
                    </nav>

                    <div className="flex items-center gap-5 justify-center mt-20">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-chancey-a736169b/"><img src="/linkedin.svg" alt="LinkedIn" width={23} title="LinkedIn" /></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/R2DEV0"><img src="/github.svg" alt="Github" width={25} title="Github" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kevchancey/"><img src="/insta.svg" alt="Instagram" width={25} title="Instagram" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kevinr.chancey"><img src="/facebook.svg" alt="Facebook" width={23} title="Facebook" /></a>
                    </div>
                    <div className="mt-5">
                        <a rel="noreferrer" target="_blank" href="/KevinChanceyResume.pdf"><span className="font-bold tx-white hover:text-white">View My Resume</span> ↗</a>
                    </div>

                </div>

                {/* Right Side: Scrollable Content */}
                <div ref={rightColumnRef} className="flex-1 overflow-y-auto tx-white md:pl-10 md:pr-40 px-5">
                    <div className="md:hidden pt-8">
                        <h1 className="text-3xl font-bold">Kevin Chancey</h1>
                        <p className="text-lg mt-2 subtitle">Full-Stack Developer</p>
                        <p className="mt-4 text-sm phrase">Crafting elegant solutions for complex problems, from front to back.</p>
                    </div>
                    
                    <About />
                    
                    <Experience />
                    
                    <Education />
                    
                    {/* <Projects /> */}

                    <div className="md:hidden flex items-center gap-5 justify-start mt-10">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-chancey-a736169b/"><img src="/linkedin.svg" alt="LinkedIn" width={23} title="LinkedIn" /></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/R2DEV0"><img src="/github.svg" alt="Github" width={25} title="Github" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kevchancey/"><img src="/insta.svg" alt="Instagram" width={25} title="Instagram" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kevinr.chancey"><img src="/facebook.svg" alt="Facebook" width={23} title="Facebook" /></a>
                    </div>
                    <div className="md:hidden mt-5 mb-10">
                        <a rel="noreferrer" target="_blank" href="/KevinChanceyResume.pdf"><span className="font-bold tx-white hover:text-white">View My Resume</span> ↗</a>
                    </div>
                    
                </div>
            </div>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-3 md:right-8 right-3 p-3 w-[50px] bg-gray-300 rounded-lg text-white shadow-lg hover:bg-gray-500 transition-opacity bg-opacity-60"
                    aria-label="Scroll to top"
                >
                    <img src="/up.png" className="w-full" />
                </button>
            )}
        </div>
    );
};

export default Main;
