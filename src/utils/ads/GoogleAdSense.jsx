import React, { useEffect } from "react";

export const GoogleAdSenseVertical = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    document.head.appendChild(script);

    script.onload = () => {
      // Initialize ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      // Clean up: remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="my-5 rounded-lg">
      {/* Vertical ads */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6976491836430939"
        data-ad-slot="9969220320"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export const HorizontalAdSense = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    document.head.appendChild(script);

    script.onload = () => {
      // Initialize ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      // Clean up: remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="my-5 rounded-lg">
      {/* Horizontal ads */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6976491836430939"
        data-ad-slot="2549115053"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
