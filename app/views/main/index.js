import React, { useEffect, useState, useRef } from "react";
import Facebook from '../../../public/facebook.svg';

const Main = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("");
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
        if (rightColumn) {
            rightColumn.addEventListener("scroll", handleScroll);
        };

        return () => {
            if (rightColumn) {
                rightColumn.removeEventListener("scroll", handleScroll);
            };
        };
    }, []);

    const handleScroll = () => {
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
                        <button
                            onClick={() => handleNavigation("section4")}
                            className={`block hover:text-white ${activeSection === "section4" ? "active" : ""}`}
                        >
                            PROJECTS
                        </button>
                    </nav>

                    <div className="flex items-center gap-5 justify-center mt-20">
                        <img src="/linkedin.svg" alt="LinkedIn" width={23} title="LinkedIn" />
                        <img src="/github.svg" alt="Instagram" width={25} title="Github" />
                        <img src="/insta.svg" alt="Instagram" width={25} title="Instagram" />
                        <img src="/facebook.svg" alt="Facebook" width={23} title="Facebook" />
                    </div>
                </div>

                {/* Right Side: Scrollable Content */}
                <div ref={rightColumnRef} className="flex-1 overflow-y-auto text-white md:px-10 px-10">
                    <div className="md:hidden pt-8">
                        <h1 className="text-3xl font-bold">Kevin Chancey</h1>
                        <p className="text-lg mt-2 subtitle">Full-Stack Developer</p>
                        <p className="mt-4 text-sm phrase">Crafting elegant solutions for complex problems, from front to back.</p>
                    </div>
                    <section id="section1" className="h-screen md:pt-28 pt-20">
                        <h2 className="text-2xl font-bold mb-4">Section 1</h2>
                        <p>Content for section 1...</p>
                    </section>
                    <section id="section2" className="h-screen pt-20">
                        <h2 className="text-2xl font-bold mb-4">Section 2</h2>
                        <p>Content for section 2...</p>
                    </section>
                    <section id="section3" className="h-screen py-20">
                        <h2 className="text-2xl font-bold mb-4">Section 3</h2>
                        <p>Content for section 3...</p>
                    </section>
                    <section id="section4" className="h-screen py-20">
                        <h2 className="text-2xl font-bold mb-4">Section 4</h2>
                        <p>Content for section 4...</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Main;
