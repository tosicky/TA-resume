import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <section id="about">
        <div class="row section-intro">
          <div class="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>

            <div class="intro-info">
              <img
                src={require("../../images/profile-pic.jpg")}
                alt="Profile Picture"
              />

              <p class="lead">
                Experienced DevOps engineer with practical experiences in cloud
                infrastructure: Configuration of new instances using Ansible
                playbooks on virtual servers and bare metal, designing python
                libraries and methods to interact with cloud API. Committed to
                quality delivery by ensuring adequate UI and backend automation
                test coverage of artifacts. Ability to collaborate with scrum
                team and cross-functional development team following Agile best
                practices.
              </p>
            </div>
          </div>
        </div>

        <div class="row about-content">
          <div class="col-six tab-full">
            <h3>Profile</h3>
            <p>
              Self-motivated and strong believer in continuous improvement.
              Focused and prepared to embrace new learning opportunities .
            </p>

            <ul class="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>Tosin Adelegan</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>DevOps Developer at IBM Canada</span>
              </li>
              <li>
                <strong>Website:</strong>
                <span>www.tosinadelegan.com</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>tosinadelegan@yahoo.co.uk</span>
              </li>
            </ul>
          </div>

          <div class="col-six tab-full">
            <h3>Skills</h3>
            <p>
              Over the years of academic study and working in the industry, I
              have been able to acquire and develop competencies in:
            </p>

            <ul class="skill-bars">
              <li>
                <div class="progress percent90">
                  <span>90%</span>
                </div>
                <strong>Python</strong>
              </li>
              <li>
                <div class="progress percent95">
                  <span>95%</span>
                </div>
                <strong>UI Automation</strong>
              </li>
              <li>
                <div class="progress percent90">
                  <span>90%</span>
                </div>
                <strong>Docker</strong>
              </li>
              <li>
                <div class="progress percent90">
                  <span>90%</span>
                </div>
                <strong>Kubernetes</strong>
              </li>
              <li>
                <div class="progress percent80">
                  <span>80%</span>
                </div>
                <strong>Node.js</strong>
              </li>
              <li>
                <div class="progress percent95">
                  <span>95%</span>
                </div>
                <strong>MongoDB, Psql</strong>
              </li>
              <li>
                <div class="progress percent80">
                  <span>80%</span>
                </div>
                <strong>Ansible</strong>
              </li>
              <li>
                <div class="progress percent90">
                  <span>90%</span>
                </div>
                <strong>RESTAPI</strong>
              </li>
            </ul>
          </div>
        </div>

        <div class="row button-section">
          <div class="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              class="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a href="#" title="Download CV" class="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default about;
