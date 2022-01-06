import './App.css';
import { useIsTyping } from './hooks';

function App() {
  const isTyping = useIsTyping('typer');
  return (
    <>
      <input type='textbox' id='typer' placeholder='Start typing here...' />
      <span>{isTyping && 'typing...'}</span>
    </>
  );
}

export default App;
