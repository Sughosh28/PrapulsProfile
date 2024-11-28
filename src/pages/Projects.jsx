import React from "react";

const personalData = {
  languages: [
    { name: "Kannada", proficiency: "Fluent" },
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Intermediate" },
  ],
  hobbies: ["Badminton", "Travelling", "Swimming"],
  strengths: [
    "Work effectively both individually and in a group.",
    "Lead a team during work.",
    "Handle stressful situations effectively.",
    "Possess strong communication skills.",
    "Demonstrate excellent project management skills.",
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Languages Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-green-300 mb-8">Languages</h2>
        <div className="space-y-6 mb-12">
          {personalData.languages.map((language, index) => (
            <p key={index} className="text-lg text-gray-300">
              <span className="font-semibold text-green-400">{language.name}</span>: {language.proficiency}
            </p>
          ))}
        </div>

        {/* Hobbies Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-green-300 mb-8">Hobbies</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-12 text-gray-300">
          {personalData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        {/* Strengths Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-green-300 mb-8">Strengths</h2>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-300">
          {personalData.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
