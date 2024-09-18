import React from 'react'

const projects = [
    {
      original: '../assets/background.jpg',
      thumbnail: '../assets/background.jpg',
      description: 'Weather App',
      component: <Weather />
    },
    {
      original: 'path/to/project2-thumbnail.jpg',
      thumbnail: 'path/to/project2-thumbnail.jpg',
      description: 'News App',
      component: <News />
    }
  ];

const Sample = () => {
    const [selectedProject,setselectedProject] = useState(null)

    const handleThumbnailClick = (index) =>{
        setselectedProject(projects[index].component)
    }
  return (
    <div>
            <div className="card" style={{maxWidth:"345px"}}>
            <img src={original} style={{height:"200px",width:"343px"}} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{description}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
  )
}

export default Sample