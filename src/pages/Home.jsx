import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import RadioCard from "../components/RadioCard";
import { newsList } from "../data/slNewsData";
import { radioList } from "../data/slRadioData";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";

import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import VisitorStats from "../components/VisitorStats";




export default function Home() {
    const [randomNews, setRandomNews] = useState([]);
    const [randomRadios, setRandomRadios] = useState([]);

    // Live data states
    const [weather, setWeather] = useState({});
    const [rates, setRates] = useState({});
    const [prayers, setPrayers] = useState({});

    /* ===========================================================
    1. Random News + Radios
    ============================================================ */
    useEffect(() => {
        const shuffled = [...newsList].sort(() => 0.5 - Math.random());
        setRandomNews(shuffled.slice(0, 10));
    }, []);

    useEffect(() => {
        const shuffled = [...radioList].sort(() => 0.5 - Math.random());
        setRandomRadios(shuffled.slice(0, 10));
    }, []);


    useEffect(() => {
        async function fetchWeather() {
            try {
                // Colombo
                const colApi =
                    "https://api.open-meteo.com/v1/forecast?latitude=6.9271&longitude=79.8612&current_weather=true";
                const col = await fetch(colApi).then(r => r.json());

                // Kandy
                const kandyApi =
                    "https://api.open-meteo.com/v1/forecast?latitude=7.2906&longitude=80.6337&current_weather=true";
                const kandy = await fetch(kandyApi).then(r => r.json());

                // Jaffna
                const jaffnaApi =
                    "https://api.open-meteo.com/v1/forecast?latitude=9.6615&longitude=80.0255&current_weather=true";
                const jaffna = await fetch(jaffnaApi).then(r => r.json());

                setWeather({
                    colombo: col.current_weather?.temperature,
                    kandy: kandy.current_weather?.temperature,
                    jaffna: jaffna.current_weather?.temperature
                });

            } catch (err) {
                console.error("Weather Error:", err);
            }
        }
        fetchWeather();
    }, []);


    /* ===========================================================
    3. Live Currency Exchange Rates
    ============================================================ */
    useEffect(() => {
        async function fetchRates() {
            try {
                const data = await fetch(
                    "https://api.exchangerate-api.com/v4/latest/USD"
                ).then(r => r.json());

                setRates({
                    usd: data.rates.LKR,
                    sar: data.rates.LKR / data.rates.SAR,
                    aed: data.rates.LKR / data.rates.AED
                });
            } catch (err) {
                console.log("Rate error:", err);
            }
        }

        fetchRates();
    }, []);

    /* ===========================================================
    4. Live Prayer Times (Colombo)
    ============================================================ */
    useEffect(() => {
        async function fetchPrayers() {
            try {
                const data = await fetch(
                    "https://api.aladhan.com/v1/timingsByCity?city=Colombo&country=Sri Lanka"
                ).then(r => r.json());

                setPrayers({
                    fajr: data.data.timings.Fajr,
                    dhuhr: data.data.timings.Dhuhr,
                    maghrib: data.data.timings.Maghrib
                });
            } catch (err) {
                console.log("Prayer error:", err);
            }
        }

        fetchPrayers();
    }, []);

    /* ===========================================================
    RETURN PAGE UI
    ============================================================ */

    return (

        <>
            <Helmet>
                <title>SL Info Hub – Sri Lanka News, Radio & Weather</title>
                <meta name="description" content="Latest Sri Lankan news, FM radio, weather, and updates in one place." />
                <meta name="keywords" content="Sri Lanka news, sri lanka radio, tamil news, sinhala news, SL updates" />
            </Helmet>
            <div className="container mt-5 pt-4 home-page"
                style={{ paddingTop: "80px", paddingBottom: "90px" }}>

                {/* Home Content START */}
                <div className="home-content">


                    {/* ================= NEWS SECTION ================= */}
                    {/* ================= NEWS SECTION ================= */}
                    <div className="section-header">
                        <h2 className="fw-bold">🇱🇰 Sri Lanka News</h2>
                        <Link to="/sl-news" className="btn btn-sm btn-primary">View All</Link>
                    </div>

                    <div className="scroll-wrapper">
                        <button
                            className="scroll-arrow left"
                            onClick={() =>
                                document.getElementById("news-row").scrollBy({ left: -300, behavior: "smooth" })
                            }
                        >
                            ❮
                        </button>

                        <div id="news-row" className="scroll-row fade-row">
                            {randomNews.map((item) => (
                                <div key={item.id} className="scroll-item">
                                    <NewsCard {...item} />
                                </div>
                            ))}
                        </div>

                        <button
                            className="scroll-arrow right"
                            onClick={() =>
                                document.getElementById("news-row").scrollBy({ left: 300, behavior: "smooth" })
                            }
                        >
                            ❯
                        </button>
                    </div>

                    <hr className="my-5" />

                    {/* ================= RADIO SECTION ================= */}
                    {/* ================= RADIO SECTION ================= */}
                    <div className="section-header">
                        <h2 className="fw-bold">📻 Sri Lanka Radios</h2>
                        <Link to="/sl-radio" className="btn btn-sm btn-primary">View All</Link>
                    </div>

                    <div className="scroll-wrapper">
                        <button
                            className="scroll-arrow left"
                            onClick={() =>
                                document.getElementById("radio-row").scrollBy({ left: -300, behavior: "smooth" })
                            }
                        >
                            ❮
                        </button>

                        <div id="radio-row" className="scroll-row fade-row">
                            {randomRadios.map((item) => (
                                <div key={item.id} className="scroll-item">
                                    <RadioCard {...item} />
                                </div>
                            ))}
                        </div>

                        <button
                            className="scroll-arrow right"
                            onClick={() =>
                                document.getElementById("radio-row").scrollBy({ left: 300, behavior: "smooth" })
                            }
                        >
                            ❯
                        </button>
                    </div>


                    <hr className="my-5" />

                    {/* ================= INFO BLOCKS ================= */}
                    <div className="info-grid">

                        {/* Weather */}
                        <div className="info-card">
                            <h4>🌤 Weather (Sri Lanka)</h4>
                            <p>Colombo: {weather.colombo ?? "..."}°C</p>
                            <p>Kandy: {weather.kandy ?? "..."}°C</p>
                            <p>Jaffna: {weather.jaffna ?? "..."}°C</p>
                        </div>

                        {/* Exchange Rates */}
                        <div className="info-card">
                            <h4>💱 Exchange Rates</h4>
                            <p>1 USD = {rates.usd?.toFixed(2) ?? "..."} LKR</p>
                            <p>1 SAR = {rates.sar?.toFixed(2) ?? "..."} LKR</p>
                            <p>1 AED = {rates.aed?.toFixed(2) ?? "..."} LKR</p>
                        </div>

                        {/* Prayer Times */}
                        <div className="info-card">
                            <h4>🕌 Prayer Times (Colombo)</h4>
                            <p>Fajr: {prayers.fajr ?? "..."}</p>
                            <p>Dhuhr: {prayers.dhuhr ?? "..."}</p>
                            <p>Maghrib: {prayers.maghrib ?? "..."}</p>
                        </div>

                    </div>

                </div>
                {/* ================= ARTICLES SECTION ================= */}
                <h2 className="fw-bold mt-5">📰 Trending Articles</h2>

                <div className="full-articles">

                    {/* ARTICLE 1 */}
                    <div className="article-box">
                        <h3>📻 Why Sri Lankans Love Online Radio in 2025</h3>
                        <p>
                            Online radio has become one of the most popular digital platforms in Sri Lanka.
                            Every day, millions of users listen to FM channels online because it is
                            faster, clearer, and works on any device. Traditional radio signals sometimes
                            fail due to weather or location, but online radio offers uninterrupted streaming.
                        </p>
                        <p>
                            Another reason Sri Lankans prefer online radio is convenience. Whether travelling,
                            working, or relaxing at home, listeners can choose from Tamil, Sinhala, English,
                            Islamic, Christian, and news-based stations in one place. This variety makes online
                            radio the future of entertainment in the country.
                        </p>
                        <p>
                            In 2025, online radio continues to grow because of mobile data packages,
                            4G/5G coverage, car dashboards, and smart devices. Sri Lankan youth especially
                            enjoy online radio while studying, gaming, or working. This trend will continue
                            increasing rapidly.
                        </p>
                    </div>

                    {/* ARTICLE 2 */}
                    <div className="article-box">
                        <h3>📰 Best Sri Lankan News Websites (2025 Updated Guide)</h3>
                        <p>
                            Sri Lanka has more than 100+ digital news platforms, but only a few are trusted.
                            Most readers check news websites several times a day for politics, sports,
                            economy, weather, and global news. Based on popularity and trust, the
                            top news sites are: Ada Derana, Hiru News, News First, Thinakaren, Thinakaran,
                            Daily News, and Lankasri.
                        </p>
                        <p>
                            Sri Lankans love online news because it is instant and accessible everywhere.
                            People can watch live videos, breaking news alerts, and read articles on mobile.
                            Unlike newspapers, digital news updates every minute. This real-time nature
                            makes users depend on online platforms more than ever.
                        </p>
                        <p>
                            In 2025, Sri Lankan news consumption moved mostly to online platforms.
                            With mobile data and social media sharing, news spreads faster than TV.
                            This is why news websites continue to dominate in Sri Lanka.
                        </p>
                    </div>

                    {/* ARTICLE 3 */}
                    <div className="article-box">
                        <h3>🌤 Weather & Exchange Rates: Why It Matters for Sri Lankans</h3>
                        <p>
                            Sri Lankan families check weather and exchange rates almost every day.
                            Weather affects travel, farming, school schedules, and daily life.
                            Colombo, Kandy, and Jaffna temperatures change often due to monsoon seasons.
                            Farmers especially depend on accurate weather updates for harvesting
                            and planting crops.
                        </p>
                        <p>
                            Exchange rates also play a huge role in Sri Lanka’s economy. The USD, SAR,
                            and AED directly impact import prices, food costs, electronics, and even
                            fuel. Many Sri Lankans working in the Middle East send money home, so
                            knowing the daily currency rate is essential.
                        </p>
                        <p>
                            With the current economic conditions, understanding both weather and
                            exchange rate trends helps people make better decisions, reduce expenses,
                            and plan financially.
                        </p>
                    </div>

                    {/* ARTICLE 4 */}
                    <div className="article-box">
                        <h3>🕌 Why Prayer Time Apps Are Important for Sri Lankan Muslims</h3>
                        <p>
                            In Sri Lanka, Muslims rely on accurate prayer times to organize their daily
                            routine around Fajr, Dhuhr, Asr, Maghrib, and Isha. Many people now use
                            digital tools and websites instead of printed timetables, because online
                            services update automatically and can adjust to seasonal time changes.
                        </p>
                        <p>
                            Prayer time platforms help students, workers, and travellers to plan their
                            day even if they are far from a mosque or their hometown. With one click,
                            they can see the next prayer time without confusion. This makes it easier
                            to maintain consistency in worship while managing a busy lifestyle.
                        </p>
                        <p>
                            In 2025, prayer time features on websites and apps are becoming standard
                            for many Islamic users in Sri Lanka and abroad. When combined with weather,
                            news, and daily utilities in one place, it saves time and reduces the need
                            to use multiple apps.
                        </p>
                    </div>

                    {/* ARTICLE 5 */}
                    <div className="article-box">
                        <h3>💻 How Sri Lankans Use Online Platforms to Stay Connected from Abroad</h3>
                        <p>
                            Every year, thousands of Sri Lankans move overseas for work and studies,
                            especially to the Middle East, Europe, and Asia. Even while living abroad,
                            they want to stay close to home through news, radio, sports updates, and
                            social content. Online platforms make this emotional connection possible.
                        </p>
                        <p>
                            By using Sri Lankan news sites, FM radio streams, and currency rate tools,
                            people can follow what is happening back home in real time. They can listen
                            to familiar voices, follow local politics, and keep track of economic changes
                            that affect their families.
                        </p>
                        <p>
                            Centralized hubs that gather all this information into one website are very
                            helpful for the diaspora. Instead of visiting many different pages, users
                            can quickly find everything they need, saving both time and mobile data.
                        </p>
                    </div>

                    {/* ARTICLE 6 */}
                    <div className="article-box">
                        <h3>📱 Mobile-Friendly News & Radio: Why Design Matters</h3>
                        <p>
                            Most Sri Lankans now access the internet using smartphones rather than
                            desktops. Because of this, websites that are not mobile-friendly lose a
                            lot of users. A clean layout, large buttons, and fast loading times are
                            essential for a good experience on small screens.
                        </p>
                        <p>
                            When a site is designed with mobile users in mind, listeners can start a
                            radio station with one tap, read headlines without zooming, and scroll
                            smoothly through content. This is especially important for people who use
                            3G, 4G, or public Wi-Fi with limited speed.
                        </p>
                        <p>
                            Responsive design also benefits users abroad who browse during work breaks
                            or travel. A well-optimized interface helps them enjoy Sri Lankan content
                            comfortably from any device or location.
                        </p>
                    </div>

                    {/* ARTICLE 7 */}
                    <div className="article-box">
                        <h3>🔐 Why Privacy and Safe Browsing Matter for News & Radio Users</h3>
                        <p>
                            Many users are now more careful about which websites they trust, especially
                            when it comes to news and streaming. People worry about data tracking,
                            unwanted pop-ups, and suspicious download prompts. A safe and clean browsing
                            experience builds long-term trust with visitors.
                        </p>
                        <p>
                            When a platform avoids forcing logins, keeps ads controlled, and loads
                            content securely over HTTPS, users feel more comfortable returning daily.
                            They can enjoy listening to radio and reading news without worrying about
                            their personal data or devices.
                        </p>
                        <p>
                            Transparent privacy policies and simple terms of use also show that the
                            website respects its audience. This is especially important for families
                            who let children browse or listen on shared devices.
                        </p>
                    </div>

                    {/* ARTICLE 8 */}
                    <div className="article-box">
                        <h3>🌍 Role of Exchange Rates for Sri Lankans Working Overseas</h3>
                        <p>
                            A large number of Sri Lankans work in countries like Saudi Arabia, UAE,
                            Qatar, and Kuwait. They regularly send money home to support their families.
                            For them, even a small change in the exchange rate between USD, SAR, AED,
                            and LKR can make a big difference in what their family receives.
                        </p>
                        <p>
                            By checking live currency rates online before sending money, workers can
                            choose the best day and time to transfer funds. This helps maximize the
                            value of every remittance and reduces loss due to sudden rate drops.
                        </p>
                        <p>
                            Having exchange rates displayed alongside news and weather makes it easier
                            to understand the economic situation at a glance. It also helps families in
                            Sri Lanka to plan expenses based on the strength of the rupee.
                        </p>
                    </div>

                    {/* ARTICLE 9 */}
                    <div className="article-box">
                        <h3>📡 Future of Digital Media in Sri Lanka</h3>
                        <p>
                            Digital media in Sri Lanka is expanding rapidly as more people adopt
                            smartphones, smart TVs, and low-cost internet packages. Traditional
                            newspapers, radio, and TV are now strongly supported by online versions
                            that reach users through websites and apps.
                        </p>
                        <p>
                            Younger audiences especially prefer platforms where they can watch, listen,
                            and read in one place. They expect fast content, dark mode support, push
                            notifications, and smooth streaming without interruption.
                        </p>
                        <p>
                            Websites that focus on speed, simplicity, and multi-language support will
                            play a major role in the future of Sri Lankan digital media. Central hubs
                            that organize trusted content in a clean interface will continue to grow.
                        </p>
                    </div>

                    {/* ARTICLE 10 */}
                    <div className="article-box">
                        <h3>🧭 One Platform for News, Radio, Weather, and Faith</h3>
                        <p>
                            Many Sri Lankans start their day by checking the news, listening to a quick
                            radio bulletin, seeing the weather, and confirming prayer times. Usually,
                            this requires opening multiple apps or websites, which takes time and effort.
                        </p>
                        <p>
                            A platform that combines these essentials into a single page makes daily
                            life easier. Users can see breaking headlines, play a favorite FM channel,
                            check the temperature in their city, and note the next prayer time in just
                            a few seconds.
                        </p>
                        <p>
                            As life becomes busier, centralized information hubs are becoming more
                            valuable. They respect the user’s time while keeping them informed,
                            entertained, and spiritually connected in one smooth experience.
                        </p>
                    </div>
                    <VisitorStats />

                </div>
                <BackToTop />


            </div >

        </>
    );
}
