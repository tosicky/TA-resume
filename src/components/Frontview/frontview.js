import React, { Component } from "react";

export class Frontview extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5 style={{ fontSize: "70px" }}>I'm Tosin Adelegan.</h5>
              <h1></h1>

              <p className="intro-position">
                <span>DevOps Developer/Engineer</span>
              </p>

              <a className="button stroke smoothscroll" href="#about" title="">
                More About Me
              </a>
            </div>
          </div>
        </div>

        <ul className="intro-social">
          <li>
            <a href="https://www.linkedin.com/in/oluwatosinadelegan/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/tosicky">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Frontview;
