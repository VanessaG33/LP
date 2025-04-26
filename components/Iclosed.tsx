import Script from "next/script";

export default function IClosed() {
  return (
    <div>
      {/* Injection du script iClosed */}
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="lazyOnload" // ou "afterInteractive"
      />

      {/* Ton widget */}
      <div
        className="iclosed-widget"
        data-url="https://app.iclosed.io/e/l-ecole-des-conciergeries/appel-strategique"
        title="💻 Visio Stratégique"
        style={{ width: "100%", height: "620px" }}
      ></div>
    </div>
  );
}
