import React from 'react'
import './About.css'
import Card from '../Card/Card'

const About = () => {
  return (
    <section id="about">

      {/* LEFT TIMELINE */}
      <div className="leftabout">

        <div className="timeline">

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
          </div>

        </div>

      </div>


      {/* RIGHT CONTENT */}
      <div className="rightabout">

        {/* ================= PERSONAL INFO ================= */}

        <div className="about-section">

          <h2>Personal Info</h2>

          <div className="info-grid">

            <div className="info-item">
              <span>NAME</span>
              <p>Harsh Sharma</p>
            </div>

            <div className="info-item">
              <span>AGE</span>
              <p>20 YEARS</p>
            </div>

            <div className="info-item">
              <span>GENDER</span>
              <p>MALE</p>
            </div>

            <div className="info-item">
              <span>LANGUAGE KNOWN</span>
              <p>HINDI, ENGLISH</p>
            </div>

          </div>

        </div>


        {/* ================= EDUCATION ================= */}

        <div className="about-section">

          <h2>Education</h2>

          <div className="education-box">

            <div className="education-row">
              <span>DEGREE</span>
              <p>BTECH</p>
            </div>

            <div className="education-row">
              <span>BRANCH</span>
              <p>COMPUTER SCIENCE & ENGINEERING</p>
            </div>

            <div className="education-row">
              <span>CGPA</span>
              <p>7.2</p>
            </div>

          </div>

        </div>


        {/* ================= SKILLS ================= */}

        <div className="about-section skills-section">

          <h2>Skills</h2>

          <div className="skills-cards">

            <Card
              title="MERN STACK"
              icon="⚡"
              level={90}
              description="Full-stack web development using MongoDB, Express, React and Node.js."
            />

            <Card
              title="PYTHON"
              icon="☕"
              level={82}
              description="Object-oriented programming and backend development using Python."
            />

            <Card
              title="FRONTEND DEVELOPMENT"
              icon="◆"
              level={85}
              description="Crafting seamless user experiences with clean code and modern aesthetics."
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default About
