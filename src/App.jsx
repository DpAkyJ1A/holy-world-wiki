import Routers from './Routers/Routers'
import './App.css'
import { useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' ? true : false
  );

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : undefined}`}>
      <Routers />
    </div>
  );
}

export default App
