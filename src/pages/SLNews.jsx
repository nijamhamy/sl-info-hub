import NewsCard from "../components/NewsCard";
import { newsList } from "../data/slNewsData";
import { useState } from "react";
import "./NewsGrid.css";
import BackToTop from "../components/BackToTop";

import { Helmet, HelmetProvider } from "react-helmet-async";


export default function SLNews() {
    const [filter, setFilter] = useState("All");

    const filteredNews =
        filter === "All"
            ? newsList
            : newsList.filter((item) => item.language === filter);

    return (
        <>
            {/* SEO Helmet */}
            <Helmet>
                <title>SL News – Latest Sri Lankan Tamil, Sinhala & English News</title>
                <meta
                    name="description"
                    content="Browse all major Sri Lankan news websites in one place. Access Tamil, Sinhala, and English news updates instantly — politics, sports, weather, economy, live alerts and more."
                />
                <meta
                    name="keywords"
                    content="Sri Lanka news, Tamil news Sri Lanka, Sinhala news Sri Lanka, English news Sri Lanka, SL news, Sri Lanka headlines"
                />
            </Helmet>

            <div
                className="container mt-5 pt-4"
                style={{ paddingTop: "80px", paddingBottom: "90px" }}
            >

                {/* PAGE TITLE */}
                <h1 className="fw-bold text-center mb-4">
                    🇱🇰 Sri Lankan News – Tamil | Sinhala | English
                </h1>

                {/* Filter Buttons */}
                <div className="d-flex justify-content-center gap-3 mb-4">
                    <button className="btn btn-outline-primary" onClick={() => setFilter("All")}>All</button>
                    <button className="btn btn-outline-dark" onClick={() => setFilter("Sinhala")}>Sinhala</button>
                    <button className="btn btn-outline-danger" onClick={() => setFilter("Tamil")}>Tamil</button>
                    <button className="btn btn-outline-success" onClick={() => setFilter("English")}>English</button>
                </div>

                {/* Cards Grid */}
                <div className="cards-grid mb-5">
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

                {/* ===================== SEO ARTICLE AT BOTTOM ===================== */}
                <div className="seo-article mb-5" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                    <h2 className="fw-bold mb-3">📰 About Sri Lankan News</h2>

                    <p>
                        Sri Lanka has a strong and fast-growing digital news ecosystem. Every day,
                        millions of Sri Lankans check news online in Tamil, Sinhala, and English
                        to stay informed about politics, weather, business, sports, and international
                        updates. With so many websites available, finding everything in one place
                        can be difficult — that is why SL Info Hub brings them together for you.
                    </p>

                    <p>
                        Tamil audiences rely heavily on platforms like Virakesari, Thinakaran,
                        Lankasri, and IBC Tamil, while Sinhala audiences follow Ada Derana,
                        Hiru News, News First, Rivira, and Dinamina for reliable updates.
                        English readers frequently visit outlets like Daily News, ColomboPage,
                        Sunday Observer, and Daily FT.
                    </p>

                    <p>
                        Digital news continues to replace traditional newspapers in Sri Lanka,
                        especially because mobile devices make it easy to access breaking updates
                        anytime. With instant notifications, live videos, and continuous news feeds,
                        online platforms give readers the fastest access to information.
                    </p>

                    <p>
                        On this page, you can filter news by Tamil, Sinhala, or English and explore
                        trusted sources easily. Whether you live in Sri Lanka or abroad, this page
                        makes it simple to stay connected to important events happening back home.
                    </p>
                </div>

                <BackToTop />

            </div>
        </>
    );
}
