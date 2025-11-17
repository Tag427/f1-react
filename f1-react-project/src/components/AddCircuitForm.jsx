import { useState } from "react";
import "../css/AddCircuitForm.css";

const AddCircuitForm = ({ onCircuitAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    length_km: "",
    laps: "",
    drs_zones: "",
    opened: "",
  });
  
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "Submitting...", type: "" });
    
    if (formData.name.length < 3) {
      setFormStatus({ message: "Circuit name must be at least 3 characters", type: "error" });
      setIsSubmitting(false);
      return;
    }

    if (formData.length_km <= 0) {
      setFormStatus({ message: "Circuit length must be greater than 0", type: "error" });
      setIsSubmitting(false);
      return;
    }

    if (formData.laps <= 0) {
      setFormStatus({ message: "Number of laps must be greater than 0", type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://f1-server-vd2b.onrender.com/api/circuits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          location: formData.location,
          length_km: parseFloat(formData.length_km),
          laps: parseInt(formData.laps),
          drs_zones: parseInt(formData.drs_zones),
          opened: parseInt(formData.opened),
        }),
      });

      if (response.ok) {
        const newCircuit = await response.json();
        setFormStatus({ message: "Circuit added successfully!", type: "success" });
        
        setFormData({
          name: "",
          location: "",
          length_km: "",
          laps: "",
          drs_zones: "",
          opened: "",
        });

        if (onCircuitAdded) {
          onCircuitAdded(newCircuit);
        }

        setTimeout(() => {
          setFormStatus({ message: "", type: "" });
        }, 3000);
      } else {
        const errorData = await response.text();
        setFormStatus({ message: errorData || "Failed to add circuit", type: "error" });
      }
    } catch (error) {
      setFormStatus({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-circuit-form-container">
      <h2>Add New Circuit</h2>
      <p className="form-description">
        Submit a new Formula 1 circuit to the database. All fields are required.
      </p>

      <form className="add-circuit-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Circuit Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Silverstone Circuit"
              required
              minLength="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Silverstone, United Kingdom"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="length_km">Circuit Length (km) *</label>
            <input
              type="number"
              id="length_km"
              name="length_km"
              value={formData.length_km}
              onChange={handleChange}
              placeholder="e.g., 5.891"
              step="0.001"
              min="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="laps">Number of Laps *</label>
            <input
              type="number"
              id="laps"
              name="laps"
              value={formData.laps}
              onChange={handleChange}
              placeholder="e.g., 52"
              min="1"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="drs_zones">DRS Zones *</label>
            <input
              type="number"
              id="drs_zones"
              name="drs_zones"
              value={formData.drs_zones}
              onChange={handleChange}
              placeholder="e.g., 2"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="opened">Year Opened *</label>
            <input
              type="number"
              id="opened"
              name="opened"
              value={formData.opened}
              onChange={handleChange}
              placeholder="e.g., 1950"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Adding Circuit..." : "Add Circuit"}
        </button>

        {formStatus.message && (
          <div className={`form-status ${formStatus.type}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddCircuitForm;