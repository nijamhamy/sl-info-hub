import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
    return (

        <>
            <Helmet>
                <title>SL Info Hub – Sri Lanka News, Radio & Weather</title>
                <meta name="description" content="Latest Sri Lankan news, FM radio, weather, and updates in one place." />
                <meta name="keywords" content="Sri Lanka news, sri lanka radio, tamil news, sinhala news, SL updates" />
            </Helmet>
            <div
                className="container mt-5 pt-4"
                style={{ paddingTop: "80px", paddingBottom: "90px" }}
            >
                <h2 className="fw-bold mb-4">About Us</h2>

                <p>
                    Welcome to <strong>SL Info Hub</strong> — your convenient online gateway to
                    Sri Lankan news, FM radio stations, weather updates, currency exchange
                    rates, prayer times, and other useful information, all in one place.
                </p>

                <p>
                    Our goal is to make important information <strong>simple, fast, and
                        accessible</strong> for everyone. Whether you prefer Tamil, Sinhala, or
                    English, SL Info Hub helps you stay updated with real-time news headlines,
                    live radio streams, and practical daily information from trusted Sri Lankan
                    sources.
                </p>

                <p>
                    SL Info Hub is an independent digital platform created to help people stay
                    connected with Sri Lanka no matter where they live — from within the
                    island to the millions of Sri Lankans living abroad across the Middle East,
                    Europe, Asia, and beyond. With just a few clicks, you can follow the news,
                    listen to your favorite stations, and check the latest rates and weather.
                </p>

                <h4 className="mt-4">What We Offer</h4>
                <ul>
                    <li>📌 Latest Sri Lankan news (Tamil | Sinhala | English)</li>
                    <li>📌 Live FM radio streaming from top Sri Lankan stations</li>
                    <li>📌 Weather updates for major cities in Sri Lanka</li>
                    <li>📌 Daily currency exchange rates for key global currencies</li>
                    <li>📌 Prayer times for locations in Sri Lanka</li>
                    <li>📌 Selected tech, entertainment, and lifestyle content</li>
                </ul>

                <p className="mt-3">
                    We are continuously improving SL Info Hub by refining the design,
                    performance, and features of the platform, so that your experience remains
                    smooth, fast, and user-friendly on both mobile and desktop devices.
                </p>

                <p>
                    Thank you for choosing <strong>SL Info Hub</strong> — stay informed, stay
                    connected, and stay close to Sri Lanka wherever you are.
                </p>
            </div>
        </>
    );
}
