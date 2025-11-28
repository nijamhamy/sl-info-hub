import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaBroadcastTower, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            {/* Desktop Footer */}
            <footer className="bg-dark text-light fixed-bottom py-2 d-none d-lg-block">
                <div className="container text-center">

                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-1">
                        <Link className="text-light small text-decoration-none" to="/">Home</Link>
                        <Link className="text-light small text-decoration-none" to="/sl-news">SL News</Link>
                        <Link className="text-light small text-decoration-none" to="/sl-radio">SL Radio</Link>
                        <Link className="text-light small text-decoration-none" to="/privacy-policy">Privacy Policy</Link>
                    </div>

                    <small className="text-secondary small">
                        © {new Date().getFullYear()} SL Info Hub
                    </small>

                </div>
            </footer>

            {/* Mobile Footer */}
            <footer className="bg-dark text-light fixed-bottom py-2 d-lg-none">
                <div className="container">

                    <div className="d-flex justify-content-around text-center">

                        <Link to="/" className="text-light text-decoration-none">
                            <FaHome size={20} />
                            <div className="small mt-1">Home</div>
                        </Link>

                        <Link to="/sl-news" className="text-light text-decoration-none">
                            <FaNewspaper size={20} />
                            <div className="small mt-1">News</div>
                        </Link>

                        <Link to="/sl-radio" className="text-light text-decoration-none">
                            <FaBroadcastTower size={20} />
                            <div className="small mt-1">Radio</div>
                        </Link>

                        <Link to="/contact" className="text-light text-decoration-none">
                            <FaPhone size={20} />
                            <div className="small mt-1">Contact</div>
                        </Link>

                    </div>

                </div>
            </footer>
        </>
    );
}
