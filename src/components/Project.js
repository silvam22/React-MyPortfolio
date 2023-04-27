import React from 'react';

const Project = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className='project'>
      <h2>{title}</h2>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      <div className='project-links'>
        <a href={liveLink} target='_blank' rel='noopener noreferrer'>Live Demo</a>
        <a href={repoLink} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;
