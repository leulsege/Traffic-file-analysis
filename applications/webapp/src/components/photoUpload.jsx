// PhotoUpload.js
import React, { useState } from "react";
import styles from "./PhotoUpload.module.css";

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Your upload logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className={styles.uploadButton}>
          Choose File
        </label>
      </div>
      <button onClick={handleUpload} className={styles.uploadButton}>
        Upload
      </button>
    </div>
  );
}

export default PhotoUpload;
