import React from "react";
import { Link } from "react-router-dom";
import "./RadioCard.css";

export default function RadioCard({ image, name, language, website }) {
    return (
        <div className="card-fixed">   {/* ✅ FIXED WIDTH WRAPPER */}

            <div
                className="radio-card radio-card-container"
                style={{ cursor: "pointer" }}
            >
                {/* Language Badge */}
                <span className="radio-badge">{language}</span>

                {/* Image */}
                <div className="radio-img-box">
                    <img src={image} alt={name} />
                </div>

                {/* Name */}
                <h5 className="mt-2">{name}</h5>

                {/* Play Button */}
                <Link
                    to={`/webview/${encodeURIComponent(website)}`}
                    className="btn btn-primary w-100 mt-2"
                    style={{
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "6px 0"
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    ▶ Play
                </Link>
            </div>

        </div>
    );
}
