import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResizeWindow);
    return () => {
      window.removeEventListener("resize", onResizeWindow);
    };
  }, [])

  window.scrollTo({
    top: '100%',
    behavior: 'smooth'
  })

  return (
    <div className={s.App}>
      <Main width={width} />
    </div>
  );
}

export default App;
