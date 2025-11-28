export default function Loading() {
    return (
        <div
            style={{
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div className="loader"></div>

            <style>{`
                .loader {
                    width: 48px;
                    height: 48px;
                    border: 5px solid #007bff;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    animation: rotation 0.8s linear infinite;
                }

                @keyframes rotation {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
