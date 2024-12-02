import { Button } from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert('Кнопка нажата')}>
        ClickMe
      </Button>
    </div>
  );
}

export default App;
