import React from 'react';

class DownloadButton extends React.Component {
  // function to handle the file download
  downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/resumes/techresume.pdf'
    link.setAttribute('download', 'techresume.pdf');
    link.style.display = 'none';
 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  render() {
    return (
      <button onClick={this.downloadFile}>
        Download
      </button>
    );
  }
}

// Main app component
function App() {
  return (
    <div className="App">
      {/* render the DownloadButton component */}
      <DownloadButton />
    </div>
  );
}

export default App;