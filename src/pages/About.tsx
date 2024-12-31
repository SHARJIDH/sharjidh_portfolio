import { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const experiences = [
    {
      company: "Insitu Agritech",
      position: "Full stack web developer intern",
      duration: "Jun 2024– current",
      location: "Remote",
      description: [
        "Developed and maintained the front end using Next.js, ensuring a functional and user-friendly interface with extensive unit testing for reliability.",
        "Integrated email notifications to boost user engagement and provide timely updates.",
        "Implemented event management features, streamlining scheduling and user reporting.",
        "Developed a visitor tracking system, enhancing the user experience with real-time behavior insights.",
      ],
      tools: "Next.js, MongoDB, Firebase, Jest",
    },
    {
      company: "UMA memorial Public school",
      position: "Web development intern",
      duration: "May 2024– Jun 2024",
      location: "Remote",
      description: [
        "A comprehensive school website was designed and used React.js for the front end, which ensured user interface and visual appeal.",
        "The MERN stack (MongoDB, Express.js, React.js, Node.js) was used to create a robust and scalable application, which ensured seamless integration of front-end and back-end components.",
        "Designed and maintained various application features that enhance website functionality and user experience.",
      ],
      tools: "MERN stack",
    },
  ];

  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen w-screen justify-center items-center py-16">
      <div className="max-w-screen-md px-6 md:p-0">
        <h1 className="text-4xl font-bold mb-8 text-[#ff8c00]">
          Hi there! I'm Sharjidh
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate full-stack developer with expertise in modern web technologies. My focus is on creating innovative and efficient solutions using cutting-edge tools and frameworks. I specialize in Next.js, React, TypeScript, and Tailwind CSS for frontend development, while leveraging powerful backend technologies like Convex and neon-DB.
        </p>
        <p className="text-lg text-gray-600 mt-6">
          I'm always eager to learn and adapt to new technologies, constantly improving my skills in areas like real-time data synchronization, API integration, and responsive design. If you're interested in collaborating or want to know more about my work, feel free to check out my{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://github.com/SHARJIDH"
          >
            GitHub
          </a>{" "}
          or connect with me on{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://www.linkedin.com/in/shaik-sharjidh-51500122b/"
          >
            LinkedIn
          </a>.
        </p>
        <h2 className="text-3xl font-bold my-4 text-[#ff8c00]">Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-4 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleExperience(exp.company)}
            >
              <motion.h3 
                className="text-xl font-semibold text-[#ff8c00]"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {exp.company}
              </motion.h3>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ 
                  rotate: expandedExperience === exp.company ? 180 : 0,
                  color: expandedExperience === exp.company ? "#ff8c00" : "#000000"
                }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </div>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {exp.position}
            </motion.p>
            <motion.p 
              className="text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exp.duration} | {exp.location}
            </motion.p>
            {expandedExperience === exp.company && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <ul className="list-disc list-inside mt-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-600 mt-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 120
                      }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <strong>Tools used:</strong> {exp.tools}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
