import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function WebView() {
    const { url } = useParams();
    const navigate = useNavigate();
    const decodedURL = decodeURIComponent(url);

    const [loading, setLoading] = useState(true);
    const iframeRef = useRef(null);
    const detectTimer = useRef(null);
    const timeoutTimer = useRef(null);

    // Auto open new tab + go back
    const openExternal = () => {
        window.open(decodedURL, "_blank", "noopener,noreferrer");
        navigate(-1);
    };

    // Main detection logic
    useEffect(() => {
        // 1) Timeout → If still loading after 7 sec → blocked
        timeoutTimer.current = setTimeout(() => {
            if (loading) openExternal();
        }, 7000);

        // 2) Detect blank / blinking iframe → open external
        detectTimer.current = setInterval(() => {
            const iframe = iframeRef.current;

            if (!iframe) return;

            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;

                // If blank page / white screen
                if (!doc.body || doc.body.innerHTML.trim() === "") {
                    openExternal();
                }

                // If height is 0 (blocked iframe)
                if (doc.body.clientHeight < 50) {
                    openExternal();
                }

            } catch (err) {
                // Security error → iframe blocked
                openExternal();
            }
        }, 1500); // check every 1.5sec

        return () => {
            clearTimeout(timeoutTimer.current);
            clearInterval(detectTimer.current);
        };
    }, [decodedURL]);

    const handleIframeLoad = () => {
        setLoading(false);
    };

    return (
        <div style={{ paddingTop: "70px", height: "100vh", background: "#f8f9fa" }}>

            {/* Top Bar */}
            <div
                style={{
                    padding: "10px 15px",
                    background: "#ffffff",
                    borderBottom: "1px solid #ddd",
                    position: "fixed",
                    top: "60px",
                    left: 0,
                    width: "100%",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <button className="btn btn-dark" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <button className="btn btn-primary" onClick={openExternal}>
                    Open Externally ↗
                </button>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div style={{ marginTop: "180px", textAlign: "center" }}>
                    <div
                        className="spinner-border text-primary"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    ></div>
                    <p style={{ marginTop: "15px", fontSize: "16px", color: "#555" }}>
                        Loading website...
                    </p>
                </div>
            )}

            {/* Iframe */}
            <iframe
                ref={iframeRef}
                src={decodedURL}
                title="webview"
                onLoad={handleIframeLoad}
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    marginTop: "110px"
                }}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            ></iframe>
        </div>
    );
}
