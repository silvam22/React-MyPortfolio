import React from 'react';

class DownloadButton extends React.Component {
  // function to handle the file download
  downloadFile = () => {
    // create an anchor element and set the file URL and file name
    const link = document.createElement('a');
    link.href = '/resumes/techresume.html' // replace with your file's URL or path
    link.setAttribute('download', 'techresume.html');
    link.style.display = 'none';
 
    // add the anchor element to your document
    document.body.appendChild(link);

    // trigger the download by stimulating click
    link.click();

    // clean up: remove the anchor element from the DOM 
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