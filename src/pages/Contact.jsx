import { Helmet } from "react-helmet";


export default function Contact() {
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
                <h2 className="fw-bold mb-4">Contact Us</h2>

                <p>
                    If you have any questions, suggestions, bug reports, or partnership ideas
                    related to <strong>SL Info Hub</strong>, we would be happy to hear from you.
                    Use the contact details or the form below to reach out.
                </p>

                <h4 className="mt-4">Email</h4>
                <p>
                    📧 <a href="mailto:amnijam60@gmail.com">amnijam60@gmail.com</a>
                </p>

                <h4 className="mt-4">Support &amp; Feedback Form</h4>
                <p>
                    You can also send us a message directly by filling out this form. Your
                    email app will open with your message ready to send to our support inbox.
                </p>

                <form
                    className="mt-3"
                    action="mailto:amnijam60@gmail.com"
                    method="POST"
                    encType="text/plain"
                >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="Name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            className="form-control"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="Subject"
                            className="form-control"
                            placeholder="Support, Feedback, Bug report, Partnership, etc."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="Message"
                            className="form-control"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>

                <h4 className="mt-5">Business / Partnership Inquiries</h4>
                <p>
                    For advertising, promotions, or partnership opportunities with
                    <strong> SL Info Hub</strong>, please contact us via email and include
                    basic details about your brand and proposal so we can respond quickly.
                </p>

                <p className="mt-4">
                    Thank you for supporting <strong>SL Info Hub</strong>. Your feedback helps
                    us improve and build a better experience for all users.
                </p>
            </div>
        </>
    );
}
