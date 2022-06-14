import React from 'react'

const ProjectComponent = ({id, title, imageURL, stacks, demoURL, githubURL}) => (
    <div className="col-4">
        <div className="card">
            <img className="card-img-top" src={imageURL} alt="bsl-lunchapp" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"/>
                
            <div className="card-body pt-0">
                <hr />
                <h5 className="card-title text-center">{title}</h5>
                <div className="">
                    {stacks?.map(stack => (
                        <p key={stack} className="badge badge-light">• {stack} </p>
                    ))}
                    {/* <p className="badge badge-light mb-0 pb-0">• Reactjs </p>
                    <span className="badge badge-light">• Reduxjs/tool-kit </span>
                    <span className="badge badge-light">• Nodejs </span>
                    <span className="badge badge-light">• Expressjs </span>
                    <span className="badge badge-light">• MySQL </span>
                    <span className="badge badge-light">• AWS</span> */}
                </div>
                <div className="d-flex  align-items-end justify-content-between pt-2">
                    <button className="btn btn-secondary" onClick={()=>window.open(`${githubURL }`, '_blank') }> Code </button>
                    <button className="btn btn-theme-color" onClick={()=>window.open(`${demoURL }`, '_blank') }> Demo</button>
                </div>
            </div>
        </div>
    </div>
)

const ProjectSection = () => {
    
  return (
    <section id="projects" className="pt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ml-auto mr-auto">
                    <div className="h4 text-center mb-4">Key Projects</div>
                    
                    <div className="ml-auto mr-auto gallery">
                        <div className="row">

                            <ProjectComponent 
                                id={1}
                                title='BSL Lunch app'
                                imageURL="assets/projects/bsl-lunchapp/screnshot1.jpeg"
                                stacks={['Reduxjs/tool-kit', 'Nodejs', 'Expressjs', 'MySQL', 'AWS']}
                                demoURL='https://bsl-lunchapp.netlify.app/'
                                githubURL='https://gitlab.com/bdp-tech/food-app-frontend'
                            />

                            <ProjectComponent 
                                id={2}
                                title='The NotesApp'
                                imageURL="assets/projects/notes-app/Screenshot8.png"
                                stacks={['React', 'Reduxjs/tool-kit', 'Nodejs', 'Expressjs', 'MongoDB', ]}
                                demoURL='https://the-notesapp.netlify.app/'
                                githubURL = 'https://github.com/johnkdunyo/The-NotesApp'
                            />

                            <ProjectComponent 
                                id={3}
                                title='WhatsDev'
                                imageURL="assets/projects/whatsdev/screenshot1.jpeg"
                                stacks={['Reactjs', 'Firebase', 'Nodejs', 'Nodejs' ]}
                                demoURL='/'
                                githubURL='https://github.com/johnkdunyo/WhatsDev'
                            />
                            <ProjectComponent 
                                id={4}
                                title='Youtube Clone'
                                imageURL="assets/projects/youtube-clone/screenshot4.png"
                                stacks={['Reduxjs/tool-kit', 'Reactjs', 'Axios', 'html-entities', 'Youtube API']}
                                demoURL = "https://johnkdunyo-youtube-clone.netlify.app/"
                                githubURL = 'https://github.com/johnkdunyo/React-Youtube-Clone'
                            />

                            

                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection