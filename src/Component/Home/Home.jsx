import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const profileImg = "/images/toy.jpg";

  const roles = [
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "UI Designer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Harsh</span>
        </h1>

        {/* Animated Role */}
        <h2 className="animated-role">
          {text}
          <span className="cursor">|</span>
        </h2>

        <p>
          Welcome to my portfolio! I specialize in Background design,
          Game Art, Animation, and Character Design.
        </p>

        <button className="btn">Hire me</button>
      </div>

      <div className="home-img">
        <img src={profileImg} alt="Harsh Character" />
      </div>
    </section>
  );
};

export default Home;