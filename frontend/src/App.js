import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Navigation */}
      <nav>
        <h2>Hamsaveena</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home">
        <p>HELLO, I'M</p>

        <h1>Hamsaveena</h1>

        <h2>Computer Science Student & Full Stack Developer</h2>

        <p>
          I build modern web applications and enjoy turning ideas into
          useful, user-friendly digital experiences.
        </p>

        <a href="#projects">View My Projects</a>
        <a href="#contact">Contact Me</a>
      </section>

      {/* About */}
      <section id="about">
        <p>ABOUT ME</p>

        <h2>Who I Am</h2>

        <p>
          I am a Computer Science student passionate about software
          development and full stack web technologies. I enjoy learning
          new technologies, building projects, and solving programming
          problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <p>MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>Python</span>
          <span>Java</span>
          <span>C / C++</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <p>MY WORK</p>

        <h2>Projects</h2>

        <div>

          <div className="project-card">
            <h3>Movie Ticket Booking System</h3>

            <p>
              A web application for selecting seats and booking movie
              tickets with a backend and PostgreSQL database.
            </p>

            <span>
              <a
  href="https://github.com/hamsaveena-com/FUTURE_FS_01"
  target="_blank"
  rel="noreferrer"
>
  GitHub
</a>
              HTML • CSS • JavaScript • Node.js • PostgreSQL
            </span>
          </div>

          <div className="project-card">
            <h3>Student Management System</h3>

            <p>
              A MERN application for managing student information with
              CRUD operations.
            </p>

            <span>
              React • Node.js • Express • MongoDB
            </span>
          </div>

          <div className="project-card">
            <h3>Smart Expense Tracker</h3>

            <p>
              A web application designed to help users record and manage
              their expenses.
            </p>

            <span>
              HTML • CSS • JavaScript • Node.js • MongoDB
            </span>
          </div>

          <div className="project-card">
            <h3>Pathfinding Visualizer</h3>

            <p>
              An interactive project that demonstrates pathfinding
              algorithms visually.
            </p>

            <span>HTML • CSS • JavaScript</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p>GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning, building projects, and
          exploring new opportunities.
        </p>

        <a href="mailto:hamsaveena566@gmail.com">
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Hamsaveena. Built with React.</p>
      </footer>

    </div>
  );
}

export default App;