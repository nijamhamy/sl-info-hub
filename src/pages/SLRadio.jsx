import React, { useState } from "react";
import RadioCard from "../components/RadioCard";
import { radioList } from "../data/slRadioData";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";

export default function SLRadio() {
    const [filter, setFilter] = useState("All");

    // FILTER LOGIC
    const filteredStations =
        filter === "All"
            ? radioList
            : radioList.filter((item) => item.language === filter);

    return (
        <>
            {/* SEO Helmet */}
            <Helmet>
                <title>SL Radio – Listen to Sri Lankan Tamil, Sinhala & English FM Stations</title>
                <meta
                    name="description"
                    content="Listen to Sri Lankan FM radio channels online. Browse Tamil, Sinhala, and English radio stations including Sooriyan FM, Shakthi FM, Hiru FM, Lakhanda, Vasantham FM and more."
                />
                <meta
                    name="keywords"
                    content="Sri Lanka radio, Sri Lanka FM, Tamil FM radio, Sinhala FM radio, English radio Sri Lanka, online radio Sri Lanka, live FM Sri Lanka"
                />
            </Helmet>

            <div
                className="container mt-5 pt-4"
                style={{ paddingTop: "80px", paddingBottom: "90px" }}
            >

                {/* PAGE TITLE */}
                <h1 className="fw-bold text-center mb-4">
                    📻 Sri Lankan FM Radio – Tamil | Sinhala | English
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
                    {filteredStations.map((item) => (
                        <div className="card-col" key={item.id}>
                            <RadioCard
                                image={item.image}
                                name={item.name}
                                language={item.language}
                                website={item.website}
                            />
                        </div>
                    ))}
                </div>

                {/* ===================== SEO ARTICLE AT BOTTOM ===================== */}
                <div className="seo-article mb-5" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                    <h2 className="fw-bold mb-3">🎧 About Sri Lankan Online Radio</h2>

                    <p>
                        Online radio has become one of the most popular digital entertainment
                        platforms in Sri Lanka. With the growth of smartphones, mobile data,
                        and high-speed internet, millions of listeners now tune in to FM channels
                        using the web instead of traditional radios. Online streaming is clearer,
                        faster, and more reliable, especially during bad weather or low-signal areas.
                    </p>

                    <p>
                        Tamil listeners mainly follow stations such as Sooriyan FM, Shakthi FM,
                        Varnam FM, IBC Tamil, and Vasantham FM. Sinhala listeners enjoy Hiru FM,
                        Sirasa FM, Shaa FM, Lakhanda, and Swarnavahini FM, while English listeners
                        prefer Lite FM, Yes FM, and TNL Radio. These stations cover music, news,
                        religious programs, talk shows, and live entertainment.
                    </p>

                    <p>
                        Online radio is especially popular among Sri Lankans living abroad. Whether
                        in the Middle East, Europe, Australia, or America, people can listen to their
                        favorite stations from home and feel more connected to Sri Lankan culture.
                        Music, news, and familiar voices help create a sense of belonging even when
                        living far from home.
                    </p>

                    <p>
                        This page helps you quickly explore Tamil, Sinhala, and English radio
                        stations — all in one organized list. Choose your preferred language and
                        enjoy smooth streaming with just one click. Whether you want news, songs,
                        lectures, religious content, or entertainment, Sri Lankan online radio has
                        something for everyone.
                    </p>
                </div>

                <BackToTop />
            </div>
        </>
    );
}
