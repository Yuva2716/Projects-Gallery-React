import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import Weather from '../WeatherApp/Weather';
import News from '../NewsApp/News';

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
      description: 'Project 2',
      component: <News />
    }
  ];


const ProjectGallery = () => {
    const [selectedProject,setselectedProject] = useState(null)

    const handleThumbnailClick = (index) =>{
        setselectedProject(projects[index].component)
    }


  return (
    <div>
        <ImageGallery
            items={projects}
            showThumbnails={true}
            onThumbnailClick={(event, index) => handleThumbnailClick(index)}
        />
        <div>{selectedProject}</div>
    </div>
  )
}

export default ProjectGallery