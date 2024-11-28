import React from "react";

const skillsData = [
  {
    id: '1',
    name: "Farm Management & Planning",
    description: "Proficient in data collection, analysis, and interpretation.",
  },
  {
    id: '2',
    name: "Crop Management & Pest Control",
    description: "Expertise in soil analysis, fertilization, and pest control.",
  },
  {
    id: '3',
    name: "Sustainable Agriculture",
    description: "Knowledge of sustainable practices and horticulture conservation.",
  },
  {
    id: '4',
    name: "Community Engagement",
    description: "Ability to work independently with farming communities.",
  },
  {
    id: '5',
    name: "Problem Solving & Decision Making",
    description: "Strong critical thinking and decision-making skills.",
  },
  {
    id: '6',
    name: "Communication Skills",
    description: "Strong verbal and written communication abilities.",
  },
  {
    id: '7',
    name: "Microsoft Word",
    description: "Competent in creating, formatting, and editing documents.",
  },
  {
    id: '8',
    name: "Microsoft PowerPoint",
    description: "Skilled in designing and delivering engaging presentations.",
  },
  {
    id: '9',
    name: "Microsoft Excel",
    description: "Experienced in data analysis and spreadsheet management.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-green-300 mb-8">Skills</h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Skill Icon (optional - can be added if needed) */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16">
                  {/* Placeholder for SVG icons */}
                  {/* {item.svg} */}
                </div>
              </div>
              
              {/* Skill Name and Description */}
              <h3 className="text-2xl font-semibold text-green-300 mb-4">{item.name}</h3>
              <p className="text-lg text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
