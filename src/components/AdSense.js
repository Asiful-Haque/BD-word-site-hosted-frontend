import Script from "next/script";

function AdSense() {
  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2642708445471409"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ backgroundColor: "grey", display: "inline-block", width: "100%", height: "250px" }}
        data-ad-client="ca-pub-2642708445471409"
        data-ad-slot="1543436321"
      ></ins>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}

export default AdSense;
