import React, { useEffect, useRef, useState } from "react";
import "./Project.css";

const projects = [
  {
    number: "01",
    title: "RESUME BUILDER",
    description:
      "Modern resume builder with customizable templates, live preview and easy resume creation.",
    tech: "React • JavaScript • CSS",
    color: "#72e6ee",
  },
  {
    number: "02",
    title: "E-COMMERCE WEB",
    description:
      "Responsive e-commerce platform with product browsing, shopping experience and modern UI.",
    tech: "MERN • React • MongoDB",
    color: "#e94791",
  },
  {
    number: "03",
    title: "AI MENTAL HEALTH MONITORING",
    description:
      "AI-powered platform designed to monitor user wellness patterns and provide meaningful insights.",
    tech: "React • AI • Python",
    color: "#72e6ee",
  },
  {
    number: "04",
    title: "AMAZON CLONE",
    description:
      "Amazon-inspired shopping interface with product sections, navigation and responsive layouts.",
    tech: "React • JavaScript • CSS",
    color: "#e94791",
  },
  {
    number: "05",
    title: "SPOTIFY CLONE",
    description:
      "Music streaming inspired interface featuring playlists, music cards and an immersive dark UI.",
    tech: "React • JavaScript • CSS",
    color: "#72e6ee",
  },
];

const Project = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section ${visible ? "projects-visible" : ""}`}
    >
      {/* Background animated lights */}
      <div className="project-glow project-glow-one"></div>
      <div className="project-glow project-glow-two"></div>

      <div className="projects-container">

        {/* ================= HEADING ================= */}

        <div className="projects-heading">
          <span className="heading-line"></span>

          <p>MY WORK</p>

          <h1>
            1+ Years Experienced in{" "}
            <span>Projects</span>
          </h1>

          <div className="heading-underline"></div>
        </div>


        {/* ================= PROJECT CARDS ================= */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.number}
              style={{
                "--card-color": project.color,
                "--delay": `${index * 0.15}s`,
              }}
            >

              {/* Card Number */}
              <div className="card-number">
                {project.number}
              </div>

              {/* Animated corner */}
              <div className="card-corner"></div>

              {/* Top glowing line */}
              <div className="card-top-line"></div>

              {/* Content */}
              <div className="project-card-content">

                <div className="project-icon">
                  <span></span>
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

              </div>

              {/* Bottom shine */}
              <div className="card-shine"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
