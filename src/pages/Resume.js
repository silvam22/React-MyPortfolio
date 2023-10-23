import React from 'react';

const Resume = () => {
  const resumeUrl = '/resumes/techresume.pdf';

  return (
    <div>
      <h1>Resume</h1>
      <a href={resumeUrl} download="techresume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;