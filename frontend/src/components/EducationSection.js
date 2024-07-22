import React from "react";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";

const EducationSection = () => {
  const educationData = [
    {
      date: "2018 - 2020",
      title: "MATRICULATION",
      institution: "Government Boys High School Baghbanpura LHR.",
    },
    {
      date: "2020 - 2022",
      title: "INTERMEDIATE",
      institution: "Government Islamia College Civillines LHR.",
    },
    {
      date: "2022 - 2026",
      title: "Bachelor's Degree",
      institution: "Nation College of Buisness Administration & Economics.",
    },
  ];

  const experienceData = [
    {
      date: "2020 - 2021",
      title: "Customer Sales Representative ",
      description: "Call Center.",
    },
    {
      date: "2021 - 2022",
      title: "Front End Designer",
      description: "InterTech Solution.",
    },
    {
      date: "2018 - 2022",
      title: "Web Developement InternShip",
      description: "Infinity Waves Solutions.",
    },
  ];

  return (
    <div className="flex flex-col items-center  py-12 bg-slate-50">
      <div className="w-11/12 bg-slate-50  rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-4 pop">
              EDUCATION
            </h2>
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="mb-6 shadow bg-white p-4 transition-shadow duration-300 flex items-start"
              >
                <div className="mr-4">
                  <MdOutlineSchool size={40} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mont">{edu.date}</p>
                  <h3 className="text-lg font-semibold mont">{edu.title}</h3>
                  <p className="text-gray-600 text-sm pop">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-black text-2xl font-semibold mb-4 pop">
              EXPERIENCE
            </h2>
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="mb-6 flex bg-white shadow p-4 transition-shadow duration-300 flex items-start"
              >
                <div className="mr-4">
                  <MdWorkOutline size={40} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mont">{exp.date}</p>
                  <h3 className="text-lg font-semibold mont">{exp.title}</h3>
                  <p className="text-gray-600 text-sm pop">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
