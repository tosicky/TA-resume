import React, { Component } from "react";

export class Resume extends Component {
  render() {
    return (
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>Professional Summary</h1>

            <p className="lead">
              Experienced DevOps engineer with practical experiences in cloud
              infrastructure: Configuration of new instances using Ansible
              playbooks on virtual servers and bare metal, designing python
              libraries and methods to interact with cloud API. Committed to
              quality delivery by ensuring adequate UI and backend automation
              test coverage of artifacts. Ability to collaborate with scrum team
              and cross-functional development team following Agile best
              practices.
            </p>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>DevOps Developer</h3>
                  <p>Feb 2019 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>IBM Canada</h4>
                  <p>
                    <ul>
                      <li>
                        Implemented Python framework to automate the scheduling
                        and removal of downtime on 400+ hosts using Icinga API
                        which led to a 90% reduction in time overhead.
                      </li>
                      <li>
                        Designed Python commands and scripts used by DevOps to
                        perform administrative tasks on customers deployments.
                      </li>
                      <li>
                        Refactored and maintained UI automation framework that
                        led to significant consistency in test results and 95%
                        adoption by the team.
                      </li>
                      <li>
                        Designed and maintained backend automation for DevOps
                        administrative commands that led to reduction in release
                        times by 30%.
                      </li>
                      <li>
                        Coordinated the roll-out of developed artifacts from
                        stable-dev server to staging and then to 400+ production
                        instances.
                      </li>
                      <li>
                        Developed an app using Python Flask for training team
                        members who are new to UI automation.
                      </li>
                      <li>
                        Provided support and guidance within the team for
                        designing and running UI and Backend Automation.
                      </li>
                      <li>
                        Contributed towards the growth of QRadar on Cloud (QRoC)
                        business through excellent customer support and ensuring
                        SLA are consistently met.
                      </li>
                      <li>
                        Mitigated and reduced services downtime on customers
                        deployments on IBM Cloud by timely response to pages
                        from monitoring systems.
                      </li>
                      <li>
                        Developed Ansible re-usable roles and playbooks to
                        configure and maintain deployments on IBM Cloud
                        production infrastructure.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Software Developer</h3>
                  <p>January 2018 - January 2019</p>
                </div>

                <div className="timeline-content">
                  <h4>IBM Canada</h4>
                  <p>
                    <ul>
                      <li>
                        Performed functional and regression tests to ensure
                        requirements are met prior to release.
                      </li>
                      <li>
                        Designed test suites and test cases for newly developed
                        features using Groovy/Geb/Spock framework.
                      </li>
                      <li>
                        Identified and reported defects in Rationale Team
                        Concert (RTC) system for easy tracking and resolution.
                      </li>
                      <li>
                        Collaborated with software developers across agile teams
                        to understand developed features which led to improved
                        test cases design and coverage.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Quality Assurance/Information Developer (Co-op)</h3>
                  <p>September 2016 - April 2017</p>
                </div>

                <div className="timeline-content">
                  <h4>IBM Canada</h4>
                  <p>
                    <ul>
                      <li>
                        Performed manual and automated testing of implemented
                        stories and defect.
                      </li>
                      <li>
                        Designed test cases for newly developed features using
                        selenium framework.
                      </li>
                      <li>
                        Automated transfer of documentations to publishing
                        servers which led to a significant reduction in time
                        overhead.
                      </li>
                      <li>
                        Improved product documentation for end-users by
                        interacting with developers within agile teams to
                        understand features.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Master Degree</h3>
                  <p>September 2015 - December 2017</p>
                </div>

                <div className="timeline-content">
                  <h4>Memorial University of Newfoundland</h4>
                  <p>M.Sc. Computer Science, Dec 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
