import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'SQL Employee Tracker',
      description: 'This project enables non-developers to access and view employee information stored in an SQL database using user-friendly content management systems.',
      image: './projectImages/sqlphoto.png',
      liveLink: 'https://drive.google.com/file/d/154FzJMI8_I4L6G1zddZw1wO4CyD9LuRI/view',
      repoLink: 'https://github.com/silvam22/Miriam-SQL-Challenge',
    },
    {
      title: 'Savr',
      description: 'This is fullstack web application powered by REACT that connects users to deals around Seattle.',
      image: './projectImages/savr-deal-board.png',
      liveLink: 'https://savr-app.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/Savr',
    },
    {
      title: 'Just Another Text Editor',
      description: 'This project aims to create a roster for your ongoing project. It enables you to assign engineers, interns, and managers to a roster displayed on an HTML page. The app includes tests using Jest to ensure its readiness for production.',
      image: './projectImages/texteditor.png',
      liveLink: 'https://immense-bayou-98168.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/texteditor-pwa',
    },
    {
      title: 'Team Generator',
      description: 'The Front-end Team Generator application is designed to create team members by utilizing command-line prompts. It provides an interactive interface that allows you to input information about each team member, such as their role, name, and contact details. Additionally, the application employs JEST, a testing framework, to verify the functionality and integrity of the generated components. ',
      image: './projectImages/team.png',
      liveLink: 'https://drive.google.com/file/d/121yRCR4HvAcVZADvwGndaoDzOZfrBzdQ/view',
      repoLink: 'https://github.com/silvam22/Miriam-Team',
    },
    {
      title: 'Notetaker',
      description: 'This is a web application created for users to create and save notes.',
      image: './projectImages/note.png',
      liveLink: 'https://cryptic-citadel-85045.herokuapp.com/',
      repoLink: 'https://github.com/silvam22/Miriam-Notetaker',
    },
    {
      title: 'Work Day Scheduler',
      description: 'This is a front end application for non-developers to organize their work schedule using the app. Technologies used for this app are HTML, Javascript and CSS',
      image: './projectImages/wds.png',
      liveLink: 'https://silvam22.github.io/Miriam-WDS/',
      repoLink: 'https://github.com/silvam22/Miriam-WDS',
    }
  ];

  return (
    <div className='portfoliopage'>
      <h1>Projects</h1>
      <div className='project-grid'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;


