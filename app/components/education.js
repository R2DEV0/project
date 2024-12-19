import React, { useState, useRef, useEffect } from 'react';

const Education = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const educationData = [
    {
      title: 'Amazon Web Services',
      subtitle: 'Associate AWS Certified Developer - 2024',
      details: 'Achieved a deep understanding of AWS services and cloud-based application development.',
    },
    {
      title: 'City University of Seattle',
      subtitle: 'BS in Applied Computing - Seattle, WA - 2021',
      details: 'Focused on software engineering principles, cloud computing, and modern development practices.',
    },
    {
      title: 'Coding Dojo',
      subtitle: 'Full-Stack Developer Certificate - Seattle, WA - 2020',
      details: 'Gained expertise in the MERN stack, Python/Django, C#/.NET, and agile development methodologies.',
    },
    {
      title: 'City University of Seattle',
      subtitle: 'BS in Business Administration - Seattle, WA - 2017',
      details: 'Learned essential business principles and project management strategies.',
    },
    {
      title: 'Community College of the Air Force',
      subtitle: 'AAS in Transportation - Elmendorf AFB, AK - 2014',
      details: 'Specialized in logistics and transportation systems management.',
    },
  ];

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

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="section3" className="min-h-screen pt-40 leading-relaxed md:px-10">
      <h2 className="text-2xl font-bold mb-4 md:hidden">Education</h2>
      <div className="space-y-8 md:text-right">
        {educationData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
            className={`transform transition-all duration-700 ease-in-out opacity-0 translate-y-10 ${
              visibleSections.includes(index) ? 'opacity-100 translate-y-0' : ''
            } border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8`}
            onClick={() => handleToggle(index)}
            onMouseEnter={() => handleToggle(index)}
            onMouseLeave={() => handleToggle()}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
            <div
              className={`details-content text-gray-400 text-sm transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              {item.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
