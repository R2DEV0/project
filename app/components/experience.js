import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleSections((prev) => prev.filter((item) => item !== index));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const experienceData = [
    {
      company: 'AREA15',
      role: 'Senior Software Developer',
      duration: 'FEB 2023 — PRESENT',
      description:
        'I currently lead the development and enhancement of diverse projects for area15.com and other entertainment-focused applications. My work includes designing on-site ticketing kiosks, developing immersive games using JavaScript and Next.js, and crafting custom WordPress plugins with PHP and React.js to enhance functionality. I have also integrated APIs such as Stripe, Square, HubSpot, and Strapi to streamline operations and deliver seamless digital experiences.',
      tags: [
        'Next.js',
        'JavaScript',
        'TypeScript',
        'SQL',
        'React.js',
        'Node.js',
        'AWS',
        'HTML & SCSS',
        'PHP',
        'WordPress',
        'APIs',
      ],
      link: 'https://area15.com',
    },
    {
      company: 'Strategy9',
      role: 'Software Developer',
      duration: 'AUG 2021 — OCT 2024',
      description:
        'At Strategy9, I led the development of innovative solutions for the casino industry, enhancing customer outreach and data collection. Highlights include creating an SMS-based valet system, implementing contests and promotions via email and SMS to boost engagement, and overseeing email processes for 800,000+ monthly communications with a focus on compliance and brand consistency. Additionally, I developed sportspool applications that streamlined data collection and enabled data-driven marketing strategies.',
      tags: [
        'C#',
        '.NET Core',
        'JavaScript',
        'Azure',
        'SMS/Email',
        'SQL',
        'HTML & SCSS',
        'Jira',
        'SignalR',
        'Twillio',
        'APIs',
      ],
      link: 'https://strategy9.com/',
    },
    {
      company: 'J Taylor Education',
      role: 'Lead Software Developer',
      duration: 'JUN 2019 — OCT 2024',
      description:
        'While at J Taylor Education, I served as Lead Developer, managing all technology to optimize virtual education infrastructure. Key achievements include leveraging AWS to ensure 99.9% uptime and enhancing user experience, implementing MERN stack solutions that improved platform speed and scalability overall, and designing user-focused virtual education tools for seamless learning experiences. Additionally, I boosted site traffic with the free Chrome extension, now exceeding 50,000+ current users.',
      tags: [
        'MERN',
        'JavaScript',
        'WordPress',
        'Node.js',
        'AWS',
        'HTML & CSS',
        'PHP',
        'Python',
        'Chrome Extensions',
        'React.js',
      ],
      link: 'https://depthcomplexity.com/',
    },
  ];

  return (
    <section id="section2" className="min-h-screen md:pt-28 pt-20 leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 md:hidden">Experience</h2>

      <div className="xp-wrapper grid grid-cols-1 lg:grid-cols-4 gap-y-16">
        {experienceData.map((job, index) => (
          <a
            key={index}
            href={job.link}
            rel="noreferrer"
            target="_blank"
            className={`col-span-1 lg:col-span-4 rounded-xl border border-transparent hover:shadow-lg hover:border-gray-600 transition-all duration-300 block transform transition-all duration-700 ease-in-out opacity-0 translate-y-10 ${
              visibleSections.includes(index) ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
          >
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1 text-gray-400 text-xs p-5">
                  <p>{job.duration}</p>
                </div>
                <div className="col-span-1 lg:col-span-3 p-4">
                  <h3 className="font-bold">
                    {job.role} &bull; <span className="text-gray-400">{job.company}</span>
                  </h3>
                  <p className="text-gray-400 mt-3">{job.description}</p>
                  <div className="tags flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag bg-blue-900 text-green-500 hover:bg-gray-800 rounded-full px-3 py-2 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
