import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="pt-5">
        <div className="container">
            <div className="h4 text-center mb-4">Work Experience</div>

            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-pink" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="d-flex paddings h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <a className="text-white" href="https://broadspectrumltd.com/" target="_blank" rel="noreferrer">
                                    <img width="130" height="80" src="assets/img/bsl.png" alt='bsl logo' />
                                    <br/>
                                    Broadspectrum Group.
                                </a>
                                <p>Accra, Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="row">
                                <p className="col text-left">Junior Software Engineer</p>
                                <p className="col text-right">November 2021 - Present</p>
                            </div>
                            <p> • Built a restful API, developed the server-logic, and maintained the central database for the company’s lunch ordering
application using Nodejs, Expressjs to ensure low latency responsiveness to requests from the front-end.
                                <br/>
                                • Built a Laravel (PHP) application to automate NEDco power purchase reconciliations by retrying failed transactions, crediting, or debiting customers based on transaction status while saving cost by 20% and improving customer experience.
                                 <br/>
                                • Developed functional and technical requirements for the lunch ordering application and developed test cases to validate
                                its functionalities
                            </p>
                            <span><span className="badge badge-info">Technologies Used</span> HTML5, CSS3, Reactjs, Reduxjs/toolkit, Nodejs, Expressjs, MySQL node-cron, AWS </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-pink" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="d-flex paddings h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <a className="text-white" href="https://www.1eq.com/home" target="_blank" rel="noreferrer">
                                    <img width="160" height="60" src="assets/img/moreplex-logo.png" alt='moreplex company ltd' />
                                    <br/>
                                    Moreplex Company Ltd.
                                </a>
                                <p>Kumasi, Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="row">
                                <p className="col text-left">Lead Software Engineer</p>
                                <p className="col text-right">June 2021 - Present</p>
                            </div>
                            <p>
                                • Designed, built and successfully shipped MESA,an eskills learning platform for Moreplex CompanyLtd, using Reactjs,
Tailwindcss, TypeORM(Expressjs) and PostgresSQL.
                                <br/>
                                • Led team to develop an AI product recommender system using AWS Lex that gathers and analyses customer data and
provides customer-problem specific product recommendation. (This was funded by MEST Africa).
                                <br/>
                                • Designed an optimized systems architecture using AWS cloud services for the company’s general website, eCommerce
and eSkills sites and implemented them with a team of 2 developers to boost performance and improve customer service
                            </p>
                            <span><span className="badge badge-info">Technologies Used</span> HTML5/CSS3, Javascript, Reactjs, Tailwindcss, TypeORM(Expressjs), PostgreSQL,  Wordpress, Amazon Web Services (AWS)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-pink" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="d-flex paddings h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <a className="text-white" href="https://www.1eq.com/home" target="_blank">
                                    <img width="160" height="60" src="assets/img/moreplex-logo.png">
                                    <br/>
                                    Kommey's Lad.
                                </a>
                                <p>KNUST, Kumasi, Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="row">
                                <p className="col text-left">Lead Software Engineer</p>
                                <p className="col text-right">June 2021 - Present</p>
                            </div>
                            <p>
                                • Website Development: changes in the look and feel of the official website
                                <br/>
                                • Developed an optimized systems architecture for development of the company’s eCommerce and eSkills learning applications to enhance customer
                                experience and satisfaction
            
                                <br/></p>
                            <span><span className="badge badge-info">Technologies Used</span> HTML5/CSS3, Javascript, Reactjs, PHP, Wordpress, Amazon Web Services (AWS)</span>
                        </div>
                    </div>
                </div>
            </div>  */}

            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-pink" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="d-flex paddings h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <a className="text-white" href="https://www.1eq.com/home" target="_blank" rel="noreferrer">
                                    <img width="160" height="60" src="assets/img/magmarkd.png" alt='magmard logo'/>
                                    <br/>
                                    Magmarkd Pvt Ltd.
                                </a>
                                <p>Pune, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="row">
                                <p className="col text-left">Python Developer (Remote)</p>
                                <p className="col text-right">April 2020 - November 2020</p>
                            </div>
                            <p>
                                • Designed and implemented data modeling processes and predictive models to extract data from existing business
                                database using Python pandas and numpy libraries and then visualized it with insights using PowerBI on a newly developed
                                web application
                                <br/>
                                • Proposed standard coding structures to improve code efficiencies and reduce overall project lifespan by 25%
                                <br/></p>
                            <span><span className="badge badge-info">Technologies Used</span> Python, Pandas, Numpy, MS SQL Server, PowerBI</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Experience