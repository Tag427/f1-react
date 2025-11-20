import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/CircuitCard.css";

const CircuitCard = ({ 
  _id, 
  name, 
  location, 
  imgName, 
  slug, 
  length_km, 
  laps, 
  drs_zones, 
  opened,
  onUpdate, 
  onDelete 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editStatus, setEditStatus] = useState({ message: "", type: "" });
  
  const [editData, setEditData] = useState({
    name: name || "",
    location: location || "",
    length_km: length_km || "",
    laps: laps || "",
    drs_zones: drs_zones || "",
    opened: opened || "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditStatus({ message: "Saving...", type: "" });

    if (editData.name.length < 3) {
      setEditStatus({ message: "Name must be at least 3 characters", type: "error" });
      return;
    }

    if (editData.length_km <= 0) {
      setEditStatus({ message: "Length must be greater than 0", type: "error" });
      return;
    }

    if (editData.laps <= 0) {
      setEditStatus({ message: "Laps must be greater than 0", type: "error" });
      return;
    }

    try {
      const response = await fetch(`https://f1-server-vd2b.onrender.com/api/circuits/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editData.name,
          location: editData.location,
          length_km: parseFloat(editData.length_km),
          laps: parseInt(editData.laps),
          drs_zones: parseInt(editData.drs_zones),
          opened: parseInt(editData.opened),
        }),
      });

      if (response.ok) {
        const updatedCircuit = await response.json();
        setEditStatus({ message: "Updated successfully!", type: "success" });
        
        if (onUpdate) {
          onUpdate(updatedCircuit);
        }

        setTimeout(() => {
          setIsEditing(false);
          setEditStatus({ message: "", type: "" });
        }, 1500);
      } else {
        const errorData = await response.text();
        setEditStatus({ message: errorData || "Failed to update", type: "error" });
      }
    } catch (error) {
      setEditStatus({ message: "Network error. Please try again.", type: "error" });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete ${name}?`)) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(`https://f1-server-vd2b.onrender.com/api/circuits/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        if (onDelete) {
          onDelete(_id);
        }
      } else {
        alert("Failed to delete circuit");
        setIsDeleting(false);
      }
    } catch (error) {
      alert("Network error. Please try again.");
      setIsDeleting(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditStatus({ message: "", type: "" });
    setEditData({
      name: name || "",
      location: location || "",
      length_km: length_km || "",
      laps: laps || "",
      drs_zones: drs_zones || "",
      opened: opened || "",
    });
  };

  if (isEditing) {
    return (
      <article className="circuit-card circuit-card-editing">
        <form onSubmit={handleEditSubmit} className="edit-form">
          <h3>Edit Circuit</h3>
          
          <div className="edit-field">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleEditChange}
              required
              minLength="3"
            />
          </div>

          <div className="edit-field">
            <label>Location *</label>
            <input
              type="text"
              name="location"
              value={editData.location}
              onChange={handleEditChange}
              required
            />
          </div>

          <div className="edit-field">
            <label>Length (km) *</label>
            <input
              type="number"
              name="length_km"
              value={editData.length_km}
              onChange={handleEditChange}
              step="0.001"
              min="0.1"
              required
            />
          </div>

          <div className="edit-field">
            <label>Laps *</label>
            <input
              type="number"
              name="laps"
              value={editData.laps}
              onChange={handleEditChange}
              min="1"
              required
            />
          </div>

          <div className="edit-field">
            <label>DRS Zones *</label>
            <input
              type="number"
              name="drs_zones"
              value={editData.drs_zones}
              onChange={handleEditChange}
              min="0"
              required
            />
          </div>

          <div className="edit-field">
            <label>Year Opened *</label>
            <input
              type="number"
              name="opened"
              value={editData.opened}
              onChange={handleEditChange}
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div className="edit-actions">
            <button type="submit" className="btn btn-save">Save</button>
            <button type="button" className="btn btn-cancel" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>

          {editStatus.message && (
            <div className={`edit-status ${editStatus.type}`}>
              {editStatus.message}
            </div>
          )}
        </form>
      </article>
    );
  }

  return (
    <article className={`circuit-card ${isDeleting ? "deleting" : ""}`}>
      <figure className="thumb">
        <img src={imgName || "/images/default-circuit.jpg"} alt={`${name} track map`} />
      </figure>
      <h3>{name}</h3>
      <p className="location">{location}</p>
      
      <div className="card-actions">
        {slug && (
          <Link className="btn" to={`/circuit/${slug}`}>
            View Circuit
          </Link>
        )}
        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </article>
  );
};

export default CircuitCard;
