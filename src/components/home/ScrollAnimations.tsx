import { useEffect, useRef } from "react";

const ScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements with scroll animations
    const elements = document.querySelectorAll(
      ".scroll-fade-in, .animated-underline"
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimations;
