import React, { useEffect } from "react";

const LaptopOnlyPage = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    if (isMobile) {
      window.location.href = "/mobile-only-page";
    }
  }, []);
  return <div></div>;
};

export default LaptopOnlyPage;
