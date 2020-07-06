import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="services">
          <div className="overlay"></div>

          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Services</h5>
              <h1>Why you should be interested in me</h1>

              <p className="lead">
                My ability to implement efficient code to develop new features,
                automate boring/repetitive tasks using modern tools and
                languages makes me the right candidate for your organization.
              </p>
            </div>
          </div>

          <div className="row services-content">
            <div
              id="owl-slider"
              className="owl-carousel services-list owl-theme"
            >
              <div className="service">
                <span className="icon">
                  <i className="icon-earth"></i>
                </span>

                <div className="service-content">
                  <h3>Software Quality Assurance</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>

              <div className="service">
                <span className="icon">
                  <i className="icon-window"></i>
                </span>

                <div className="service-content">
                  <h3>Backend Development</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>

              <div className="service">
                <span className="icon">
                  <i className="icon-paint-brush"></i>
                </span>

                <div className="service-content">
                  <h3>React UI Development</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>

              <div className="service">
                <span className="icon">
                  <i className="icon-toggles"></i>
                </span>

                <div className="service-content">
                  <h3>Containerization</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>

              <div className="service">
                <span className="icon">
                  <i className="icon-image"></i>
                </span>

                <div className="service-content">
                  <h3>Technical Documentation</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>

              <div className="service">
                <span className="icon">
                  <i className="icon-chat"></i>
                </span>

                <div className="service-content">
                  <h3>Mentoring and Guidance</h3>

                  <p className="desc">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
