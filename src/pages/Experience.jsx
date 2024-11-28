import React from "react";

const experienceData = [
  {
    title: "Rural Horticulture Work Experience Program",
    company: "Kadur, Chikamagalur District",
    description: "Participated in a 2-month program focusing on rural horticulture practices.",
  },
  {
    title: "ICAR KVK Placement",
    company: "VC Farm, Mandya",
    description: "Hands-on training and exposure to various agricultural techniques.",
  },
  {
    title: "Experiential Learning in Horticulture",
    company: "College of Horticulture, Mudigere",
    description: `5-month experiential learning program:
1. Bio Inputs: Bio-fertilizers and bio-pesticides production.
2. Commercial Horticulture: Vegetables and flower cultivation.`,
  },
  {
    title: "Wine Education & Appreciation",
    company: "Karnataka Grape & Wine Board",
    description: "Attended a workshop on wine education, appreciation, and tasting.",
  },
  {
    title: "Horticulture-Based Industrial Placement",
    company: "Sirsi (1 Month)",
    description: `Gained industrial experience at multiple facilities:
1. Omkar Cashew Industry: Cashew processing and grading.
2. Agricultural Service & Development Co-op Society.
3. Heggare Food Products: Masala products.
4. Kadamba Agro Foods: Canned products (pineapple slices, fruit mocktails).
5. Trupti Pickles: Mango and lemon pickles.
6. Kadamba Co-operative Society.
7. Madhu Bee Nursery: Honey products (jam, honey).
8. Totgar’s Co-operative Society.`,
  },
  {
    title: "Institutional Development Plan",
    company: "College of Horticulture, Mudigere",
    description: "Participated in the Institutional Development Plan under AT COH-Mudigere.",
  },
  {
    title: "National Workshop on Agri-Startups",
    company: "UAS Dharwad (ICAR-NAHEP)",
    description: "Engaged in discussions on agri-startups and entrepreneurial strategies.",
  },
  {
    title: "International Workshop on Fungus Culture",
    company: "Hosted at College of Horticulture",
    description: "Explored advanced techniques in fungus culture and its applications.",
  },
  {
    title: "Industrial Program on Startup, Digital Marketing & Entrepreneurship",
    company: "Movidu",
    description: `Completed a program focused on:
- Market analysis and business planning.
- Digital marketing techniques.
- Growth strategies for startups.
Worked on a project under expert mentorship, gaining entrepreneurial insights.`,
  },
];

const Experience = () => {
  return (
    <section
      id="exp"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-4xl font-bold text-green-300 mb-8">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-green-300 mb-2">{item.title}</h3>
              <h4 className="text-xl font-medium text-gray-300 mb-4">{item.company}</h4>
              <p className="text-lg whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
