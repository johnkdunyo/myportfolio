import React from 'react'

const EducationSection = () => {
  return (
    <section id="education" className="pt-5">
        <div className="container">
            <div className="h4 text-center mb-4">Education</div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-pink" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="d-flex h-100 paddings text-center align-items-center">
                            <div className="w-100 text-white">
                                <a className="text-white" href="https://www.knust.edu.gh/" target="_blank" rel="noreferrer">
                                    <img width="120" height="150" src="assets/img/knustlogo.png" alt='knust schhol' />
                                </a>
                                <p>Kwame Nkrumah University Of Science and Technology</p>
                                <p>Kumasi, Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <p>Bsc. Computer Engineering</p>
                            <p>Aug. 2017 - Nov. 2021</p>
                            <p>First Class (Honours)</p>
                            <span className="badge badge-info">Relevant Courses:</span><br />
                            <span className="badge badge-light">• Data Structures and Algorithms</span> {' '}
                            <span className="badge badge-light">• Distributed Systems</span> {' '}
                            <span className="badge badge-light">• Operating Systems</span> {' '}
                            <span className="badge badge-light">• Machine Learnig and AI</span> {' '}
                            <span className="badge badge-light">• Algorithms - Design, Analysis, and Implementations</span> {' '}
                            <span className="badge badge-light">• Software Engineering Methods</span> {' '}
                            <span className="badge badge-light">• Software Project Management</span> {' '}
                            <span className="badge badge-light">• Database Management Systems</span> {' '}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EducationSection