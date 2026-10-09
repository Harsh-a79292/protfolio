import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xqpaorvw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">

      {/* Background Glow */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* ================= HEADING ================= */}

        <div className="contact-heading">

          <span className="contact-line"></span>

          <p>GET IN TOUCH</p>

          <h1>
            CONTACT <span>ME</span>
          </h1>

          <div className="contact-underline"></div>

        </div>


        {/* ================= CONTACT CONTENT ================= */}

        <div className="contact-content">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <h2>Let's Talk</h2>

            <p>
              Have a project in mind or want to work together?
              Send me a message and I'll get back to you as soon
              as possible.
            </p>

            <div className="contact-info-box">

              <div className="contact-item">
                <div className="contact-icon">@</div>

                <div>
                  <span>EMAIL</span>
                  <p>Your Email Here</p>
                </div>
              </div>


              <div className="contact-item">
                <div className="contact-icon">✦</div>

                <div>
                  <span>AVAILABLE FOR</span>
                  <p>Freelance & Projects</p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="input-group">

              <label htmlFor="email">
                YOUR EMAIL
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Gmail"
                required
              />

            </div>


            <div className="input-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-message-btn"
            >
              SEND MESSAGE

              <span>↗</span>

            </button>


            {status && (
              <p
                className={`form-status ${
                  status.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
