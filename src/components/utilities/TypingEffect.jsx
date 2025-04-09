import React, { useState, useEffect } from "react";

const words = ["Hello, world!", "Welcome to my site.", "Enjoy your stay."];

const TypingEffect = ({ speed = 100, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? speed / 2 : speed;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed, pause]);

  return <p>{text}</p>;
};

export default TypingEffect;
