import React, { useEffect, useState } from 'react';

const About = () => {
    const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false, false]);

    useEffect(() => {
        const timeouts = visibleParagraphs.map((_, index) =>
            setTimeout(() => {
                setVisibleParagraphs((prev) => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                });
            }, index * 300) // Delay each paragraph fade-in by 300ms
        );

        return () => timeouts.forEach((timeout) => clearTimeout(timeout)); // Cleanup timeouts on unmount
    }, []);

    return (
        <section id="section1" className="min-h-screen md:pt-28 pt-20 leading-relaxed relative">
            <h2 className="text-2xl font-bold mb-4 md:hidden">About</h2>
            <p
                className={`transition-opacity duration-1000 ease-in ${
                    visibleParagraphs[0] ? 'opacity-100' : 'opacity-0'
                }`}
            >
                I am a skilled Full-Stack Web Developer with a proven track record at 
                <a className="font-bold" href="https://area15.com/" rel="noreferrer" target="_blank"> AREA15</a>, 
                <a className="font-bold" href="https://strategy9.com/" rel="noreferrer" target="_blank"> Strategy9</a>, and 
                <a className="font-bold" href="https://depthcomplexity.com/" rel="noreferrer" target="_blank"> J Taylor Education</a>. 
                With a BS in Applied Computing and certifications in full-stack development and 
                <a className="font-bold" href="https://aws.amazon.com/certification/certified-developer-associate/" rel="noreferrer" target="_blank"> AWS</a>, 
                I specialize in building user-focused, scalable solutions using technologies like MERN/next.js, Python, C#/.NET, and WordPress/PHP. 
                My expertise spans immersive games, virtual education platforms, and custom business tools, delivering innovative solutions tailored to diverse needs.
            </p>
            <p
                className={`mt-4 transition-opacity duration-1000 ease-in ${
                    visibleParagraphs[1] ? 'opacity-100' : 'opacity-0'
                }`}
            >
                At <a className="font-bold" href="https://area15.com/" rel="noreferrer" target="_blank">AREA15</a>, 
                I create and maintain cutting-edge web applications, integrating technologies like WebXR, AR, and Next.js to enhance user experiences. 
                I design responsive platforms, develop custom WordPress plugins, and streamline operations using APIs such as Stripe, HubSpot, 
                and Ticketure. With over five years of experience, I combine technical proficiency with strategic problem-solving to deliver impactful results.
            </p>
            <p
                className={`mt-4 transition-opacity duration-1000 ease-in ${
                    visibleParagraphs[2] ? 'opacity-100' : 'opacity-0'
                }`}
            >
                My journey includes leading innovative projects, such as an SMS-based valet system, virtual queues, casino marketing, 
                and gaming reward systems at <a className="font-bold" href="https://strategy9.com/" rel="noreferrer" target="_blank">Strategy9 </a> 
                and scalable virtual education platforms at <a className="font-bold" href="https://depthcomplexity.com/" rel="noreferrer" target="_blank">J Taylor Education</a>. 
                Whether optimizing infrastructure, enhancing user experiences, or driving customer engagement, I bring a results-driven 
                approach and a passion for turning complex challenges into seamless solutions.
            </p>
            <p
                className={`mt-4 transition-opacity duration-1000 ease-in ${
                    visibleParagraphs[3] ? 'opacity-100' : 'opacity-0'
                }`}
            >
                In my spare time, you can catch me at the Pokemon and Magic the Gathering tables. I also enjoy taking road trips to Disneyland, 
                hiking trips up in the mountains, and growing exotic fruits in the backyard.
            </p>
        </section>
    );
};

export default About;
