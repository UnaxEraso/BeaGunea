import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // URL-a (pathname) aldatzen den bakoitzean, gora eraman
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
