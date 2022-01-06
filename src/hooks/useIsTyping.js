import { useEffect, useState } from 'react';

let timerId;
let timeoutValue = 1000;

export function useIsTyping(id) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const typer = document.getElementById(id);
    typer.addEventListener('keypress', handleKeypress);
    typer.addEventListener('keyup', handleKeyup);
    return () => {
      typer.removeEventListener('keypress', handleKeypress);
      typer.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  function handleKeypress() {
    window.clearTimeout(timerId);
    if (!isTyping) {
      setIsTyping(true);
    }
  }

  function setIsTypingxx() {
    setIsTyping(false);
  }

  function handleKeyup() {
    window.clearTimeout(timerId);
    timerId = setTimeout(setIsTypingxx, timeoutValue);
  }

  return isTyping;
}
