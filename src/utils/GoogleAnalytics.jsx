import React, { useEffect } from "react";

export const GoogleAnalytics = () => {
  useEffect(() => {
    // This function is used to load the Google Analytics script asynchronously
    const loadScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NPVWYNTKYG";
      document.head.appendChild(script);

      script.onload = () => {
        // This function initializes and configures Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-NPVWYNTKYG");
      };
    };

    loadScript();
  }, []);
  return <></>;
};

export const GoogleTagManager = () => {
  useEffect(() => {
    // This function is used to load the Google Analytics script asynchronously
    const loadScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NPVWYNTKYG";
      document.head.appendChild(script);

      script.onload = () => {
        // This function initializes and configures Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-NPVWYNTKYG");
      };
    };

    loadScript();
  }, []);
  return <></>;
};
