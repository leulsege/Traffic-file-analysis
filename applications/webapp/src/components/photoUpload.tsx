// PhotoUpload.js
import { useState } from "react";
import styles from "./PhotoUpload.module.css";

function PhotoUpload({ url, setProfile }: any) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event: any) => {
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
        if (driverInfo.data.driver) setProfile(driverInfo.data.driver);
        else if (driverInfo.data.user) setProfile(driverInfo.data.user);
        else if (driverInfo.data.vehicleAccident)
          setProfile(driverInfo.data.vehicleAccident);
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
