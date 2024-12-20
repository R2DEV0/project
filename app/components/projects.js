import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AREA15 Origin Quest",
      description: "An immersive web-based scavenger hunt using Next.js/Netlify, WebXR, SendGrid, Hubspot, and Ticketure enhancing visitor engagement at AREA15.",
      github: "https://github.com/R2DEV0/area15_origin_quest",
      link: "https://area15.com/experiences/origin-quest/",
      image: "/oq.jpg",
    },
    {
      title: "Depth & Complexity Chrome Extension",
      description: "A Chrome extension designed for educators to apply Depth & Complexity prompts effectively in their lesson planning. Currently at 50k+ users worldwide!",
      github: "https://github.com/R2DEV0/Depth_Complexity_Chrome_Extension",
      link: "https://chromewebstore.google.com/detail/depth-complexity-icons/ddceffbchnkibcdnbpfjollegnegcjlj?hl=en-US&pli=1",
      image: "/dandc.jpg",
    },
    {
      title: "Depth & Complexity Plugin",
      description: "A custom WordPress plugin enabling J Taylor Education to seamlessly integrate custom Depth & Complexity tools into their website using PHP and MERN.",
      github: "https://github.com/R2DEV0/Depth-Complexity-Plugin",
      link: "https://depthcomplexity.com/",
      image: "/dc_land.png",
    },
  ];

  return (
    <section id="section4" className="min-h-screen py-20 leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 md:hidden">Professional Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12"
          >
            {/* Project Image */}
            <div className="w-full xl:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg object-cover h-[150px] w-full"
              />
            </div>

            {/* Project Description */}
            <div className="w-full">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-700 mr-3"
              >
                Product Page
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
