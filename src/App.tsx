import React, { useState } from 'react';
import { Header } from './ui/header/Header';
import { Home } from './ui/home/Home';
import { bind } from './utils/bind';
import stylesApp from './App.module.css';
import classNamesBind from 'classnames/bind';
import stylesDark from './styles/themeDark.module.css';
// import stylesLight from './styles/themeLight.module.css';

const cx = bind(stylesApp);

function App() {
  const [selectTheme, setSelectTheme] = useState('light');

  classNamesBind.bind(stylesDark);

  const changeTheme = async () => {
    if (selectTheme === 'light') {
      console.log('Importing Light');
      await import('./styles/themeLight.module.css');
      setSelectTheme('dark');
    } else {
      console.log('Importing Dark');
      window.location.reload();
      setSelectTheme('light');
    }
  };

  return (
    <>
      <header>
        <div className={cx('theme-button')}>
          <h1 onClick={changeTheme}>{selectTheme}</h1>
        </div>
        <Header />
      </header>
      <Home />
    </>
  );
}

export default App;
