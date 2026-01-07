'use client';

import React from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;          // kecepatan per huruf (ms)
  startDelay?: number;     // delay sebelum mulai ngetik (ms)
  className?: string;
  showCursor?: boolean;
  
}

const TypedText: React.FC<TypedTextProps> = ({
  text,
  speed = 100,
  startDelay = 200,
  className = '',
  showCursor = true,
}) => {
  const [displayed, setDisplayed] = React.useState('');
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    let index = 0;
    let timeoutId: number | undefined;

    const typeNext = () => {
      setDisplayed(text.slice(0, index + 1));
      index += 1;

      if (index < text.length) {
        timeoutId = window.setTimeout(typeNext, speed);
      } else {
        setIsDone(true);
      }
    };

    const startId = window.setTimeout(typeNext, startDelay);

    return () => {
      window.clearTimeout(startId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <span
          className={`ml-1 inline-block w-[1px] h-[1.2em] bg-sky-400 align-middle ${
            isDone ? 'opacity-0' : 'animate-pulse'
          }`}
        />
      )}
    </span>
    
  );
};

export default TypedText;
