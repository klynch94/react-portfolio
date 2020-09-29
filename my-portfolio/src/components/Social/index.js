import React from "react";

export default function() {
    return (
        <section className="container contactInfo col-md-8">
            <div className="card-deck">
                <div className="card contactCard">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/kieran-lynch-516525145" target="_blank">
                        <i id="liSquare" className="fa fa-linkedin" aria-hidden="true"></i>
                        <div className="card-body">
                            <p className="card-title">LinkedIn</p>
                        </div>
                    </a>
                </div>
                <div className="card contactCard">
                    <a rel="noopener noreferrer" href="https://github.com/klynch94" target="_blank">
                        <i id="GitHub"className="fa fa-github" aria-hidden="true"></i>
                        <div className="card-body">
                            <p className="card-title">GitHub</p>
                        </div>
                    </a>
                </div>
                <div className="card contactCard">
                    <a href="./Assets/KieranLynch_Resume 6.5.20.pdf" target="_blank" download="Lynch.pdf">
                        <i id="resume" className="fa fa-file-text-o" aria-hidden="true"></i>
                        <div className="card-body">
                            <p className="card-title">Resume</p>
                        </div>
                    </a>
                </div>
              </div>
        </section>
    )
}