import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to the top of the page if no hash is present
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default ScrollRestoration;
