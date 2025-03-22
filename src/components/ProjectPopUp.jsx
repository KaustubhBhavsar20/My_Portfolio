import React from 'react'

const ProjectPopUp = ({onClose}) => {
    return (
        <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Popup Content</h2>
        <p>This is a simple popup triggered by an anchor tag.</p>
      </div>
    </div>
      );
}

export default ProjectPopUp
