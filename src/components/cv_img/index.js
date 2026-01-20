import React from "react";
import "../cv_img/style.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import educationIcon from "../../assets/img/educationIcon.png";

function CRI() {
  return (
    <Bounce>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">

          {/* ================= EXPERIENCE ================= */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
              <div className="about-desc">
                <Fade top cascade>
                  <h2 className="cvl_header">Experience</h2>
                </Fade>
                <hr />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">

                {/* JLR */}
                <article className="timeline-entry animate-box">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <img src={educationIcon} height="40" alt="icon" />
                    </div>
                    <div className="timeline-label box-1">
                      <h2>
                        Software Engineer <span> | JLR North America</span>
                      </h2>
                      <p className="acd-year">Sep 2025 – Dec 2025</p>
                      <p className="edu-para">
                        • Won the JLR–University of Windsor Hackathon, earning a 2-week paid internship. <br />
                        • Designed and optimized DRAM configurations using DRAMSys 5.0 to improve AI inference performance. <br />
                        • Analyzed memory latency and bandwidth bottlenecks for real-time AI workloads. <br />
                        • Collaborated with cross-functional teams to deliver performance reports and visualizations.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Tech Elecon */}
                <article className="timeline-entry animate-box">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <img src={educationIcon} height="40" alt="icon" />
                    </div>
                    <div className="timeline-label box-2">
                      <h2>
                        Software Developer <span> | Tech Elecon Pvt. Ltd.</span>
                      </h2>
                      <p className="acd-year">Dec 2023 – May 2024</p>
                      <p className="edu-para">
                        • Built and maintained scalable full-stack web applications using React.js and Node.js. <br />
                        • Translated business requirements into REST APIs backed by relational databases. <br />
                        • Troubleshot production issues and optimized backend performance. <br />
                        • Participated in code reviews and Git-based development workflows.
                      </p>
                    </div>
                  </div>
                </article>

                {/* TatvaSoft */}
                <article className="timeline-entry animate-box">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <img src={educationIcon} height="40" alt="icon" />
                    </div>
                    <div className="timeline-label box-1">
                      <h2>
                        Software Developer Intern <span> | TatvaSoft</span>
                      </h2>
                      <p className="acd-year">May 2023 – Jun 2023</p>
                      <p className="edu-para">
                        • Developed responsive single-page applications using React.js. <br />
                        • Integrated REST APIs and collaborated with backend teams. <br />
                        • Implemented Redux and Context API for efficient state management.
                      </p>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </div>

          {/* ================= EDUCATION ================= */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
              <div className="about-desc">
                <Fade top cascade>
                  <h2 className="cvl_header">Education</h2>
                </Fade>
                <hr />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">

                {/* Master */}
                <article className="timeline-entry animate-box">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <img src={educationIcon} height="40" alt="icon" />
                    </div>
                    <div className="timeline-label box-2">
                      <p className="acd-year">2024 – 2025</p>
                      <h2>Master of Applied Computing</h2>
                      <p className="edu-para">
                        University of Windsor, Ontario <br />
                        GPA: 3.3 / 4.0
                      </p>
                    </div>
                  </div>
                </article>

                {/* Bachelor */}
                <article className="timeline-entry animate-box">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <img src={educationIcon} height="40" alt="icon" />
                    </div>
                    <div className="timeline-label box-1">
                      <p className="acd-year">2020 – 2024</p>
                      <h2>Bachelor of Engineering – Information Technology</h2>
                      <p className="edu-para">
                        G H Patel College of Engineering and Technology <br />
                        CGPA: 8.62 / 10
                      </p>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </div>

        </div>
      </section>
    </Bounce>
  );
}

export default CRI;
