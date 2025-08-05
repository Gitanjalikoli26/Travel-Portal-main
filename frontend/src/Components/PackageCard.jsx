import React from "react";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ title, image, price, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card m-3 shadow-sm"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => navigate(link)}
    >
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Starting from <strong>${price}</strong>
        </p>
        <button className="btn btn-primary w-100">View Details</button>
      </div>
    </div>
  );
};

export default PackageCard;
