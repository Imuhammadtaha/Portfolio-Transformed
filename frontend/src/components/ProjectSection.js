import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import ImageZoom from "react-image-zooom";

const ProjectSection = () => {
  const projects = [
    {
      img: "/images/pr-1.webp",
      title: "Project 1",
      description: "ShopNest a beautiful E-commerece store",
    },
    {
      img: "/images/st.webp",
      title: "Project 2",
      description: "Live In Stock my semester project",
    },
    {
      img: "/images/web-aws.webp",
      title: "Project 3",
      description: "Aws Touch Frontend Project",
    },
    {
      img: "/images/pr-5.jpeg",
      title: "Project 4",
      description: "Landing Page of a Luggage Company",
    },
  ];

  return (
    <>
      <div className=" w-full py-10 ">
        <h1 className="text-center text-3xl font-semibold pop">My Projects</h1>
      </div>
      <div className="container mx-auto py-8">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <ImageZoom
                src={project.img}
                alt={project.title}
                className="rounded-lg shadow-lg object-cover mx-auto w-full h-80 md:h-96 lg:h-112"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold mont">{project.title}</h3>
                <p className="text-sm pop">{project.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" w-full bg-black py-10 ">
        <h3 className="text-center text-white text-2xl font-semibold mont">
          My Best Landing Pages
        </h3>
      </div>
      <div className="container mx-auto p-6 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Form Section */}
          <img
            src="/images/pr-3.jpg"
            alt="Illustration"
            className="w-full h-auto shadow"
          />

          <div className="md:flex items-center justify-center shadow">
            <img
              src="/images/pr-2.jpg"
              alt="Illustration"
              className="w-full h-auto shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
