// PhotoUpload.js
import React, { useState } from "react";
import styles from "./PhotoUpload.module.css";

function PhotoUpload({ url, setProfile }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log(selectedImage);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedImage);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/${url}`,
        {
          method: "PATCH",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        const driverInfo = await response.json();
        setProfile(driverInfo.data.driver);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    }
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
