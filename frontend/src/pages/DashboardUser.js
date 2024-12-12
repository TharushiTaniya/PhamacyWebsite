import React, { useState } from "react";
import axios from "axios";
import './DashboardUser.css';  // Import the CSS file

const DashboardUser = () => {
  const [note, setNote] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("userId")); // Ensure userId is stored in localStorage
    formData.append("note", note);
    formData.append("deliveryAddress", deliveryAddress);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/prescriptions/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(data.message);
    } catch (error) {
      console.error("Upload Error:", error.message);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Welcome to the User Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Delivery Address"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload Prescription</button>
      </form>
    </div>
  );
};

export default DashboardUser;
