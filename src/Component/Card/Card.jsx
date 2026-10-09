import React from 'react'
import './Card.css'

const Card = ({ title, icon, level, description }) => {
  return (
    <div className="pro-skill-card">

      {/* Animated background */}
      <div className="card-bg"></div>

      {/* Moving glow */}
      <div className="card-orb orb-one"></div>
      <div className="card-orb orb-two"></div>

      {/* Shine */}
      <div className="card-shine"></div>

      {/* Main content */}
      <div className="card-inner">

        {/* Top */}
        <div className="card-top">

          <div className="skill-icon">
            {icon}
          </div>

          <div className="skill-number">
            0{level ? Math.ceil(level / 10) : 1}
          </div>

        </div>

        {/* Title */}
        <h3>{title}</h3>

        {/* Description */}
        <p className="skill-description">
          {description}
        </p>

        {/* Progress */}
        <div className="skill-progress">

          <div className="progress-info">
            <span>SKILL LEVEL</span>
            <span>{level}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${level}%` }}
            ></div>
          </div>

        </div>

        {/* Bottom */}
        <div className="card-bottom">
          <span>EXPLORE SKILL</span>

          <span className="arrow">
            →
          </span>
        </div>

      </div>

    </div>
  )
}

export default Card
