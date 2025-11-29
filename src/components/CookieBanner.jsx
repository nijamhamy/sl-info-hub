import { useEffect, useState } from "react";
import "./CookieBanner.css"; // Create this file next

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p>
                This website uses cookies to improve your browsing experience and to
                show relevant content. By using our site, you agree to our
                <a href="/privacy-policy"> Privacy Policy</a>.
            </p>
            <button className="cookie-btn" onClick={acceptCookies}>
                Accept
            </button>
        </div>
    );
}
