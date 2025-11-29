import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy – SL Info Hub</title>
                <meta
                    name="description"
                    content="Read the Privacy Policy for SL Info Hub. Learn how we collect, use and protect your data, including details about cookies, analytics, advertising, and Google AdSense."
                />
                <meta
                    name="keywords"
                    content="privacy policy, data protection, cookies, Google AdSense, SL Info Hub policy"
                />
            </Helmet>

            <div className="container mt-5 pt-5" style={{ paddingBottom: "100px" }}>
                <h1 className="fw-bold mb-4">🔐 Privacy Policy</h1>
                <p className="lead"><strong>Last Updated: January 2025</strong></p>

                <p>
                    SL Info Hub respects your privacy. This Privacy Policy explains what information
                    we collect, how it is used, and your choices regarding data when using our website.
                    By accessing SL Info Hub, you agree to this Policy.
                </p>

                <hr />

                <h2 className="mt-5">1. Information We Collect</h2>
                <p>
                    We do <strong>not</strong> collect personal information such as your name or address
                    unless you voluntarily contact us. We only collect basic non-personal data needed to
                    operate and improve the website.
                </p>

                <h3>1.1 Analytics Data</h3>
                <p>
                    We use tools like Google Analytics to collect anonymous information such as:
                </p>
                <ul>
                    <li>Device type (mobile/desktop)</li>
                    <li>Browser type and language</li>
                    <li>Pages visited and time spent</li>
                    <li>Anonymized IP for approximate location</li>
                </ul>

                <h3>1.2 API Usage</h3>
                <p>
                    Weather, currency rates, and prayer times are provided using third-party APIs.
                    These services may temporarily process your IP only to deliver data. We do not store this.
                </p>

                <h3>1.3 Radio Streams</h3>
                <p>
                    Radio streams load directly from their official providers. SL Info Hub does not record
                    or monitor any audio activity.
                </p>

                <hr />

                <h2 className="mt-5">2. Cookies</h2>
                <p>
                    SL Info Hub uses cookies for essential functions, analytics, and advertising. You may
                    disable cookies in your browser at any time.
                </p>

                <ul>
                    <li><strong>Essential:</strong> Needed for site functionality.</li>
                    <li><strong>Analytics:</strong> Helps us understand site usage.</li>
                    <li><strong>Advertising:</strong> Used by Google AdSense.</li>
                </ul>

                <hr />

                <h2 className="mt-5">3. Google AdSense</h2>
                <p>
                    We use Google AdSense to show ads. Google may use cookies, including the DART cookie,
                    to display personalized ads based on your visits to this and other websites.
                </p>

                <p>
                    <strong>
                        Users can opt out of personalized advertising by visiting{" "}
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Ad Settings
                        </a>.
                    </strong>
                </p>

                <p>
                    Third-party advertisers may also use cookies to measure ad performance. SL Info Hub does not
                    control their data usage.
                </p>

                <hr />

                <h2 className="mt-5">4. How We Use Data</h2>
                <p>
                    Non-personal data is used only to improve website performance, fix issues,
                    and understand user activity. We do not sell or share data for profit.
                </p>

                <hr />

                <h2 className="mt-5">5. External Links</h2>
                <p>
                    Our site may link to third-party websites and radio stations. Once you leave SL Info Hub,
                    their privacy policies apply.
                </p>

                <hr />

                <h2 className="mt-5">6. Children’s Privacy</h2>
                <p>
                    Our website is not intended for children under 13. We do not knowingly collect data from children.
                </p>

                <hr />

                <h2 className="mt-5">7. Policy Updates</h2>
                <p>
                    We may update this Privacy Policy occasionally. The latest version will always be posted here.
                </p>

                <hr />

                <h2 className="mt-5">8. Contact Us</h2>
                <p>
                    📧 Email: <a href="mailto:amnijam60@gmail.com">amnijam60@gmail.com</a>
                </p>

                <p className="mt-5">
                    Thank you for using <strong>SL Info Hub</strong>.
                </p>
            </div>

        </>
    );
}
