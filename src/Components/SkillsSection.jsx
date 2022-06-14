import React from 'react'

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-5">
        <div className="container">
            <div className="h4 text-center mb-4">Skills</div>
            <div className="card align-items-center">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Programming:</td>
                                    <td>
                                        <span className="badge badge-info"> HTML5 / CSS3 </span> {' '}
                                        <span className="badge badge-info">Javascript / Typescript</span> {' '}
                                        <span className="badge badge-info">Python</span> {' '}
                                        <span className="badge badge-info">PHP</span> {' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Front-End:</td>
                                    <td>
                                        <span className="badge badge-info">Reactjs</span> {' '}
                                        <span className="badge badge-info">Bootstrap</span> {' '}
                                        <span className="badge badge-info">jquery</span> {' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Back-End:</td>
                                    <td>
                                        <span className="badge badge-info">Nodejs</span> {' '}
                                        <span className="badge badge-info">Expressjs</span> {' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Databases:</td>
                                    <td><span className="badge badge-info">MySQL</span> {' '}
                                        <span className="badge badge-info">MongoDB</span> {' '}
                                        <span className="badge badge-info">Firebase</span> {' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tools:</td>
                                    <td><span className="badge badge-info">Git</span> {' '}
                                        <span className="badge badge-info">Amazon Web Services (AWS)</span> {' '}
                                        <span className="badge badge-info">PowerBI</span> {' '}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3 align-self-center text-center">
                        <div className="card-body">
                            <div>
                                <p>
                                    <a href="assets/John Kwame Dunyo- SE Resume.pdf" className="button btn btn-info text-white"
                                       target="_blank"><i
                                            className="fa fa-eye"></i> Résumé</a>
                                </p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillsSection