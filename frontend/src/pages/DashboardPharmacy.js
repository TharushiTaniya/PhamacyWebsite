// FILE: PharmacyDashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import './PharmacyDashboard.css';  // Import the CSS file

const PharmacyDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const pharmacyId = localStorage.getItem("pharmacyId"); // Assuming pharmacyId is stored in localStorage

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/pharmacy/prescriptions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setPrescriptions(data);
      } catch (error) {
        console.error("Error fetching prescriptions:", error.message);
      }
    };

    const fetchQuotations = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/quotations/${pharmacyId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setQuotations(data);
      } catch (error) {
        console.error("Error fetching quotations:", error.message);
      }
    };

    fetchPrescriptions();
    fetchQuotations();
  }, [pharmacyId]);

  return (
    <div className="container">
      <h2>Pharmacy Dashboard</h2>
      <h3>Prescriptions</h3>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription.id} className="card">
            <p>User ID: {prescription.user_id}</p>
            <p>Note: {prescription.note}</p>
            <p>Delivery Address: {prescription.delivery_address}</p>
            <p>Images:</p>
            <div className="images">
              {Array.isArray(JSON.parse(prescription.images)) &&
                JSON.parse(prescription.images).map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/public/uploads/${image}`}
                    alt={`Prescription ${index + 1}`}
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
      <h3>Quotations</h3>
      <ul>
        {quotations.map((quotation) => (
          <li key={quotation.id} className="quotation-card">
            <p>Prescription ID: {quotation.prescription_id}</p>
            <p>Quotation: {quotation.quotation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyDashboard;