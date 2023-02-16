import React, { useState, useEffect } from 'react';

const WriteText = ({ text, nextStage, styles, speed = 30}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextChar = text.charAt(currentIndex);
      setDisplayText(displayText + nextChar);
      setCurrentIndex(currentIndex + 1);
    }, speed); // Ajuste a velocidade de escrita aqui (tempo entre cada caractere)

    return () => clearInterval(intervalId);
  }, [currentIndex, displayText, text, speed]);

  useEffect(() => {
    if (displayText === text && nextStage) {
      nextStage();
    }
  }, [displayText, text, nextStage]);

  return <div className={styles}>{displayText}</div>;
};

export default WriteText;
