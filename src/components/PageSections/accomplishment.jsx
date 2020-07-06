import React, { Component } from "react";

export class Accomplishment extends Component {
  render() {
    return (
      <section id="stats" class="count-up">
        <div class="row">
          <div class="col-twelve">
            <div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-badge"></i>
                </div>

                <h3 class="stat-count">90%</h3>

                <h5 class="stat-title">
                  Containerization (Kubernetes, Docker)
                </h5>
              </div>

              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-light-bulb"></i>
                </div>

                <h3 class="stat-count">90%</h3>

                <h5 class="stat-title">Python Programming</h5>
              </div>

              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-light-bulb"></i>
                </div>

                <h3 class="stat-count">85%</h3>

                <h5 class="stat-title">Node.js Programming</h5>
              </div>

              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-light-bulb"></i>
                </div>

                <h3 class="stat-count">90%</h3>

                <h5 class="stat-title">Database (mongoDB, Psql, SQL)</h5>
              </div>

              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-pencil-ruler"></i>
                </div>

                <h3 class="stat-count">-</h3>

                <h5 class="stat-title">Certifications:</h5>
                <p>CKA(Kubernetes), CEH, CISA</p>
              </div>

              <div class="bgrid stat">
                <div class="icon-part">
                  <i class="icon-users"></i>
                </div>

                <h3 class="stat-count">90%</h3>

                <h5 class="stat-title">Customer Service</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Accomplishment;
