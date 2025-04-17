import React, { useState, useEffect } from "react";

const roles = ["Full Stack Developer", "Competitive Programmer", "AI-ML Enthusiast", "Computer Engineer"];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[index];

      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="text-3xl font-bold">
        <span className="text-blue-500">{text}</span>
    </h2>
  );
};

export default TypingEffect;
