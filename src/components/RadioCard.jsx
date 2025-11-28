import React from "react";
import { useNavigate } from "react-router-dom";
import "./RadioCard.css";

export default function RadioCard({ image, name, language, website }) {
    const navigate = useNavigate();

    // Detect mobile devices (iPhone, Android)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handlePlay = (e) => {
        e.stopPropagation();

        if (isMobile) {
            // Mobile → Always open directly (fix iframe radio block)
            window.open(website, "_blank", "noopener,noreferrer");
        } else {
            // Desktop → Use internal WebView
            navigate(`/webview/${encodeURIComponent(website)}`);
        }
    };

    return (
        <div className="card-fixed">

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

                {/* Play Button (converted to button with SAME design) */}
                <button
                    onClick={handlePlay}
                    className="btn btn-primary w-100 mt-2"
                    style={{
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "6px 0"
                    }}
                >
                    ▶ Play
                </button>
            </div>

        </div>
    );
}
