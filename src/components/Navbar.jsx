import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Navbar() {
    const navMenuRef = useRef(null);

    useEffect(() => {
        const menu = document.getElementById("navMenu");
        if (!menu) return;

        const bsCollapse = new window.bootstrap.Collapse(menu, {
            toggle: false,
        });

        // Close when clicking nav-links
        const closeOnClick = () => bsCollapse.hide();

        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => link.addEventListener("click", closeOnClick));

        // Close when clicking outside
        const handleOutside = (e) => {
            if (
                navMenuRef.current &&
                !navMenuRef.current.contains(e.target) &&
                !e.target.classList.contains("navbar-toggler") &&
                menu.classList.contains("show")
            ) {
                bsCollapse.hide();
            }
        };

        document.addEventListener("click", handleOutside);

        return () => {
            navLinks.forEach((link) =>
                link.removeEventListener("click", closeOnClick)
            );
            document.removeEventListener("click", handleOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
            <Link className="navbar-brand fw-bold" to="/">SL Info Hub</Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navMenu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div ref={navMenuRef} className="collapse navbar-collapse" id="navMenu">
                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/sl-news">SL News</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/sl-radio">SL Radio</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/terms">Terms & Conditions</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>


                </ul>
            </div>
        </nav>
    );
}
