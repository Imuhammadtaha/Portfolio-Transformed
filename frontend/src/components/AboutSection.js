import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="container mx-auto p-6 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex py-10 ">
          <div className="text-md mb-4 pop flex flex-column justify-center">
            Hi, I'm <b>Muhammad Taha</b> currently a Bachelor of Science in
            Computer Science (BSCS) at NCBAE. I started my academic journey in a
            Government school and later completed my F.Sc. in Pre-Engineering at
            GICCL. I'm passionate about computer science, especially in
            programming.I enjoy engaging in projects and extracurricular
            activities to gain practical experience for a successful tech
            career.
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/about.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-10 my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <h2 className="text-3xl font-semibold mont">12+</h2>
            <p className="text-xl mont">Workshops attended</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mont">5+</h2>
            <p className="text-xl">Projects completed</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mont">InternShip</h2>
            <p className="text-xl">Infinity Waves inc</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
