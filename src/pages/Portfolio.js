import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather and Music',
      description: 'This is a web application for finding concerts and weather info when user inputs their desired location and artist. We will be using materialize framework to help buid the HTML layout.',
      image: './projectImages/Screen Shot 2023-04-26 at 4.10.28 PM.png',
      imageClass: 'project-image',
      liveLink: 'https://desmondsaelee.github.io/weather-and-music',
      repoLink: 'https://github.com/silvam22/weather-and-music',
    },
    {
      title: 'Fitness Tracker',
      description: 'This is a web application created for users to keep track of their workouts and get feedback from trainers.',
      image: 'https://example.com/project2.png',
      liveLink: 'https://guarded-lowlands-52633.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/workout_tracker',
    },
    {
      title: 'Notetaker',
      description: 'This is a web application created for users to create and save notes.',
      image: './projectImages/note.png',
      liveLink: 'https://cryptic-citadel-85045.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/Miriam-Notetaker',
    },
    {
      title: 'Fitness Tracker',
      description: 'This is a web application created for users to keep track of their workouts and get feedback from trainers.',
      image: 'https://example.com/project2.png',
      liveLink: 'https://guarded-lowlands-52633.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/workout_tracker',
    },
    {
      title: 'Tech Blog',
      description: 'This is a web application created for users to interact and create, save, and delete posts.',
      image: './projectImages/techb.png',
      liveLink: 'https://lit-badlands-30117.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/MVC-Challenge-Miriam',
    },
    {
      title: 'Savr',
      description: 'This is web application that connects users to deals around their location',
      image: './projectImages/savr-deal-board.png',
      liveLink: 'https://savr-app.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/Savr',
    },
  ];

  return (
    <div className='portfoliopage'>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} className="project-image" />
          <button class="live-demo-button"><a href={project.liveLink}>Live Demo</a></button>
<button class="github-repo-button"><a href={project.repoLink}>GitHub Repository</a></button>

        </div>
      ))}
    </div>
  );
};

export default Portfolio;
