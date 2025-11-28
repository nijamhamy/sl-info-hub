import React from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css";

export default function NewsCard({ image, name, language, url }) {
    return (
        <div className="card-fixed">   {/* ✅ FIXED WIDTH WRAPPER */}

            <div
                className="news-link"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div
                    className="news-card position-relative shadow-sm p-3 text-center"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        borderRadius: "12px",
                        transition: "transform 0.2s ease, boxShadow 0.2s ease",
                    }}
                >
                    {/* Language Badge */}
                    <span
                        className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded-bottom-start"
                        style={{
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            borderTopRightRadius: "12px",
                        }}
                    >
                        {language}
                    </span>

                    {/* Image */}
                    <div
                        className="news-card-image"
                        style={{
                            width: "100%",
                            height: "120px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src={image}
                            alt={name}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* Name */}
                    <h5 className="mt-3 fw-bold" style={{ fontSize: "1.1rem" }}>
                        {name}
                    </h5>

                    {/* View Website Button */}
                    <Link
                        to={`/webview/${encodeURIComponent(url)}`}
                        className="btn btn-primary w-100 mt-2"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            fontWeight: "bold",
                            borderRadius: "8px",
                            padding: "6px 0"
                        }}
                    >
                        View Website
                    </Link>
                </div>
            </div>

        </div>
    );
}
