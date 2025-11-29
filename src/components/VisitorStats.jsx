import { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./HomeAnimations.css";

export default function VisitorStats() {
    const [daily, setDaily] = useState(0);
    const [monthly, setMonthly] = useState(0);
    const [total, setTotal] = useState(0);

    async function fetchVisitors() {
        try {
            const res = await fetch("https://visitor-counter.amnijam60.workers.dev/");
            const data = await res.json();

            setDaily(data.daily);
            setMonthly(data.monthly);
            setTotal(data.total);
        } catch (err) {
            console.error("Visitor counter error:", err);
        }
    }

    useEffect(() => {
        fetchVisitors();
        const i = setInterval(fetchVisitors, 30000);
        return () => clearInterval(i);
    }, []);

    return (
        <div className="visitor-stats-wrapper">
            <div className="container my-5">
                <h2 className="fw-bold text-center mb-4">👥 Visitor Statistics</h2>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="visitor-box shadow-lg p-4 text-center">
                            <i className="bi bi-calendar-check visitor-icon"></i>
                            <h4 className="mt-3">Daily Visitors</h4>
                            <h2 className="visitor-count">
                                <CountUp end={daily} duration={1.6} separator="," />
                            </h2>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="visitor-box shadow-lg p-4 text-center">
                            <i className="bi bi-calendar-month visitor-icon"></i>
                            <h4 className="mt-3">Monthly Visitors</h4>
                            <h2 className="visitor-count">
                                <CountUp end={monthly} duration={1.6} separator="," />
                            </h2>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="visitor-box shadow-lg p-4 text-center">
                            <i className="bi bi-people-fill visitor-icon"></i>
                            <h4 className="mt-3">Total Visitors</h4>
                            <h2 className="visitor-count">
                                <CountUp end={total} duration={1.6} separator="," />
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
