import NewsCard from "../components/NewsCard";
import { newsList } from "../data/slNewsData";
import { useState } from "react";
import "./NewsGrid.css";   // ← Import the grid CSS file
import BackToTop from "../components/BackToTop";

import { Helmet } from "react-helmet";

<Helmet>
    <title>SL Info Hub – Sri Lanka News, Radio & Weather</title>
    <meta name="description" content="Latest Sri Lankan news, FM radio, weather, and updates in one place." />
    <meta name="keywords" content="Sri Lanka news, sri lanka radio, tamil news, sinhala news, SL updates" />
</Helmet>


export default function SLNews() {
    const [filter, setFilter] = useState("All");

    const filteredNews =
        filter === "All"
            ? newsList
            : newsList.filter((item) => item.language === filter);

    return (
        <div className="container mt-5 pt-4" style={{ paddingTop: "80px", paddingBottom: "90px" }}>

            {/* Filter Buttons */}
            <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-outline-primary" onClick={() => setFilter("All")}>All</button>
                <button className="btn btn-outline-dark" onClick={() => setFilter("Sinhala")}>Sinhala</button>
                <button className="btn btn-outline-danger" onClick={() => setFilter("Tamil")}>Tamil</button>
                <button className="btn btn-outline-success" onClick={() => setFilter("English")}>English</button>
            </div>

            {/* Cards Grid */}
            <div className="cards-grid">
                {filteredNews.map((item) => (
                    <div className="card-col" key={item.id}>
                        <NewsCard
                            image={item.image}
                            name={item.name}
                            language={item.language}
                            url={item.url}
                        />
                    </div>
                ))}
            </div>
            <BackToTop />

        </div>
    );
}
