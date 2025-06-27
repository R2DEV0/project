import React, { useEffect, useState } from 'react';

const skillSets = [
    <>
        🧠 <strong>Frontend Wizardry:</strong> React, Next.js, Javascript, JQuery, Tailwind/Bootstrap, HTML5, CSS, Design/UI
    </>,
    <>
        🛠️ <strong>Backend Muscle:</strong> Node.js, Express, C#/ASP.NET, WordPress/PHP, SQL, Redis, Strapi CMS, SQL, MongoDB
    </>,
    <>
        ⚡ <strong>API Domination:</strong> Stripe Terminal & Android, Square SDK (Android), REST, GraphQL, Hubspot, Event automation
    </>,
    <>
        ☁️ <strong>Cloud Kung-Fu:</strong> AWS Lambda, SQS, Step Functions, Serverless, Docker, Git (Github/Bitbucket), Netlify, Pantheon.io
    </>
];

const Skills = () => {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prev) => (prev < skillSets.length ? prev + 1 : prev));
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="section5" className="min-h-screen md:pt-28 pt-20 leading-relaxed relative">
            <div className='rounded-xl border border-gray-600 px-5 pb-5'>
                <h2 className="text-2xl font-bold mb-4 md:hidden mt-5">Skills</h2>
                {skillSets.map((text, i) => (
                    <p
                        key={i}
                        className={`transition-opacity duration-700 ease-in mt-5 ${
                            i < visible ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Skills;
