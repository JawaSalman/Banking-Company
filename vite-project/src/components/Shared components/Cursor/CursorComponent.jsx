import React, { useEffect, useState, useCallback } from "react";
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "framer-motion";
import "./CursorComponent.css";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const showCursor = useCallback(() => setIsVisible(true), []);
  const hideCursor = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // 1. Create a dynamic style element to hide the native cursor
    const style = document.createElement("style");
    const transparentImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

    // Inject CSS rule only when this component is mounted
    style.innerHTML = `
      html, body, a, button, [role="button"] {
        cursor: url('${transparentImage}'), auto !important;
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e) => {
      if (!isVisible) showCursor();
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const isInteractive = !!e.target.closest("button, a, .ma-hero-btn, [role='button']");
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      // 2. Clean up: Remove the style tag and events when component is unmounted
      document.head.removeChild(style);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, [isVisible, mouseX, mouseY, showCursor, hideCursor]);

  return (
    <motion.div
      className="custom-cursor-container"
      style={{
        left: smoothX,
        top: smoothY,
        opacity: isVisible ? 1 : 0,
        display: isVisible ? "flex" : "none",
      }}
    >
      <motion.div
        className="cursor-outline"
        animate={{
          scale: isHovered ? 2 : 1,
          borderColor: isHovered ? "rgba(202, 255, 0, 0.4)" : "#caff00",
          borderWidth: isHovered ? "3px" : "1.5px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.div
        className="cursor-dot"
        animate={{ scale: isHovered ? 0.6 : 1 }}
      />
    </motion.div>
  );
};

export default Cursor;
